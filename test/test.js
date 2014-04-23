/*global describe, it */
'use strict';

var assert = require('assert');
var archiveType = require('../');
var fs = require('fs');
var path = require('path');

describe('extname()', function () {
    function check(file) {
        return archiveType(fs.readFileSync(file));
    }

    it('should detect archive type from Buffer', function (cb) {
        assert.strictEqual(check(path.join(__dirname, 'fixtures/test.tar')), 'tar');
        assert.strictEqual(check(path.join(__dirname, 'fixtures/test.zip')), 'zip');
        cb();
    });
});
