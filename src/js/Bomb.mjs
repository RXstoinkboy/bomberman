import {Game} from './index.mjs';
import {Board} from './Board.mjs';
import {VAR} from './VAR.mjs';

Bomb.count = 0;
Bomb.maxCount = 2;
export function Bomb(column, row){
    if(Bomb.count < Bomb.maxCount && Game.board.b[row][column].type != 'bomb'){
        Bomb.count++;
        this.type = 'bomb';
        this.sx = Board.elements.floor.sx;
        this.sy = Board.elements.floor.sy;
        this.bombSx = 126; // sprite position
        this.bombSy = 16; // sprite position
        this.frames = [0,0,1,1,2,2]
        this.currentFrame = 0;
        this.column = column;
        this.row = row;

        Game.board.b[this.row][this.column] = this; // changing game greenfield from empty to bomb
    }
}

Bomb.prototype.draw = function(){
    Game.ctx.drawImage(
        Game.sprite,
        this.bombSx+this.frames[this.currentFrame]*Game.board.frameWidth, // dynamic definition to assign next frames
        this.bombSy,
        Game.board.frameWidth,
        Game.board.frameHeight,
        this.column*Game.board.frameWidth*VAR.scale,
        this.row*Game.board.frameHeight*VAR.scale,
        Game.board.frameWidth*VAR.scale,
        Game.board.frameHeight*VAR.scale
    );
    this.currentFrame = this.currentFrame+1 < this.frames.length ? this.currentFrame+1 : 0;
}