# archive-type [![Build Status](https://travis-ci.org/kevva/archive-type.svg?branch=master)](https://travis-ci.org/kevva/archive-type)

> Detect the archive type of a Buffer/Uint8Array

## Install

```bash
$ npm install --save archive-type
```

```bash
$ component install kevva/archive-type
```

```bash
$ bower install --save archive-type
```
## Usage

```js
var archiveType = require('archive-type');
var fs = require('fs');
var buf = fs.readFileSync('foo.zip');

archiveType(buf);
// => zip
```

## CLI

You can also use it as a CLI app by installing it globally:

```bash
$ npm install --global archive-type
```

### Usage

```bash
$ archive-type --help

Usage
  $ cat <file> | archive-type

Example
  $ cat foo.tar.gz | archive-type
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) © [Kevin Mårtensson](https://github.com/kevva)
