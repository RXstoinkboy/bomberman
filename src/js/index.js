window.addEventListener('load', () => {
    Game.init()
});

// basic game window properties used as template to build further functions
VAR = {
    fps: 15,
    W: 0, // game window width
    H: 0, // game window height
    scale: 1, // to make sure that game elements are pasted in right scale
    lastTime: 0,
    rand: (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

// Game is an object created to store all necessary game properties and methods
Game = {
    init: () => { // started just after loading window
        Game.canvas = document.createElement('canvas');
        Game.ctx = Game.canvas.getContext('2d');
        Game.layout(); // make sure that game window is responsive
        window.addEventListener('resize', Game.layout);
        document.body.appendChild(Game.canvas);
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
        }
    }
}