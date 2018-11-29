/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.mjs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Board.mjs":
/*!**************************!*\
  !*** ./src/js/Board.mjs ***!
  \**************************/
/*! exports provided: Board */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var _VAR_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VAR.mjs */ "./src/js/VAR.mjs");
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.mjs */ "./src/js/index.mjs");



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
    'floor': {sx: 174, sy: 16, type: 'empty'},
    'W': {sx: 190, sy: 16, type: 'solid'}, // outer wall
    'X': {sx: 206, sy: 16, type: 'solid'}, // inner wall
    'box': {sx: 126, sy: 0, type: 'soft'},
}
function Board(){
    this.frameWidth = 16;
    this.frameHeight = 16;
    this.parse(Board.templates[ _VAR_mjs__WEBPACK_IMPORTED_MODULE_0__["VAR"].random(0, Board.templates.length - 1) ]); // pick rundom board from our templates and convert it into right format
    // add boxes on the board
    for( let i = 0 ; i < 20 ; i++){
        this.addCrate();
    }
}

Board.prototype.parse = function(arr){ // convert string board to array of arrays with objects inside
    this.emptySpaces = []; // array to store all exisiting empty places (grass) on board
    this.b = [];
    
    for (let i = 0 ; i <  arr.length ; i++){ // iterate through each raw of the board
        this.b.push([]); // create array for each row of the board
        for (let j = 0 ; j < arr[i].length ; j++){ // iterate through each element (letter) in each row
            // push corresponding object definition in place of a specific letter key
            this.b[i].push( Board.elements[arr[i].charAt(j) == ' ' ? 'floor' : arr[i].charAt(j)] ); // pick appropriate obj definition from Board.elements
            
            if (this.b[i][j].type === 'empty' && !(i==1 && j == 1) && !(i==2 && j==1) && !(i==1 && j==2)){
                this.emptySpaces.push({ x:j, y:i }); 
            }
        }
    }
    this.emptySpaces = _VAR_mjs__WEBPACK_IMPORTED_MODULE_0__["VAR"].shuffle(this.emptySpaces); // shuffle array storing empty spaces
};

Board.prototype.getEmptySpace = function () { 
    return this.emptySpaces.length > 0 ? this.emptySpaces.shift() : null;
};

Board.prototype.addCrate = function () { // adding crate
    let position = this.getEmptySpace();
    if(position){
        this.b[position.y][position.x] = Board.elements.box;
    }
};

Board.prototype.draw = function(){
for (let i = 0 ; i < this.b.length; i++){ // iterate through each row

for (let j = 0 ; j < this.b[i].length ; j++){ // iterate through each element in each row
    _index_mjs__WEBPACK_IMPORTED_MODULE_1__["Game"].ctx.drawImage( // draw method
        _index_mjs__WEBPACK_IMPORTED_MODULE_1__["Game"].sprite, // image source
        this.b[i][j].sx, // coords
        this.b[i][j].sy,
        this.frameWidth, // size
        this.frameHeight,
        j * this.frameWidth * _VAR_mjs__WEBPACK_IMPORTED_MODULE_0__["VAR"].scale, // where to put it on canvas
        i * this.frameHeight * _VAR_mjs__WEBPACK_IMPORTED_MODULE_0__["VAR"].scale,
        this.frameWidth * _VAR_mjs__WEBPACK_IMPORTED_MODULE_0__["VAR"].scale, // how big is the drawn image
        this.frameHeight * _VAR_mjs__WEBPACK_IMPORTED_MODULE_0__["VAR"].scale
    )   
     if(this.b[i][j].subtype == 'bomb'){ // drawing bombs
         this.b[i][j].draw();
     }

    }

}
}

/***/ }),

/***/ "./src/js/Bomb.mjs":
/*!*************************!*\
  !*** ./src/js/Bomb.mjs ***!
  \*************************/
/*! exports provided: Bomb */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bomb", function() { return Bomb; });
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.mjs */ "./src/js/index.mjs");
/* harmony import */ var _Board_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board.mjs */ "./src/js/Board.mjs");
/* harmony import */ var _VAR_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VAR.mjs */ "./src/js/VAR.mjs");




