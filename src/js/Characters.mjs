import {Game} from './index.mjs';
import {VAR} from './VAR.mjs';
import { ENOTEMPTY } from 'constants';

Character.count = 0;

export function Character(inheritance){
    Character.count++; // controlling how many characters have been generated
    this.id = `char_${Character.count}`; // setting specific id to each character
    
    if (!inheritance){ // allowed only if given argument is true
        Game.toDraw[this.id] = this; // pushing created character into object stroing all characters
    }
    
    this.frameWidth = 21; // width of a sprite
    this.frameHeight = 24; // height of a sprite

    // this.startX = 0; // base sprite coords
    // this.startY = 0;

    // this.frames = [1,0,2,0]; // frames to specify which sprite should be used to animate character

    this.currentFrame = 0; // current frame of animation

    this.maxFrameDelay = 2; // properties to slow down animation
    this.currentFrameDelay = 0;
}

Character.prototype.draw = function (){ // draw method prototype
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
        this.states[this.state].flip ? -this.frameWidth*VAR.scale : 0,
        0,
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
    this.state = 'down_go'; // current animation state of Hero
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
    }
}

Hero.prototype = new Character(true); // extending Character draw method to Hero constructor
Hero.prototype.constructor = Hero;

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