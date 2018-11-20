Character.count = 0;

function Character(){
    Character.count++;
    this.id = `char_${Character.count}`;
    Game.toDraw[this.id] = this;

    this.frameWidth = 21
    this.frameHeight = 24;

    this.startX = 0;
    this.startY = 0;

    this.frames = [1,0,2,0];

    this.currentFrame = 0;
}

Character.prototype.draw = function (){
    Game.ctx.drawImage(
        Game.sprite,
        this.startX + this.frames[this.currentFrame]*this.frameWidth,
        this.startY,
        this.frameWidth,
        this.frameHeight,
        0,
        0,
        this.frameWidth,
        this.frameHeight
    )
}

// character.count = 0;

// const character = {
//     id,
//     Game.toDraw[this.id] = this,
//     // ...
// }

// function createCharacter(){
//     character.count++;
//     return Object.create(character);
// }