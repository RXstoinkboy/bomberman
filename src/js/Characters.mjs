import {Game} from './index.mjs';
import {VAR} from './VAR.mjs';

Character.count = 0;

export function Character(inheritance){
    Character.count++; // controlling how many characters have been generated
    this.id = `char_${Character.count}`; // setting specific id to each character
    
    if (!inheritance){ // allowed only if given argument is true
        Game.toDraw[this.id] = this; // pushing created character into object stroing all characters
    }
    
    this.frameWidth = 21; // width of a sprite
    this.frameHeight = 24; // height of a sprite

    this.modX = -2;
    this.modY = -8;

    this.speed = 2;

    this.currentFrame = 0; // current frame of animation

    this.maxFrameDelay = 2; // properties to slow down animation
    this.currentFrameDelay = 0;
}

Character.prototype.draw = function (){ // draw method prototype
    if(this.state.slice(-2) == 'go'){    
        // char speed depending on his state
        if (this.state == 'down_go'){
            this.y += this.speed;
        }else if (this.state == 'right_go'){
            this.x += this.speed;
        }else if (this.state == 'up_go'){
            this.y -= this.speed;
        }else if (this.state == 'left_go'){
            this.x -= this.speed;
        }
        
        this.rowAndColumn();
        
    } 

    // Game.ctx.fillRect(
    //     this.column*Game.board.frameWidth*VAR.scale,
    //     this.row*Game.board.frameHeight*VAR.scale,
    //     Game.board.frameWidth*VAR.scale,
    //     Game.board.frameHeight*VAR.scale
    //     );

    //     Game.ctx.fillRect(
    //         this.nextColumn*Game.board.frameWidth*VAR.scale,
    //         this.nextRow*Game.board.frameHeight*VAR.scale,
    //         Game.board.frameWidth*VAR.scale,
    //         Game.board.frameHeight*VAR.scale
    //         );

    if(this.states[this.state].flip){ // inverse image if 'flip' property is true
    Game.ctx.save(); // saving a given canvas state
    Game.ctx.scale(-1,1); // inversing canvas
    }

    Game.ctx.drawImage( // definig what part of image should be clipped
        Game.sprite,
        this.states[this.state].sx + this.states[this.state].f[this.currentFrame]*this.frameWidth,
        this.states[this.state].sy,
        this.frameWidth,
        this.frameHeight,
        this.states[this.state].flip ? (-this.frameWidth - this.modX - this.x )*VAR.scale : (this.x + this.modX)*VAR.scale,
        (this.y+this.modY)*VAR.scale,
        this.frameWidth*VAR.scale,
        this.frameHeight*VAR.scale
    );
    if(this.states[this.state].flip){
        Game.ctx.restore(); // restoring previously saved canvas state
      
    };
    if (this.currentFrameDelay < this.maxFrameDelay){ // slowing down animation
        this.currentFrameDelay++;
    } else {
        this.currentFrameDelay = 0;
        this.currentFrame = this.currentFrame+1 >= this.states[this.state].f.length ? 0 : this.currentFrame+1;
    }
}

// adding collision detection for Character
Character.prototype.rowAndColumn = function() {
    // compute in which row and in which column character is located
    this.row = Math.round(this.y/Game.board.frameHeight);
    this.column = Math.round(this.x/Game.board.frameWidth);
    if(this.state.slice(-3) == '_go'){ // determine on which board element char is
        if (this.state == 'left_go' || this.state == 'right_go'){
            this.nextRow = this.row;
            this.nextColumn = this.state == 'left_go' ? Math.floor(this.x/Game.board.frameWidth) : Math.ceil(this.x/Game.board.frameWidth); // round down if movement to left and round up when char moving right
        } else {
            this.nextColumn = this.column;
            this.nextRow = this.state == 'up_go' ? Math.floor(this.y/Game.board.frameHeight) : Math.ceil(this.y/Game.board.frameHeight);
        };
        // check if current column and row changes or not && check if next place is empty or not
        if( !(this.row == this.nextRow && this.column == this.nextColumn) && Game.board.b[this.nextRow][this.nextColumn].type != 'empty' ){

            this.state = this.state.slice(0,-3);
            this.currentFrame = 0;
            // when char hits an obstacle we want to put him on the center of the area
            if (this.row!=this.nextRow){
                this.y = this.row*Game.board.frameHeight;
            } else {
                this.x = this.column*Game.board.frameWidth;
            }
        } else { // situation when character can walk on certain area - let's center him!
            if (this.row!=this.nextRow){ // both ifs are making sure that character is walking in the 'tunnel'
                this.x = this.nextColumn*Game.board.frameWidth;
            } else if (this.column!=this.nextColumn){
                this.y = this.nextRow*Game.board.frameHeight;
            }
        }
    } else { // if char not moving then don't reasign row and col position
        this.nextRow = this.row;
        this.nextColumn = this.column;
    }
}

