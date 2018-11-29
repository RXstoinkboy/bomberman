import {Game} from './index.mjs';
import {Board} from './Board.mjs';
import {VAR} from './VAR.mjs';

Bomb.count = 0;
Bomb.maxCount = 2;
Bomb.elements = { // bomb states: before and after explosions
    'bomb':{sx:126, sy:16, frames:[0,0,1,1,2,2]},
    'center':{sx:126, sy:64, frames:[0,0,1,1,2,2,3,3,2,2,1,1,0,0]}, // explode and disapear
    'up_boom':{sx:126, sy:96, frames:[0,0,1,1,2,2,3,3,2,2,1,1,0,0]},
    'down_boom':{sx:126, sy:96, frames:[0,0,1,1,2,2,3,3,2,2,1,1,0,0]},
    'right_boom':{sx:126, sy:48, frames:[0,0,1,1,2,2,3,3,2,2,1,1,0,0]},
    'left_boom':{sx:126, sy:48, frames:[0,0,1,1,2,2,3,3,2,2,1,1,0,0]},
    'up_boom_end':{sx:126, sy:80, frames:[0,0,1,1,2,2,3,3,2,2,1,1,0,0]},
    'down_boom_end':{sx:126, sy:80, frames:[0,0,1,1,2,2,3,3,2,2,1,1,0,0], flip:true},
    'left_boom_end':{sx:126, sy:32, frames:[0,0,1,1,2,2,3,3,2,2,1,1,0,0]},
    'right_boom_end':{sx:126, sy:32, frames:[0,0,1,1,2,2,3,3,2,2,1,1,0,0], flip: true}, 
}

export function Bomb(column, row, boom_type){
    if((Bomb.count < Bomb.maxCount && Game.board.b[row][column].type != 'bomb') || boom_type){
        Bomb.count++;
        this.type = 'solid'; // make sure that you can't walk over a bomb before it explodes
        this.subtype = 'bomb';
        this.data = !boom_type ? Bomb.elements.bomb : Bomb.elements[boom_type];
        this.sx = Board.elements.floor.sx;
        this.sy = Board.elements.floor.sy;
        this.bombSx = 126; // sprite position
        this.bombSy = 16; // sprite position
        this.frames = [0,0,1,1,2,2]
        this.currentFrame = 0;
        this.column = column;
        this.row = row;

        this.timer = 30; // bomb should explode after 30 frames
        this.range = 2; // 2 blocks range of explosion

        Game.board.b[this.row][this.column] = this; // changing game greenfield from empty to bomb
    }
}

Bomb.prototype.draw = function(){
    if(this.timer > 0){
        this.targetX = this.column*Game.board.frameWidth*VAR.scale;
        this.targetY = this.row*Game.board.frameHeight*VAR.scale;

        if(this.data.flip) {
            Game.ctx.save(); // save all vanvas settings
            if(this.boom_type == 'down_boom_end'){
                Game.ctx.scale(1,-1); // setting it like that to flip along Y axis
                this.targetY = this.targetY*-1-(Game.board.frameHeight*VAR.scale);
            }else{
                Game.ctx.scale(-1,1); // flip along X axis
                this.targetX = this.targetX*-1-(Game.board.frameWidth*VAR.scale);
            }
            
        };

    Game.ctx.drawImage(
        Game.sprite,
        this.data.sx+this.data.frames[this.currentFrame]*Game.board.frameWidth, // dynamic definition to assign next frames
        this.data.sy,
        Game.board.frameWidth,
        Game.board.frameHeight,
        this.targetX,
        this.targetY,
        Game.board.frameWidth*VAR.scale,
        Game.board.frameHeight*VAR.scale
    );
    this.currentFrame = this.currentFrame+1 < this.data.frames.length ? this.currentFrame+1 : 0;
    this.timer--;
    }else if(this.type =='solid'){ // after explosion
        Bomb.count--; // reduce number of bombs
        this.type = 'empty'; // when bomb explodes, it's type is empty
        this.currentFrame = 0;
        this.data = Bomb.elements.center; // change state of bomb to center (of explosion)
        this.timer = this.data.frames.length // change frames amount to length of explosion
    }else{ // after explosion change to grren field
        Game.board.b[this.row][this.column] = Board.elements.floor;
    }
};