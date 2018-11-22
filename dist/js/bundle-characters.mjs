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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/Characters.mjs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/constants-browserify/constants.json":
/*!**********************************************************!*\
  !*** ./node_modules/constants-browserify/constants.json ***!
  \**********************************************************/
/*! exports provided: O_RDONLY, O_WRONLY, O_RDWR, S_IFMT, S_IFREG, S_IFDIR, S_IFCHR, S_IFBLK, S_IFIFO, S_IFLNK, S_IFSOCK, O_CREAT, O_EXCL, O_NOCTTY, O_TRUNC, O_APPEND, O_DIRECTORY, O_NOFOLLOW, O_SYNC, O_SYMLINK, O_NONBLOCK, S_IRWXU, S_IRUSR, S_IWUSR, S_IXUSR, S_IRWXG, S_IRGRP, S_IWGRP, S_IXGRP, S_IRWXO, S_IROTH, S_IWOTH, S_IXOTH, E2BIG, EACCES, EADDRINUSE, EADDRNOTAVAIL, EAFNOSUPPORT, EAGAIN, EALREADY, EBADF, EBADMSG, EBUSY, ECANCELED, ECHILD, ECONNABORTED, ECONNREFUSED, ECONNRESET, EDEADLK, EDESTADDRREQ, EDOM, EDQUOT, EEXIST, EFAULT, EFBIG, EHOSTUNREACH, EIDRM, EILSEQ, EINPROGRESS, EINTR, EINVAL, EIO, EISCONN, EISDIR, ELOOP, EMFILE, EMLINK, EMSGSIZE, EMULTIHOP, ENAMETOOLONG, ENETDOWN, ENETRESET, ENETUNREACH, ENFILE, ENOBUFS, ENODATA, ENODEV, ENOENT, ENOEXEC, ENOLCK, ENOLINK, ENOMEM, ENOMSG, ENOPROTOOPT, ENOSPC, ENOSR, ENOSTR, ENOSYS, ENOTCONN, ENOTDIR, ENOTEMPTY, ENOTSOCK, ENOTSUP, ENOTTY, ENXIO, EOPNOTSUPP, EOVERFLOW, EPERM, EPIPE, EPROTO, EPROTONOSUPPORT, EPROTOTYPE, ERANGE, EROFS, ESPIPE, ESRCH, ESTALE, ETIME, ETIMEDOUT, ETXTBSY, EWOULDBLOCK, EXDEV, SIGHUP, SIGINT, SIGQUIT, SIGILL, SIGTRAP, SIGABRT, SIGIOT, SIGBUS, SIGFPE, SIGKILL, SIGUSR1, SIGSEGV, SIGUSR2, SIGPIPE, SIGALRM, SIGTERM, SIGCHLD, SIGCONT, SIGSTOP, SIGTSTP, SIGTTIN, SIGTTOU, SIGURG, SIGXCPU, SIGXFSZ, SIGVTALRM, SIGPROF, SIGWINCH, SIGIO, SIGSYS, SSL_OP_ALL, SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION, SSL_OP_CIPHER_SERVER_PREFERENCE, SSL_OP_CISCO_ANYCONNECT, SSL_OP_COOKIE_EXCHANGE, SSL_OP_CRYPTOPRO_TLSEXT_BUG, SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS, SSL_OP_EPHEMERAL_RSA, SSL_OP_LEGACY_SERVER_CONNECT, SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER, SSL_OP_MICROSOFT_SESS_ID_BUG, SSL_OP_MSIE_SSLV2_RSA_PADDING, SSL_OP_NETSCAPE_CA_DN_BUG, SSL_OP_NETSCAPE_CHALLENGE_BUG, SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG, SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG, SSL_OP_NO_COMPRESSION, SSL_OP_NO_QUERY_MTU, SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION, SSL_OP_NO_SSLv2, SSL_OP_NO_SSLv3, SSL_OP_NO_TICKET, SSL_OP_NO_TLSv1, SSL_OP_NO_TLSv1_1, SSL_OP_NO_TLSv1_2, SSL_OP_PKCS1_CHECK_1, SSL_OP_PKCS1_CHECK_2, SSL_OP_SINGLE_DH_USE, SSL_OP_SINGLE_ECDH_USE, SSL_OP_SSLEAY_080_CLIENT_DH_BUG, SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG, SSL_OP_TLS_BLOCK_PADDING_BUG, SSL_OP_TLS_D5_BUG, SSL_OP_TLS_ROLLBACK_BUG, ENGINE_METHOD_DSA, ENGINE_METHOD_DH, ENGINE_METHOD_RAND, ENGINE_METHOD_ECDH, ENGINE_METHOD_ECDSA, ENGINE_METHOD_CIPHERS, ENGINE_METHOD_DIGESTS, ENGINE_METHOD_STORE, ENGINE_METHOD_PKEY_METHS, ENGINE_METHOD_PKEY_ASN1_METHS, ENGINE_METHOD_ALL, ENGINE_METHOD_NONE, DH_CHECK_P_NOT_SAFE_PRIME, DH_CHECK_P_NOT_PRIME, DH_UNABLE_TO_CHECK_GENERATOR, DH_NOT_SUITABLE_GENERATOR, NPN_ENABLED, RSA_PKCS1_PADDING, RSA_SSLV23_PADDING, RSA_NO_PADDING, RSA_PKCS1_OAEP_PADDING, RSA_X931_PADDING, RSA_PKCS1_PSS_PADDING, POINT_CONVERSION_COMPRESSED, POINT_CONVERSION_UNCOMPRESSED, POINT_CONVERSION_HYBRID, F_OK, R_OK, W_OK, X_OK, UV_UDP_REUSEADDR, default */
/***/ (function(module) {

module.exports = {"O_RDONLY":0,"O_WRONLY":1,"O_RDWR":2,"S_IFMT":61440,"S_IFREG":32768,"S_IFDIR":16384,"S_IFCHR":8192,"S_IFBLK":24576,"S_IFIFO":4096,"S_IFLNK":40960,"S_IFSOCK":49152,"O_CREAT":512,"O_EXCL":2048,"O_NOCTTY":131072,"O_TRUNC":1024,"O_APPEND":8,"O_DIRECTORY":1048576,"O_NOFOLLOW":256,"O_SYNC":128,"O_SYMLINK":2097152,"O_NONBLOCK":4,"S_IRWXU":448,"S_IRUSR":256,"S_IWUSR":128,"S_IXUSR":64,"S_IRWXG":56,"S_IRGRP":32,"S_IWGRP":16,"S_IXGRP":8,"S_IRWXO":7,"S_IROTH":4,"S_IWOTH":2,"S_IXOTH":1,"E2BIG":7,"EACCES":13,"EADDRINUSE":48,"EADDRNOTAVAIL":49,"EAFNOSUPPORT":47,"EAGAIN":35,"EALREADY":37,"EBADF":9,"EBADMSG":94,"EBUSY":16,"ECANCELED":89,"ECHILD":10,"ECONNABORTED":53,"ECONNREFUSED":61,"ECONNRESET":54,"EDEADLK":11,"EDESTADDRREQ":39,"EDOM":33,"EDQUOT":69,"EEXIST":17,"EFAULT":14,"EFBIG":27,"EHOSTUNREACH":65,"EIDRM":90,"EILSEQ":92,"EINPROGRESS":36,"EINTR":4,"EINVAL":22,"EIO":5,"EISCONN":56,"EISDIR":21,"ELOOP":62,"EMFILE":24,"EMLINK":31,"EMSGSIZE":40,"EMULTIHOP":95,"ENAMETOOLONG":63,"ENETDOWN":50,"ENETRESET":52,"ENETUNREACH":51,"ENFILE":23,"ENOBUFS":55,"ENODATA":96,"ENODEV":19,"ENOENT":2,"ENOEXEC":8,"ENOLCK":77,"ENOLINK":97,"ENOMEM":12,"ENOMSG":91,"ENOPROTOOPT":42,"ENOSPC":28,"ENOSR":98,"ENOSTR":99,"ENOSYS":78,"ENOTCONN":57,"ENOTDIR":20,"ENOTEMPTY":66,"ENOTSOCK":38,"ENOTSUP":45,"ENOTTY":25,"ENXIO":6,"EOPNOTSUPP":102,"EOVERFLOW":84,"EPERM":1,"EPIPE":32,"EPROTO":100,"EPROTONOSUPPORT":43,"EPROTOTYPE":41,"ERANGE":34,"EROFS":30,"ESPIPE":29,"ESRCH":3,"ESTALE":70,"ETIME":101,"ETIMEDOUT":60,"ETXTBSY":26,"EWOULDBLOCK":35,"EXDEV":18,"SIGHUP":1,"SIGINT":2,"SIGQUIT":3,"SIGILL":4,"SIGTRAP":5,"SIGABRT":6,"SIGIOT":6,"SIGBUS":10,"SIGFPE":8,"SIGKILL":9,"SIGUSR1":30,"SIGSEGV":11,"SIGUSR2":31,"SIGPIPE":13,"SIGALRM":14,"SIGTERM":15,"SIGCHLD":20,"SIGCONT":19,"SIGSTOP":17,"SIGTSTP":18,"SIGTTIN":21,"SIGTTOU":22,"SIGURG":16,"SIGXCPU":24,"SIGXFSZ":25,"SIGVTALRM":26,"SIGPROF":27,"SIGWINCH":28,"SIGIO":23,"SIGSYS":12,"SSL_OP_ALL":2147486719,"SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION":262144,"SSL_OP_CIPHER_SERVER_PREFERENCE":4194304,"SSL_OP_CISCO_ANYCONNECT":32768,"SSL_OP_COOKIE_EXCHANGE":8192,"SSL_OP_CRYPTOPRO_TLSEXT_BUG":2147483648,"SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS":2048,"SSL_OP_EPHEMERAL_RSA":0,"SSL_OP_LEGACY_SERVER_CONNECT":4,"SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER":32,"SSL_OP_MICROSOFT_SESS_ID_BUG":1,"SSL_OP_MSIE_SSLV2_RSA_PADDING":0,"SSL_OP_NETSCAPE_CA_DN_BUG":536870912,"SSL_OP_NETSCAPE_CHALLENGE_BUG":2,"SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG":1073741824,"SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG":8,"SSL_OP_NO_COMPRESSION":131072,"SSL_OP_NO_QUERY_MTU":4096,"SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION":65536,"SSL_OP_NO_SSLv2":16777216,"SSL_OP_NO_SSLv3":33554432,"SSL_OP_NO_TICKET":16384,"SSL_OP_NO_TLSv1":67108864,"SSL_OP_NO_TLSv1_1":268435456,"SSL_OP_NO_TLSv1_2":134217728,"SSL_OP_PKCS1_CHECK_1":0,"SSL_OP_PKCS1_CHECK_2":0,"SSL_OP_SINGLE_DH_USE":1048576,"SSL_OP_SINGLE_ECDH_USE":524288,"SSL_OP_SSLEAY_080_CLIENT_DH_BUG":128,"SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG":0,"SSL_OP_TLS_BLOCK_PADDING_BUG":512,"SSL_OP_TLS_D5_BUG":256,"SSL_OP_TLS_ROLLBACK_BUG":8388608,"ENGINE_METHOD_DSA":2,"ENGINE_METHOD_DH":4,"ENGINE_METHOD_RAND":8,"ENGINE_METHOD_ECDH":16,"ENGINE_METHOD_ECDSA":32,"ENGINE_METHOD_CIPHERS":64,"ENGINE_METHOD_DIGESTS":128,"ENGINE_METHOD_STORE":256,"ENGINE_METHOD_PKEY_METHS":512,"ENGINE_METHOD_PKEY_ASN1_METHS":1024,"ENGINE_METHOD_ALL":65535,"ENGINE_METHOD_NONE":0,"DH_CHECK_P_NOT_SAFE_PRIME":2,"DH_CHECK_P_NOT_PRIME":1,"DH_UNABLE_TO_CHECK_GENERATOR":4,"DH_NOT_SUITABLE_GENERATOR":8,"NPN_ENABLED":1,"RSA_PKCS1_PADDING":1,"RSA_SSLV23_PADDING":2,"RSA_NO_PADDING":3,"RSA_PKCS1_OAEP_PADDING":4,"RSA_X931_PADDING":5,"RSA_PKCS1_PSS_PADDING":6,"POINT_CONVERSION_COMPRESSED":2,"POINT_CONVERSION_UNCOMPRESSED":4,"POINT_CONVERSION_HYBRID":6,"F_OK":0,"R_OK":4,"W_OK":2,"X_OK":1,"UV_UDP_REUSEADDR":4};

/***/ }),

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
    }

}
}

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
/* harmony import */ var constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constants */ "./node_modules/constants-browserify/constants.json");
var constants__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! constants */ "./node_modules/constants-browserify/constants.json", 1);




