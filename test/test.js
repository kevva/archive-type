'use strict';

var archiveType = require('../');
var path = require('path');
var read = require('fs').readFile;
var test = require('ava');

test('detect archive type from Buffer', function (t) {
    t.plan(4);

    read(path.join(__dirname, 'fixtures/test.tar'), function (err, buf) {
        t.assert(!err);
        t.assert(archiveType(buf) === 'tar');

        read(path.join(__dirname, 'fixtures/test.zip'), function (err, buf) {
            t.assert(!err);
            t.assert(archiveType(buf) === 'zip');
        });
    });
});
