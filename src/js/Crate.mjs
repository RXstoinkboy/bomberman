import {
  Board,
} from './Board.mjs';
import {
  VAR,
} from './VAR.mjs';
import {
  Game,
} from './index.mjs';

export function Crate(column, row) { // place to put a crate
  this.sx = Board.elements.floor.sx;
  this.sy = Board.elements.floor.sy;
  this.animSx = 126;
  this.animSy = 0;
  this.currentFrame = 0;
  this.frames = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
  this.type = 'empty';
  this.subtype = 'crate';
  this.row;
  this.column = column;

  Game.board.b[row][column] = this;
}

Crate.prototype.draw = function () {
  Game.ctx.drawImage(
    Game.sprite,
    this.animSx * this.frames[this.currentFrame] * Game.board.frameWidth,
    this.animSy,
    Game.board.frameWidth,
    Game.board.frameHeight,
    this.column * Game.board.frameWidth * VAR.scale,
    this.row * Game.board.frameHeight * VAR.scale,
    Game.board.frameWidth * VAR.scale,
    Game.board.frameWidth * VAR.scale,
  );
  this.currentFrame++;
  if (this.currentFrame >= this.frames.length) {
    Game.board.b[this.row][this.column] = Board.elements.floor; // after explosion put floor into bombs place
  }
};
