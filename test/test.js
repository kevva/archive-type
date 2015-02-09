'use strict';

var archiveType = require('../');
var fs = require('fs');
var path = require('path');
var spawn = require('child_process').spawn;
var test = require('ava');

test('detect archive type from Buffer', function (t) {
	t.plan(4);

	var tar = fs.readFileSync(path.join(__dirname, 'fixtures/test.tar'), null);
	var zip = fs.readFileSync(path.join(__dirname, 'fixtures/test.zip'), null);

	t.assert(archiveType(tar).ext === 'tar');
	t.assert(archiveType(tar).mime === 'application/x-tar');
	t.assert(archiveType(zip).ext === 'zip');
	t.assert(archiveType(zip).mime === 'application/zip');
});

test('detect archive type from Buffer using CLI', function (t) {
	t.plan(2);

	var src = fs.createReadStream(path.join(__dirname, 'fixtures/test.tar'));
	var cp = spawn(path.join(__dirname, '../cli.js'));

	cp.stdout.setEncoding('utf8');
	cp.stdout.on('data', function (data) {
		t.assert(data);
		t.assert(data.trim() === '{ ext: \'tar\', mime: \'application/x-tar\' }');
	});

	src.pipe(cp.stdin);
});