export function Hero(){ // deifing main hero
    Character.call(this); // extending Character class
    this.state = 'down'; // current animation state of Hero
    this.states = { // definig all possible animation states of Hero
        'down': {sx:0, sy:0, f:[0]},
        'down_go': {sx:0, sy:0, f:[1,0,2,0]},
        'left': {sx:63, sy:0, f:[0]},
        'left_go': {sx:63, sy:0, f:[1,0,2,0]},
        'up': {sx:0, sy:24, f:[0]},
        'up_go': {sx:0, sy:24, f:[1,0,2,0]},
        'right': {sx:63, sy:0, f:[0], flip: true}, // flip set up to inverse character graphics
        'right_go': {sx:63, sy:0, f:[1,0,2,0], flip: true},
        'ko': {sx: 0, sy: 48, f:[0,1,0,1,0,1,2,3,4]} // death animation
    };
    this.x = Game.board.frameWidth;
    this.y = Game.board.frameHeight;

    this.rowAndColumn();
}

Hero.prototype = new Character(true); // extending Character draw method to Hero constructor
Hero.prototype.constructor = Hero;

Hero.prototype.updateState = function(){
    this.tempState = this.state; // temporary state variable
    if (Game.key_37){ // when arrow left is pressed then change temporary state to left_go
        this.tempState = 'left_go';
    } else if (Game.key_38){ // when arrow left is pressed then change temporary state to left_go
        this.tempState = 'up_go';
    }else if (Game.key_39){ // when arrow left is pressed then change temporary state to left_go
        this.tempState = 'right_go';
    }else if (Game.key_40){ // when arrow left is pressed then change temporary state to left_go
        this.tempState = 'down_go';
    }else if (this.state.slice(-2) == 'go'){ // check if current active state was with 'go' ending
    this.tempState = this.state.slice(0,this.state.indexOf('_go')); // slice last 3 digits to be left with static state
    }
    if (this.tempState!= this.state){ // check if state has changed
        this.currentFrame = 0;
        this.state = this.tempState; // reasign state to temporary state
    }
}

Enemy.all = {};
export function Enemy(x,y){
    Character.call(this);
    Enemy.all[this.id] = this; // assign id to enemy
    this.state = 'down'; // current animation state of Enemy
    this.states = { // definig all possible animation states of Enemy
        'down': {sx:0, sy:72, f:[0]}, // static
        'down_go': {sx:0, sy:72, f:[1,0,2,0]}, // dynamic
        'left': {sx:63, sy:24, f:[0]},
        'left_go': {sx:63, sy:24, f:[1,0,2,0]},
        'up': {sx:63, sy:72, f:[0]},
        'up_go': {sx:63, sy:72, f:[1,0,2,0]},
        'right': {sx:63, sy:24, f:[0], flip: true}, // flip set up to inverse character graphics
        'right_go': {sx:63, sy:24, f:[1,0,2,0], flip: true},
        'ko': {sx: 0, sy: 96, f:[0,1,2,3,4,5]} // death animation
    };
    this.x = x;
    this.y = y;
    
    this.rowAndColumn();
    this.setDirection();
}

Enemy.prototype = new Character(true); // extending Character draw method to Hero constructor
Enemy.prototype.constructor = Enemy;

Enemy.prototype.setDirection = function(){
    this.canGo = this.canGo || []; // assign array for possible directions or use the one already assigned
    this.canGo.length = 0; // empty the array
    // enemy already has assigned position
    // we have to iterate through all positions around it and check if they are empty of solid
    
    for (let i = this.column-1; i<= this.column+1; i++){

            for (let j = this.row-1 ; j <= this.row+1; j++){

                if ( !(i==this.column && j==this.row)){ // don't check position where enemy is alrady situated
                    
                    if ( i == this.column || j == this.row ) {// don't check corners
                        if(Game.board.b[j][i].type == 'empty'){
                            this.canGo.push({x:i, y:j});
                        } 
                    }
                }
            }
        };

    if(this.canGo.length>0){
            this.tempPos = this.canGo[VAR.random(0, this.canGo.length-1)];
            
            if(this.column < this.tempPos.x){
                this.state = 'right_go';
            } else if (this.column> this.tempPos.x){
                this.state = 'left_go';
            } else if (this.row < this.tempPos.y){
                this.state = 'down_go';
            }else if (this.row > this.tempPos.y){
                this.state = 'up_go';
            }
    } else if (this.state.slice(-2) == 'go'){
         this.state = this.state.slice(0, -3);
    }
    
}