Bomb.count = 0;
Bomb.maxCount = 2;
Bomb.elements = { // bomb states: before and after explosions
    'bomb':{sx:126, sy:16, frames:[0,0,1,1,2,2]},
    'center':{sx:126, sy:64, frames:[0,0,1,1,2,2,3,3,2,2,1,1,0,0]}, // explode and disapear
    'up_boom':{sx:126, sy:96, frames:[0,0,1,1,2,2,3,3,2,2,1,1,0,0]},
    'down_boom':{sx:126, sy:96, frames:[0,0,1,1,2,2,3,3,2,2,1,1,0,0]},
    'right_boom':{sx:126, sy:48, frames:[0,0,1,1,2,2,3,3,2,2,1,1,0,0]},
    'left_boom':{sx:126, sy:48, frames:[0,0,1,1,2,2,3,3,2,2,1,1,0,0]},
    'up_boom_end':{sx:126, sy:80, frames:[0,0,1,1,2,2,3,3,2,2,1,1,0,0]},
    'down_boom_end':{sx:126, sy:80, frames:[0,0,1,1,2,2,3,3,2,2,1,1,0,0], flip:true},
    'left_boom_end':{sx:126, sy:32, frames:[0,0,1,1,2,2,3,3,2,2,1,1,0,0]},
    'right_boom_end':{sx:126, sy:32, frames:[0,0,1,1,2,2,3,3,2,2,1,1,0,0], flip: true}, 
}

function Bomb(column, row, boom_type){
    if((Bomb.count < Bomb.maxCount && _index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.b[row][column].type != 'bomb') || boom_type){
        if(!boom_type){
            Bomb.count++;
        }
        this.boom_type = boom_type;
        this.type = boom_type ? 'empty' : 'solid'; // make sure that you can't walk over a bomb before it explodes
        this.subtype = 'bomb';
        this.data = !boom_type ? Bomb.elements.bomb : Bomb.elements[boom_type];
        this.sx = _Board_mjs__WEBPACK_IMPORTED_MODULE_1__["Board"].elements.floor.sx;
        this.sy = _Board_mjs__WEBPACK_IMPORTED_MODULE_1__["Board"].elements.floor.sy;
        this.bombSx = 126; // sprite position
        this.bombSy = 16; // sprite position
        this.frames = [0,0,1,1,2,2]
        this.currentFrame = 0;
        this.column = column;
        this.row = row;

        this.timer = boom_type ? this.data.frames.length : 30; // bomb should explode after 30 frames
        this.range = 2; // 2 blocks range of explosion

        _index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.b[this.row][this.column] = this; // changing game greenfield from empty to bomb
    }
}

