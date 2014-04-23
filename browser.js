!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.archiveType=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';

/**
 * Detect the archive type of a Buffer/Uint8Array
 *
 * @param {Buffer} buf
 * @api public
 */

module.exports = function (buf) {
    if (!buf || buf.length < 7) {
        return false;
    }

    if (_dereq_('is-bzip2')(buf)) {
        return 'bz2';
    }

    if (_dereq_('is-gzip')(buf)) {
        return 'gz';
    }

    if (_dereq_('is-rar')(buf)) {
        return 'rar';
    }

    if (_dereq_('is-tar')(buf)) {
        return 'tar';
    }

    if (_dereq_('is-zip')(buf)) {
        return 'zip';
    }

    return false;
};

},{"is-bzip2":2,"is-gzip":3,"is-rar":4,"is-tar":5,"is-zip":6}],2:[function(_dereq_,module,exports){
'use strict';

/**
 * Check if a Buffer/Uint8Array is a BZIP2 file
 *
 * @param {Buffer} buf
 * @api public
 */

module.exports = function (buf) {
    if (!buf || buf.length < 3) {
        return false;
    }

    return buf[0] === 66 && buf[1] === 90 && buf[2] === 104;
};

},{}],3:[function(_dereq_,module,exports){
'use strict';

/**
 * Check if a Buffer/Uint8Array is a GZIP file
 *
 * @param {Buffer} buf
 * @api public
 */

module.exports = function (buf) {
    if (!buf || buf.length < 4) {
        return false;
    }

    return buf[0] === 31 && buf[1] === 139 && buf[2] === 8;
};

},{}],4:[function(_dereq_,module,exports){
'use strict';

/**
 * Check if a Buffer/Uint8Array is a RAR file
 *
 * @param {Buffer} buf
 * @api public
 */

module.exports = function (buf) {
    if (!buf || buf.length < 7) {
        return false;
    }

    return buf[0] === 82 && buf[1] === 97 && buf[2] === 114 && buf[3] === 33 && buf[4] === 26 && buf[5] === 7 && (buf[6] === 0 || buf[6] === 1);
};

},{}],5:[function(_dereq_,module,exports){
'use strict';

/**
 * Check if a Buffer/Uint8Array is a TAR file
 *
 * @param {Buffer} buf
 * @api public
 */

module.exports = function (buf) {
    if (!buf || buf.length < 4) {
        return false;
    }

    return buf[257] === 117 && buf[258] === 115 && buf[259] === 116 && buf[260] === 97 && buf[261] === 114;
};

},{}],6:[function(_dereq_,module,exports){
'use strict';

/**
 * Check if a Buffer/Uint8Array is a ZIP file
 *
 * @param {Buffer} buf
 * @api public
 */

module.exports = function (buf) {
    if (!buf || buf.length < 4) {
        return false;
    }

    return buf[0] === 80 && buf[1] === 75 && (buf[2] === 3 || buf[2] === 5 || buf[2] === 7) && (buf[3] === 4 || buf[3] === 6 || buf[3] === 8);
};

},{}]},{},[1])
(1)
});