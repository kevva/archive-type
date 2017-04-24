import fs from 'fs';
import path from 'path';
import pify from 'pify';
import test from 'ava';
import m from '..';

test(async t => {
	const tar = await pify(fs.readFile)(path.join(__dirname, 'fixtures/test.tar'));
	const zip = await pify(fs.readFile)(path.join(__dirname, 'fixtures/test.zip'));

	t.is(m(tar).ext, 'tar');
	t.is(m(tar).mime, 'application/x-tar');
	t.is(m(zip).ext, 'zip');
	t.is(m(zip).mime, 'application/zip');
});
