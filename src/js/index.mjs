import {
  Character,
  Hero,
  Enemy,
} from './Characters.mjs';
import {
  VAR,
} from './VAR.mjs';
import {
  Board,
} from './Board.mjs';
import {
  Bomb,
} from './Bomb.mjs';
import { Crate } from './Crate.mjs';

document.addEventListener('DOMContentLoaded', () => {
  Game.sprite = new Image();
  Game.sprite.onload = Game.init; // makes sure that init() is launched after image is loaded
  Game.sprite.src = 'dist/img/bombe.png';
});

// object containg basic game properties
export let Game = {
  init() {
    Game.canvas = document.createElement('canvas'); // create canvas
    Game.ctx = Game.canvas.getContext('2d'); // get canvas 2d context
    Game.board = new Board();
    Game.layout(); // launch function to resize W and H based on window inner dimensions
    window.addEventListener('resize', Game.layout); // launch layout() function on window resize
    document.body.appendChild(Game.canvas); // append canvas to DOM

    Game.toDraw = {}; // object to store all characters

    Game.hero = new Hero();

    let tempEmpty;
    // create 5 enemies in random places
    for (let i = 0; i < 5; i++) {
      tempEmpty = Game.board.getEmptySpace();
      new Enemy(tempEmpty.x * Game.board.frameWidth, tempEmpty.y * Game.board.frameHeight);
    }

    // add event listeners for char sterring

    window.addEventListener('keydown', Game.onKey);
    window.addEventListener('keyup', Game.onKey);

    Game.animationLoop(); // launch game animation loop
  },

  onKey: (e) => {
    if (e.keyCode >= 37 && e.keyCode <= 40 || e.keyCode == 32) { // use only arrows and space in game
      e.preventDefault(); // turn off standard key actions
      if (e.type == 'keydown' && !Game[`key_${e.keyCode}`]) { // when key has been pressed
        Game[`key_${e.keyCode}`] = true; // set key to work
        if (e.keyCode >= 37 && e.keyCode <= 40) { // if any arrow was pressed then make sure to disable previously pressed arrow
          for (let i = 37; i <= 40; i++) {
            if (i != e.keyCode) {
              Game[`key_${i}`] = false;
            }
          }
          Game.hero.updateState();
        } else {
          new Bomb(Game.hero.column, Game.hero.row);
        }
        Game.hero.updateState(); // launch update function when key is pressed (conditions above)
      } else if (e.type == 'keyup') { // update state when key is released as well (char is standing)
        Game[`key_${e.keyCode}`] = false;
        Game.hero.updateState();
      }
    }
  },

  layout: () => {
    VAR.H = window.innerHeight; // get window dimensions dynamically
    VAR.W = window.innerWidth; // as above

    VAR.scale = Math.max(1, Math.min(
      Math.floor(VAR.H / (Game.board.frameWidth * Game.board.b[0].length)),
      Math.floor(VAR.W / (Game.board.frameHeight * Game.board.b.length)),
    ));

    Game.canvas.width = Math.round(VAR.scale * Game.board.frameWidth * Game.board.b[0].length); // as above
    Game.canvas.height = Math.round(VAR.scale * Game.board.frameHeight * Game.board.b.length); // set canvas dimensions based on window dimensions

    Game.canvas.style[Modernizr.prefixed('transform')] = `translate(${Math.round((VAR.W - Game.canvas.width) / 2)}px, ${Math.round((VAR.H - Game.canvas.height) / 2)}px)`;

    // 'translate('+Math.round((VAR.W-Game.canvas.width)/2) + 'px,' +Math.round((VAR.H-Game.canvas.height)/2)+'px)';
    Game.ctx.imageSmoothingEnabled = false; // character pixels are super sharp
    Game.ctx.mozImageSmoothingEnabled = false;
    Game.ctx.oImageSmoothingEnabled = false;
    Game.ctx.webkitImageSmoothingEnabled = false;
  },

  animationLoop: (time) => {
    requestAnimationFrame(Game.animationLoop);
    // limit fps to desired rate
    if (time - VAR.lastTime >= 1000 / VAR.fps) {
      VAR.lastTime = time;

      Game.ctx.clearRect(0, 0, VAR.W, VAR.H);

      Game.board.draw();

      for (const i in Game.toDraw) {
        Game.toDraw[i].draw();
      }
    }
  },
};