Bomb.prototype.draw = function(){
    if(this.timer > 0){
        this.targetX = this.column*_index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.frameWidth*_VAR_mjs__WEBPACK_IMPORTED_MODULE_2__["VAR"].scale;
        this.targetY = this.row*_index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.frameHeight*_VAR_mjs__WEBPACK_IMPORTED_MODULE_2__["VAR"].scale;

        if(this.data.flip) {
            _index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].ctx.save(); // save all vanvas settings
            if(this.boom_type == 'down_boom_end'){
                _index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].ctx.scale(1,-1); // setting it like that to flip along Y axis
                this.targetY = this.targetY*-1-(_index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.frameHeight*_VAR_mjs__WEBPACK_IMPORTED_MODULE_2__["VAR"].scale);
            }else{
                _index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].ctx.scale(-1,1); // flip along X axis
                this.targetX = this.targetX*-1-(_index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.frameWidth*_VAR_mjs__WEBPACK_IMPORTED_MODULE_2__["VAR"].scale);
            }
            
        };

    _index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].ctx.drawImage(
        _index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].sprite,
        this.data.sx+this.data.frames[this.currentFrame]*_index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.frameWidth, // dynamic definition to assign next frames
        this.data.sy,
        _index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.frameWidth,
        _index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.frameHeight,
        this.targetX,
        this.targetY,
        _index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.frameWidth*_VAR_mjs__WEBPACK_IMPORTED_MODULE_2__["VAR"].scale,
        _index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.frameHeight*_VAR_mjs__WEBPACK_IMPORTED_MODULE_2__["VAR"].scale
    );
    if(this.data.flip){
        _index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].ctx.restore(); // restore previos canvas settings
    }
    this.currentFrame = this.currentFrame+1 < this.data.frames.length ? this.currentFrame+1 : 0;
    this.timer--;
    }else if(this.type =='solid'){ // after explosion
        Bomb.count--; // reduce number of bombs
        this.type = 'empty'; // when bomb explodes, it's type is empty
        this.currentFrame = 0;
        this.data = Bomb.elements.center; // change state of bomb to center (of explosion)
        this.timer = this.data.frames.length // change frames amount to length of explosion
        this.booms = []; // places where flame should appear (4 directions)
        for (let i = 0; i < 4; i++){ // check all directions where flame can appear
            this.axis = i%2 ? 'tempColumn' : 'tempRow'; // i=0 is up, i=1 is right, i=2 is down, i=3 is left
            this.grow = i%3 ? true : false;

            this.tempColumn = this.column;
            this.tempRow = this.row;

            if(this.axis == 'tempColumn' && this.grow){ // defining what type of graphics should be used when explosion expands left, right etc ...
                this.tempBoomType = 'right_boom';
            }else if(this.axis == 'tempColumn' && !this.grow){
                this.tempBoomType = 'left_boom';
            }else if(this.axis == 'tempRow' && this.grow){
                this.tempBoomType = 'down_boom';
            }else if(this.axis == 'tempRow' && !this.grow){
                this.tempBoomType = 'up_boom';
            }

            for(let j=0 ; j < this.range ; j++){
                this[this.axis] = this[this.axis]+(this.grow ? 1 : -1);
                if(_index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.b[this.tempRow][this.tempColumn].type != 'solid'){
                    this.tempCrate = _index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.b[this.tempRow][this.tempColumn].type == 'soft';
                    new Bomb(this.tempColumn, this.tempRow, this.tempBoomType+( j==this.range-1 ? '_end' : '' )); // flames ending
                    if(this.tempCrate){
                        break;
                    }
                }else{
                    break;
                }
            }
        }
    }else{ // after explosion change to grren field
        _index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.b[this.row][this.column] = _Board_mjs__WEBPACK_IMPORTED_MODULE_1__["Board"].elements.floor;
    }
};

/***/ }),

/***/ "./src/js/Characters.mjs":
/*!*******************************!*\
  !*** ./src/js/Characters.mjs ***!
  \*******************************/
/*! exports provided: Character, Hero, Enemy */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enemy", function() { return Enemy; });
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.mjs */ "./src/js/index.mjs");
/* harmony import */ var _VAR_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VAR.mjs */ "./src/js/VAR.mjs");



Character.count = 0;

function Character(inheritance){
    Character.count++; // controlling how many characters have been generated
    this.id = `char_${Character.count}`; // setting specific id to each character
    
    if (!inheritance){ // allowed only if given argument is true
        _index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].toDraw[this.id] = this; // pushing created character into object stroing all characters
    }
    
    this.frameWidth = 21; // width of a sprite
    this.frameHeight = 24; // height of a sprite

    this.modX = -2;
    this.modY = -8;

    this.speed = 2;

    this.currentFrame = 0; // current frame of animation

    this.maxFrameDelay = 2; // properties to slow down animation
    this.currentFrameDelay = 0;
}

