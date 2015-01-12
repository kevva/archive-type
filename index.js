'use strict';

var fileType = require('file-type');

/**
 * Detect the archive type of a Buffer/Uint8Array
 *
 * @param {Buffer} buf
 * @api public
 */

module.exports = function (buf) {
	var ret = fileType(buf);
	var exts = [
		'7z',
		'bz2',
		'gz',
		'rar',
		'tar',
		'zip'
	];

	return exts.indexOf(ret && ret.ext) !== -1 ? ret : null;
};
