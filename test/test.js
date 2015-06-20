'use strict';
var fs = require('fs');
var path = require('path');
var spawn = require('child_process').spawn;
var test = require('ava');
var archiveType = require('../');

test('detect archive type from Buffer', function (t) {
	t.plan(4);

	var tar = fs.readFileSync(path.join(__dirname, 'fixtures/test.tar'), null);
	var zip = fs.readFileSync(path.join(__dirname, 'fixtures/test.zip'), null);

	t.assert(archiveType(tar).ext === 'tar', archiveType(tar).ext);
	t.assert(archiveType(tar).mime === 'application/x-tar', archiveType(tar).mime);
	t.assert(archiveType(zip).ext === 'zip', archiveType(zip).ext);
	t.assert(archiveType(zip).mime === 'application/zip', archiveType(zip).mime);
});

test('detect archive type from Buffer using CLI', function (t) {
	t.plan(2);

	var src = fs.createReadStream(path.join(__dirname, 'fixtures/test.tar'));
	var cp = spawn(path.join(__dirname, '../cli.js'));

	cp.stdout.setEncoding('utf8');
	cp.stdout.on('data', function (data) {
		t.assert(data, data);
		t.assert(data.trim() === '{ ext: \'tar\', mime: \'application/x-tar\' }', data.trim());
	});

	src.pipe(cp.stdin);
});