Character.prototype.draw = function (){ // draw method prototype
    if(this.state.slice(-2) == 'go'){    
        // char speed depending on his state
        if (this.state == 'down_go'){
            this.y += this.speed;
        }else if (this.state == 'right_go'){
            this.x += this.speed;
        }else if (this.state == 'up_go'){
            this.y -= this.speed;
        }else if (this.state == 'left_go'){
            this.x -= this.speed;
        }
        
        this.rowAndColumn();
        
    } 

    // Game.ctx.fillRect(
    //     this.column*Game.board.frameWidth*VAR.scale,
    //     this.row*Game.board.frameHeight*VAR.scale,
    //     Game.board.frameWidth*VAR.scale,
    //     Game.board.frameHeight*VAR.scale
    //     );

    //     Game.ctx.fillRect(
    //         this.nextColumn*Game.board.frameWidth*VAR.scale,
    //         this.nextRow*Game.board.frameHeight*VAR.scale,
    //         Game.board.frameWidth*VAR.scale,
    //         Game.board.frameHeight*VAR.scale
    //         );

    if(this.states[this.state].flip){ // inverse image if 'flip' property is true
    _index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].ctx.save(); // saving a given canvas state
    _index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].ctx.scale(-1,1); // inversing canvas
    }

    _index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].ctx.drawImage( // definig what part of image should be clipped
        _index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].sprite,
        this.states[this.state].sx + this.states[this.state].f[this.currentFrame]*this.frameWidth,
        this.states[this.state].sy,
        this.frameWidth,
        this.frameHeight,
        this.states[this.state].flip ? (-this.frameWidth - this.modX - this.x )*_VAR_mjs__WEBPACK_IMPORTED_MODULE_1__["VAR"].scale : (this.x + this.modX)*_VAR_mjs__WEBPACK_IMPORTED_MODULE_1__["VAR"].scale,
        (this.y+this.modY)*_VAR_mjs__WEBPACK_IMPORTED_MODULE_1__["VAR"].scale,
        this.frameWidth*_VAR_mjs__WEBPACK_IMPORTED_MODULE_1__["VAR"].scale,
        this.frameHeight*_VAR_mjs__WEBPACK_IMPORTED_MODULE_1__["VAR"].scale
    );
    if(this.states[this.state].flip){
        _index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].ctx.restore(); // restoring previously saved canvas state
      
    };
    if (this.currentFrameDelay < this.maxFrameDelay){ // slowing down animation
        this.currentFrameDelay++;
    } else {
        this.currentFrameDelay = 0;
        this.currentFrame = this.currentFrame+1 >= this.states[this.state].f.length ? 0 : this.currentFrame+1;
    }
}

// adding collision detection for Character
Character.prototype.rowAndColumn = function() {
    // compute in which row and in which column character is located
    this.row = Math.round(this.y/_index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.frameHeight);
    this.column = Math.round(this.x/_index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.frameWidth);
    if(this.state.slice(-3) == '_go'){ // determine on which board element char is
        if (this.state == 'left_go' || this.state == 'right_go'){
            this.nextRow = this.row;
            this.nextColumn = this.state == 'left_go' ? Math.floor(this.x/_index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.frameWidth) : Math.ceil(this.x/_index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.frameWidth); // round down if movement to left and round up when char moving right
        } else {
            this.nextColumn = this.column;
            this.nextRow = this.state == 'up_go' ? Math.floor(this.y/_index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.frameHeight) : Math.ceil(this.y/_index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.frameHeight);
        };
        // check if current column and row changes or not && check if next place is empty or not
        if( !(this.row == this.nextRow && this.column == this.nextColumn) && _index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.b[this.nextRow][this.nextColumn].type != 'empty' ){

            this.state = this.state.slice(0,-3);
            this.currentFrame = 0;
            // when char hits an obstacle we want to put him on the center of the area
            if (this.row!=this.nextRow){
                this.y = this.row*_index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.frameHeight;
            } else {
                this.x = this.column*_index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.frameWidth;
            }
        } else { // situation when character can walk on certain area - let's center him!
            if (this.row!=this.nextRow){ // both ifs are making sure that character is walking in the 'tunnel'
                this.x = this.nextColumn*_index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.frameWidth;
            } else if (this.column!=this.nextColumn){
                this.y = this.nextRow*_index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.frameHeight;
            }
        }
    } else { // if char not moving then don't reasign row and col position
        this.nextRow = this.row;
        this.nextColumn = this.column;
    }
}

