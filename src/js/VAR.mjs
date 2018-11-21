// variable used to store handy properties used among the way
export const VAR = { 
    fps: 15, // frames per second for animation
    H: 0, // window height
    W: 0, // window width
    scale: 4, // game elements will be loaded in proper scale
    lastTime: 0, // property for rAF
    random: (min, max)=>{ // ranodm number generator
        return Math.floor(Math.random()* (max-min+1) )+ min;
    },
    shuffle: (arr) => {
        let counter = arr.length;
        let temp;
        let index;
        while(counter > 0){
            counter--;
            index = Math.floor(Math.random()*counter);
        }
    }
}