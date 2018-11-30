import {
  VAR
} from './VAR.mjs'
import {
  Game
} from './index.mjs'
import { Bomb } from './Bomb.mjs'

Board.templates = [ // creating board templates here
  [
    'WWWWWWWWWWWWWWW',
    'W             W',
    'W X X X X X X W',
    'W             W',
    'W X X X X X X W',
    'W             W',
    'W X X X X X X W',
    'W             W',
    'W X X X X X X W',
    'W             W',
    'WWWWWWWWWWWWWWW'
  ],
  [
    'WWWWWWWWWWWWWWW',
    'W             W',
    'W X XXX XXX X W',
    'W             W',
    'W X X X X X X W',
    'W X         X W',
    'W X X X X X X W',
    'W             W',
    'W XXX X X XXX W',
    'W             W',
    'WWWWWWWWWWWWWWW'
  ]
]

// define all board elements
// type: defines what kind of material it is:
// empty - you can walk on it
// soft - you can destroy it
// solid - undestructible
Board.elements = {
  floor: {
    sx: 174,
    sy: 16,
    type: 'empty',
    subtype: 'board'
  },
  W: {
    sx: 190,
    sy: 16,
    type: 'solid',
    subtype: 'board'
  }, // outer wall
  X: {
    sx: 206,
    sy: 16,
    type: 'solid',
    subtype: 'board'
  }, // inner wall
  box: {
    sx: 126,
    sy: 0,
    type: 'soft',
    subtype: 'board',
    koObj: 'Crate'
  }
}
export function Board () {
  this.frameWidth = 16
  this.frameHeight = 16
  this.parse(Board.templates[VAR.random(0, Board.templates.length - 1)]) // pick rundom board from our templates and convert it into right format
  // add boxes on the board
  for (let i = 0; i < 20; i++) {
    this.addCrate()
  }
}

Board.prototype.parse = function (arr) { // convert string board to array of arrays with objects inside
  this.emptySpaces = [] // array to store all exisiting empty places (grass) on board
  this.b = []

  for (let i = 0; i < arr.length; i++) { // iterate through each raw of the board
    this.b.push([]) // create array for each row of the board
    for (let j = 0; j < arr[i].length; j++) { // iterate through each element (letter) in each row
      // push corresponding object definition in place of a specific letter key
      this.b[i].push(Board.elements[arr[i].charAt(j) == ' ' ? 'floor' : arr[i].charAt(j)]) // pick appropriate obj definition from Board.elements

      if (this.b[i][j].type === 'empty' && !(i == 1 && j == 1) && !(i == 2 && j == 1) && !(i == 1 && j == 2)) {
        this.emptySpaces.push({
          x: j,
          y: i
        })
      }
    }
  }
  this.emptySpaces = VAR.shuffle(this.emptySpaces) // shuffle array storing empty spaces
}

Board.prototype.getEmptySpace = function () {
  return this.emptySpaces.length > 0 ? this.emptySpaces.shift() : null
}

Board.prototype.addCrate = function () { // adding crate
  const position = this.getEmptySpace()
  if (position) {
    this.b[position.y][position.x] = Board.elements.box
  }
}

Board.prototype.draw = function () {
  for (let i = 0; i < this.b.length; i++) { // iterate through each row
    for (let j = 0; j < this.b[i].length; j++) { // iterate through each element in each row
      Game.ctx.drawImage( // draw method
        Game.sprite, // image source
        this.b[i][j].sx, // coords
        this.b[i][j].sy,
        this.frameWidth, // size
        this.frameHeight,
        j * this.frameWidth * VAR.scale, // where to put it on canvas
        i * this.frameHeight * VAR.scale,
        this.frameWidth * VAR.scale, // how big is the drawn image
        this.frameHeight * VAR.scale
      )
      if (this.b[i][j].subtype != 'board') { // drawing bombs
        this.b[i][j].draw()
      }
    }
  }
}