function Hero(){ // deifing main hero
    Character.call(this); // extending Character class
    this.state = 'down'; // current animation state of Hero
    this.states = { // definig all possible animation states of Hero
        'down': {sx:0, sy:0, f:[0]},
        'down_go': {sx:0, sy:0, f:[1,0,2,0]},
        'left': {sx:63, sy:0, f:[0]},
        'left_go': {sx:63, sy:0, f:[1,0,2,0]},
        'up': {sx:0, sy:24, f:[0]},
        'up_go': {sx:0, sy:24, f:[1,0,2,0]},
        'right': {sx:63, sy:0, f:[0], flip: true}, // flip set up to inverse character graphics
        'right_go': {sx:63, sy:0, f:[1,0,2,0], flip: true},
        'ko': {sx: 0, sy: 48, f:[0,1,0,1,0,1,2,3,4]} // death animation
    };
    this.x = _index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.frameWidth;
    this.y = _index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.frameHeight;

    this.rowAndColumn();
}

Hero.prototype = new Character(true); // extending Character draw method to Hero constructor
Hero.prototype.constructor = Hero;

Hero.prototype.updateState = function(){
    this.tempState = this.state; // temporary state variable
    if (_index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].key_37){ // when arrow left is pressed then change temporary state to left_go
        this.tempState = 'left_go';
    } else if (_index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].key_38){ // when arrow left is pressed then change temporary state to left_go
        this.tempState = 'up_go';
    }else if (_index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].key_39){ // when arrow left is pressed then change temporary state to left_go
        this.tempState = 'right_go';
    }else if (_index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].key_40){ // when arrow left is pressed then change temporary state to left_go
        this.tempState = 'down_go';
    }else if (this.state.slice(-2) == 'go'){ // check if current active state was with 'go' ending
    this.tempState = this.state.slice(0,this.state.indexOf('_go')); // slice last 3 digits to be left with static state
    }
    if (this.tempState!= this.state){ // check if state has changed
        this.currentFrame = 0;
        this.state = this.tempState; // reasign state to temporary state
    }
}

Enemy.all = {};
function Enemy(x,y){
    Character.call(this);
    Enemy.all[this.id] = this; // assign id to enemy
    this.state = 'down'; // current animation state of Enemy
    this.states = { // definig all possible animation states of Enemy
        'down': {sx:0, sy:72, f:[0]}, // static
        'down_go': {sx:0, sy:72, f:[1,0,2,0]}, // dynamic
        'left': {sx:63, sy:24, f:[0]},
        'left_go': {sx:63, sy:24, f:[1,0,2,0]},
        'up': {sx:63, sy:72, f:[0]},
        'up_go': {sx:63, sy:72, f:[1,0,2,0]},
        'right': {sx:63, sy:24, f:[0], flip: true}, // flip set up to inverse character graphics
        'right_go': {sx:63, sy:24, f:[1,0,2,0], flip: true},
        'ko': {sx: 0, sy: 96, f:[0,1,2,3,4,5]} // death animation
    };
    this.x = x;
    this.y = y;
    
    this.rowAndColumn();
    this.setDirection();
}

Enemy.prototype = new Character(true); // extending Character draw method to Hero constructor
Enemy.prototype.constructor = Enemy;

Enemy.prototype.parent = Character.prototype; // used to extend method assigned to Character

Enemy.prototype.setDirection = function(){
    this.canGo = this.canGo || []; // assign array for possible directions or use the one already assigned
    this.canGo.length = 0; // empty the array
    // enemy already has assigned position
    // we have to iterate through all positions around it and check if they are empty of solid
    
    for (let i = this.column-1; i<= this.column+1; i++){

            for (let j = this.row-1 ; j <= this.row+1; j++){

                if ( !(i==this.column && j==this.row)){ // don't check position where enemy is alrady situated
                    
                    if ( i == this.column || j == this.row ) {// don't check corners
                        if(_index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].board.b[j][i].type == 'empty'){
                            this.canGo.push({x:i, y:j});
                        } 
                    }
                }
            }
        };

    if(this.canGo.length>0){
            this.tempPos = this.canGo[_VAR_mjs__WEBPACK_IMPORTED_MODULE_1__["VAR"].random(0, this.canGo.length-1)];
            
            if(this.column < this.tempPos.x){
                this.state = 'right_go';
            } else if (this.column> this.tempPos.x){
                this.state = 'left_go';
            } else if (this.row < this.tempPos.y){
                this.state = 'down_go';
            }else if (this.row > this.tempPos.y){
                this.state = 'up_go';
            }
    } else if (this.state.slice(-2) == 'go'){
         this.state = this.state.slice(0, -3);
    }
}

