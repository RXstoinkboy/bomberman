document.addEventListener('DOMContentLoaded', function (){ 
    Game.sprite = new Image();
    Game.sprite.onload = Game.init; // makes sure that init() is launched after image is loaded
    Game.sprite.src = 'src/img/bombe.png';
});

const VAR = { // variable used to store handy properties used among the way
fps: 15, // frames per second for animation
H: 0, // window height
W: 0, // window width
scale: 1, // game elements will be loaded in proper scale
lastTime: 0, // property for rAF
random: (min, max)=>{ // ranodm number generator
return Math.floor(Math.random()* (max-min+1) )+ min;
}
}

// obcject containg basic game properties
let Game = {
    init: ()=> {
        Game.canvas = document.createElement('canvas'); // create canvas
        Game.ctx = Game.canvas.getContext('2d'); // get canvas 2d context
        Game.layout(); // launch function to resize W and H based on window inner dimensions
        window.addEventListener('resize', Game.layout); // launch layout() function on window resize
        document.body.appendChild(Game.canvas); // append canvas to DOM
    
        Game.toDraw = {}; // object to store all characters
    
        Game.character = new Character();
        Game.animationLoop(); // launch game animation loop
        },

layout: ()=> {
    VAR.H = window.innerHeight; // get window dimensions dynamically
    VAR.W = window.innerWidth; // as above
    Game.canvas.height = VAR.H; // set canvas dimensions based on window dimensions
    Game.canvas.width = VAR.W // as above
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