Character.count = 0;

function Character(inheritance){
    Character.count++; // controlling how many characters have been generated
    this.id = `char_${Character.count}`; // setting specific id to each character
    
    if (!inheritance){ // allowed only if given argument is true
        _index_mjs__WEBPACK_IMPORTED_MODULE_0__["Game"].toDraw[this.id] = this; // pushing created character into object stroing all characters
    }
    
    this.frameWidth = 21; // width of a sprite
    this.frameHeight = 24; // height of a sprite

    // this.startX = 0; // base sprite coords
    // this.startY = 0;

    // this.frames = [1,0,2,0]; // frames to specify which sprite should be used to animate character

    this.currentFrame = 0; // current frame of animation

    this.maxFrameDelay = 2; // properties to slow down animation
    this.currentFrameDelay = 0;
}

Character.prototype.draw = function (){ // draw method prototype
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
        this.states[this.state].flip ? -this.frameWidth*_VAR_mjs__WEBPACK_IMPORTED_MODULE_1__["VAR"].scale : 0,
        0,
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

function Hero(){ // deifing main hero
    Character.call(this); // extending Character class
    this.state = 'down_go'; // current animation state of Hero
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
    }
}

Hero.prototype = new Character(true); // extending Character draw method to Hero constructor
Hero.prototype.constructor = Hero;

