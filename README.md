# gm-base64

A plugin for gm node module, which converts an image to a base64 string or data URI.

Forked and adapted from https://github.com/didikeke/gm-base64

Additions:
- Added documentation using documentation.js
- Auto-detect format of image (this may affect conversion speed)
- Edited code to use const/let instead of var

## Installation

    $ npm install https://github.com/aidtechnology/gm-base64

## Usage

With DataUri:

```
const gm = require('gm');
require('gm-base64');

let toDataUri = true;
gm('a.jpg')
  .resize(384)
  .toBase64(toDataUri, function(err, base64){
    console.log(base64);
  });

```


Without DataUri:
```
var gm = require('gm');
require('gm-base64');

gm('a.jpg')
  .resize(384)
  .toBase64(function(err, base64){
    console.log(base64);
  });

```

## License

[The MIT License](http://opensource.org/licenses/MIT)