Enemy.prototype.rowAndColumn = function(){ // extending rowAndColumn method
    this.previousState = this.state // saving current state to this.previousState
    this.parent.rowAndColumn.call(this); // assigning this to parent

    if (this.previousState != this.state && this.state.slice(-2) != 'go' && this.previousState.slice(-2) == 'go'){
        this.setDirection();
    }
}

/***/ }),

/***/ "./src/js/VAR.mjs":
/*!************************!*\
  !*** ./src/js/VAR.mjs ***!
  \************************/
/*! exports provided: VAR */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VAR", function() { return VAR; });
// variable used to store handy properties used among the way
const VAR = { 
    fps: 15, // frames per second for animation
    H: 0, // window height
    W: 0, // window width
    scale: 4, // game elements will be loaded in proper scale
    lastTime: 0, // property for rAF
    random: (min, max)=>{ // ranodm number generator
        return Math.floor(Math.random()* (max-min+1) )+ min;
    },
    shuffle: function (arr) { // method to shuffle array of emty spaces
        let counter = arr.length;
        let temp;
        let index;
        while(counter > 0){
            counter--;
            index = Math.floor(Math.random()*counter);
            temp = arr[counter];
            arr[counter] = arr[index];
            arr[index] = temp;
        }
        return arr;
    }
}

/***/ }),

/***/ "./src/js/index.mjs":
/*!**************************!*\
  !*** ./src/js/index.mjs ***!
  \**************************/
/*! exports provided: Game */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _Characters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Characters.mjs */ "./src/js/Characters.mjs");
/* harmony import */ var _VAR_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VAR.mjs */ "./src/js/VAR.mjs");
/* harmony import */ var _Board_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Board.mjs */ "./src/js/Board.mjs");
/* harmony import */ var _Bomb_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Bomb.mjs */ "./src/js/Bomb.mjs");





document.addEventListener('DOMContentLoaded', function (){ 
    Game.sprite = new Image();
    Game.sprite.onload = Game.init; // makes sure that init() is launched after image is loaded
    Game.sprite.src = 'dist/img/bombe.png';
});