function Enemy(){
    Character.call(this);
    this.state = 'left_go'; // current animation state of Enemy
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
    }
}

Enemy.prototype = new Character(true); // extending Character draw method to Hero constructor
Enemy.prototype.constructor = Enemy;

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




document.addEventListener('DOMContentLoaded', function (){ 
    Game.sprite = new Image();
    Game.sprite.onload = Game.init; // makes sure that init() is launched after image is loaded
    Game.sprite.src = 'dist/img/bombe.png';
});

// object containg basic game properties
let Game = {
    init: ()=> {
        Game.canvas = document.createElement('canvas'); // create canvas
        Game.ctx = Game.canvas.getContext('2d'); // get canvas 2d context
        Game.layout(); // launch function to resize W and H based on window inner dimensions
        window.addEventListener('resize', Game.layout); // launch layout() function on window resize
        document.body.appendChild(Game.canvas); // append canvas to DOM
    
        Game.toDraw = {}; // object to store all characters
    
        Game.board = new _Board_mjs__WEBPACK_IMPORTED_MODULE_2__["Board"]();

        // Game.character = new Hero();
        
        // Game.enemy = new Enemy();

        Game.animationLoop(); // launch game animation loop
        },

    layout: ()=> {
        _VAR_mjs__WEBPACK_IMPORTED_MODULE_1__["VAR"].H = window.innerHeight; // get window dimensions dynamically
        _VAR_mjs__WEBPACK_IMPORTED_MODULE_1__["VAR"].W = window.innerWidth; // as above
        Game.canvas.height = _VAR_mjs__WEBPACK_IMPORTED_MODULE_1__["VAR"].H; // set canvas dimensions based on window dimensions
        Game.canvas.width = _VAR_mjs__WEBPACK_IMPORTED_MODULE_1__["VAR"].W // as above

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
//# sourceMappingURL=bundle-characters.mjs.map