const gm = require('gm');
const debug = require('debug')('gm-base64');

/**
 * Convert an image to a Base64 image.
 *
 * @example
 * // With a Data URI
 * const gm = require('gm');
 * require('gm-base64');
 *
 * let toDataUri = true;
 * gm('a.jpg')
 *   .resize(384)
 *   .toBase64(toDataUri, function(err, base64){
 *     console.log(base64);
 *   });
 *
 * @example
 * // Without a Data URI
 * const gm = require('gm');
 * require('gm-base64');
 *
 * gm('a.jpg')
 *   .resize(384)
 *   .toBase64(function(err, base64){
 *     console.log(base64);
 *   });
 *
 * @param {boolean} toDataUri - Whether to convert to a Data URI or not.
 * @param {function} callback - Callback to run after conversion succeeds.
 */
gm.prototype.toBase64 = function(toDataUri, callback) {
  if (typeof toDataUri === 'function') {
    callback = toDataUri;
    toDataUri = undefined;
  }

  this.stream(function(err, stdout) {
    let buf = '';
    if (err) {
      return callback(err);
    }
    stdout
      .on('data', function(data) {
        buf += data.toString('binary');
      })
      .on('end', function() {
        let buffer = new Buffer(buf, 'binary');
        gm(buffer).format(function (err, format) {
            if (err) {
              return callback(err);
            }
            format = format.toLowerCase();
            debug('format', format);
            let result = buffer.toString('base64');
            if(toDataUri) {
              result = "data:image/" + format + ";base64,"  + result;
            }
            callback(null, result);
        });
      });
  });

  return this;
};