// object containg basic game properties
let Game = {
    init: function() {
        Game.canvas = document.createElement('canvas'); // create canvas
        Game.ctx = Game.canvas.getContext('2d'); // get canvas 2d context
        Game.board = new _Board_mjs__WEBPACK_IMPORTED_MODULE_2__["Board"]();
        Game.layout(); // launch function to resize W and H based on window inner dimensions
        window.addEventListener('resize', Game.layout); // launch layout() function on window resize
        document.body.appendChild(Game.canvas); // append canvas to DOM
    
        Game.toDraw = {}; // object to store all characters   

        Game.hero = new _Characters_mjs__WEBPACK_IMPORTED_MODULE_0__["Hero"]();

        let tempEmpty;
        // create 5 enemies in random places
        for (let i = 0 ; i < 5 ; i++){
            
            tempEmpty = Game.board.getEmptySpace();
            new _Characters_mjs__WEBPACK_IMPORTED_MODULE_0__["Enemy"](tempEmpty.x*Game.board.frameWidth, tempEmpty.y*Game.board.frameHeight);

        }

        // add event listeners for char sterring
        
        window.addEventListener('keydown', Game.onKey);
        window.addEventListener('keyup', Game.onKey);

        

        Game.animationLoop(); // launch game animation loop
        },

    onKey: (e)=>{
        if (e.keyCode >= 37 && e.keyCode<= 40 || e.keyCode == 32){ // use only arrows and space in game
            e.preventDefault(); // turn off standard key actions
            if(e.type == 'keydown' && !Game[`key_${e.keyCode}`]){ // when key has been pressed
                Game[`key_${e.keyCode}`] = true; // set key to work
                if(e.keyCode >= 37 && e.keyCode <= 40 ){ // if any arrow was pressed then make sure to disable previously pressed arrow
                    for (let i = 37; i <= 40 ; i++){
                        if(i!= e.keyCode){
                            Game[`key_${i}`] = false;
                        }
                    }
                    Game.hero.updateState();
                }else{
                    new _Bomb_mjs__WEBPACK_IMPORTED_MODULE_3__["Bomb"](Game.hero.column, Game.hero.row);
                }
                Game.hero.updateState(); // launch update function when key is pressed (conditions above)
            } else if (e.type == 'keyup'){ // update state when key is released as well (char is standing)
                Game[`key_${e.keyCode}`] = false;
                Game.hero.updateState();
            }
        }
    },

    layout: ()=> {
        _VAR_mjs__WEBPACK_IMPORTED_MODULE_1__["VAR"].H = window.innerHeight; // get window dimensions dynamically
        _VAR_mjs__WEBPACK_IMPORTED_MODULE_1__["VAR"].W = window.innerWidth; // as above
        
        _VAR_mjs__WEBPACK_IMPORTED_MODULE_1__["VAR"].scale = Math.max(1, Math.min( 
            Math.floor(_VAR_mjs__WEBPACK_IMPORTED_MODULE_1__["VAR"].H/(Game.board.frameWidth*Game.board.b[0].length)),
            Math.floor(_VAR_mjs__WEBPACK_IMPORTED_MODULE_1__["VAR"].W/(Game.board.frameHeight*Game.board.b.length))
            ));
                
        Game.canvas.width = Math.round(_VAR_mjs__WEBPACK_IMPORTED_MODULE_1__["VAR"].scale*Game.board.frameWidth*Game.board.b[0].length); // as above
        Game.canvas.height = Math.round(_VAR_mjs__WEBPACK_IMPORTED_MODULE_1__["VAR"].scale*Game.board.frameHeight*Game.board.b.length); // set canvas dimensions based on window dimensions
        
        Game.canvas.style[Modernizr.prefixed('transform')] = `translate(${Math.round( (_VAR_mjs__WEBPACK_IMPORTED_MODULE_1__["VAR"].W-Game.canvas.width)/2 )}px, ${Math.round( (_VAR_mjs__WEBPACK_IMPORTED_MODULE_1__["VAR"].H-Game.canvas.height)/2 ) }px)`;
        
//'translate('+Math.round((VAR.W-Game.canvas.width)/2) + 'px,' +Math.round((VAR.H-Game.canvas.height)/2)+'px)';
        Game.ctx.imageSmoothingEnabled = false; // character pixels are super sharp
        Game.ctx.mozImageSmoothingEnabled = false;
        Game.ctx.oImageSmoothingEnabled = false;
        Game.ctx.webkitImageSmoothingEnabled = false;
    },

    animationLoop: (time)=> {
        requestAnimationFrame(Game.animationLoop);
        // limit fps to desired rate
            if(time-_VAR_mjs__WEBPACK_IMPORTED_MODULE_1__["VAR"].lastTime >= 1000/_VAR_mjs__WEBPACK_IMPORTED_MODULE_1__["VAR"].fps){
                _VAR_mjs__WEBPACK_IMPORTED_MODULE_1__["VAR"].lastTime = time;

                Game.ctx.clearRect(0,0,_VAR_mjs__WEBPACK_IMPORTED_MODULE_1__["VAR"].W, _VAR_mjs__WEBPACK_IMPORTED_MODULE_1__["VAR"].H);
                
                Game.board.draw();
                
                for(let i in Game.toDraw){        
                        Game.toDraw[i].draw();
                }
            }
        }
}

/***/ })

/******/ });
//# sourceMappingURL=bundle-index.mjs.map