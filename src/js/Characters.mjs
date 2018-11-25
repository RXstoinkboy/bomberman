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
    // char speed depending on his state
    if (this.state == 'down_go'){
        this.y += this.speed;
    } else if (this.state == 'right_go'){
        this.x += this.speed;
    }else if (this.state == 'up_go'){
        this.y -= this.speed;
    }else if (this.state == 'left_go'){
        this.x -= this.speed;
    };

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
}

Hero.prototype = new Character(true); // extending Character draw method to Hero constructor
Hero.prototype.constructor = Hero;

Hero.prototype.updateState = function(){
    this.tempState = null; // temporary state variable
    if (Game.key_37){ // when arrow left is pressed then change temporary state to left_go
        this.tempState = 'left_go';
    } else if (Game.key_38){ // when arrow left is pressed then change temporary state to left_go
        this.tempState = 'up_go';
    }else if (Game.key_39){ // when arrow left is pressed then change temporary state to left_go
        this.tempState = 'right_go';
    }else if (Game.key_40){ // when arrow left is pressed then change temporary state to left_go
        this.tempState = 'down_go';
    }else if (this.state.slice(-2) == 'go'){ // check if current active state was with 'go' ending
    console.log('puszczam');    
    this.tempState = this.state.slice(0,this.state.indexOf('_go')); // slice last 3 digits to be left with static state
    }
    if (this.tempState!= this.state){ // check if state has changed
        this.currentFrame = 0;
        this.state = this.tempState; // reasign state to temporary state
    }
}

export function Enemy(){
    Character.call(this);
    this.state = 'left_go'; // current animation state of Enemy
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
    }
}

Enemy.prototype = new Character(true); // extending Character draw method to Hero constructor
Enemy.prototype.constructor = Enemy;