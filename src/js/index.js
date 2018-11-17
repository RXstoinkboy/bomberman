window.addEventListener('load', () => {
    Game.sprite = new Image(); // creating new imae assigned to Game object
    Game.sprite.onload = Game.init; // make sure that game is started after source image is loaded
    Game.sprite.src = '/src/img/bombe.png'; // sprite image source
});

// basic game window properties used as template to build further functions
VAR = {
    fps: 15,
    W: 0, // game window width
    H: 0, // game window height
    scale: 1, // to make sure that game elements are pasted in right scale
    lastTime: 0,
    rand: (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min; // random number generator function
    }
}

// Game is an object created to store all necessary game properties and methods
Game = {
    init: () => { 
        Game.canvas = document.createElement('canvas'); // setting up canvas
        Game.ctx = Game.canvas.getContext('2d');
        Game.layout(); // resizing game window if browser window gets resized
        window.addEventListener('resize', Game.layout);
        document.body.appendChild(Game.canvas);

Game.toDraw = {}; // stores all characters and elements to be drawn during the game

        Game.animationLoop() // starting game animation loop
    },

    layout: () => {
        VAR.H = window.innerHeight;
        VAR.W = window.innerWidth;

        // setting canvas width and height = window dimensions
        Game.canvas.height = VAR.H;
        Game.canvas.width = VAR.W;
    },

    animationLoop: () => {
        requestAnimationFrame(Game.animationLoop);
        if (time - VAR.lastTime >= 1000 / VAR.fps) {
            VAR.lastTime = time;

            Game.ctx.clearRect(0, 0, VAR.W, VAR.H);

            for (let o in Game.toDraw){
                Game.toDraw[o].draw(); // looping through each drawn element to draw each of them
            }
        }
    }
}