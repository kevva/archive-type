'use strict';

var archiveType = require('../');
var fs = require('fs');
var path = require('path');
var test = require('ava');

test('detect archive type from Buffer', function (t) {
    t.plan(2);

    function c(file) {
        return archiveType(fs.readFileSync(file));
    }

    t.assert(c(path.join(__dirname, 'fixtures/test.tar')) === 'tar');
    t.assert(c(path.join(__dirname, 'fixtures/test.zip')) === 'zip');
});
