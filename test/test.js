import fs from 'fs';
import path from 'path';
import pify from 'pify';
import Promise from 'pinkie-promise';
import test from 'ava';
import fn from '../';

test(async t => {
	const tar = await pify(fs.readFile, Promise)(path.join(__dirname, 'fixtures/test.tar'));
	const zip = await pify(fs.readFile, Promise)(path.join(__dirname, 'fixtures/test.zip'));

	t.is(fn(tar).ext, 'tar');
	t.is(fn(tar).mime, 'application/x-tar');
	t.is(fn(zip).ext, 'zip');
	t.is(fn(zip).mime, 'application/zip');
});
