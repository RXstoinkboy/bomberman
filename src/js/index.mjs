import {Character, Hero, Enemy} from './Characters.mjs';
import {VAR} from './VAR.mjs';

document.addEventListener('DOMContentLoaded', function (){ 
    Game.sprite = new Image();
    Game.sprite.onload = Game.init; // makes sure that init() is launched after image is loaded
    Game.sprite.src = 'dist/img/bombe.png';
});

// object containg basic game properties
export let Game = {
    init: ()=> {
        Game.canvas = document.createElement('canvas'); // create canvas
        Game.ctx = Game.canvas.getContext('2d'); // get canvas 2d context
        Game.layout(); // launch function to resize W and H based on window inner dimensions
        window.addEventListener('resize', Game.layout); // launch layout() function on window resize
        document.body.appendChild(Game.canvas); // append canvas to DOM
    
        Game.toDraw = {}; // object to store all characters
    
        // Game.character = new Hero();
        
        Game.enemy = new Enemy();

        Game.animationLoop(); // launch game animation loop
        },

    layout: ()=> {
        VAR.H = window.innerHeight; // get window dimensions dynamically
        VAR.W = window.innerWidth; // as above
        Game.canvas.height = VAR.H; // set canvas dimensions based on window dimensions
        Game.canvas.width = VAR.W // as above

        Game.ctx.imageSmoothingEnabled = false; // character pixels are super sharp
        Game.ctx.mozImageSmoothingEnabled = false;
        Game.ctx.oImageSmoothingEnabled = false;
        Game.ctx.webkitImageSmoothingEnabled = false;
    },

    animationLoop: (time)=> {
        requestAnimationFrame(Game.animationLoop);
        // limit fps to desired rate
            if(time-VAR.lastTime >= 1000/VAR.fps){
                VAR.lastTime = time;

                Game.ctx.clearRect(0,0,VAR.W, VAR.H);
                for(let i in Game.toDraw){        
                        Game.toDraw[i].draw();
                }
            }
        }
}



