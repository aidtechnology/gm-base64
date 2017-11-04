// Chai modules
const chai = require('chai');
const expect = chai.expect;
// General modules
const fs = require('fs');
const _ = require('lodash');

const gm = require('gm');
require('../index');

let test_fns = {
    bmp: __dirname + '/assets/noun_5119_cc.bmp',
    gif: __dirname + '/assets/noun_5119_cc.gif',
    jpeg: __dirname + '/assets/noun_5119_cc.jpg',
    png: __dirname + '/assets/noun_5119_cc.png'
}

describe('Storage', () => {
    describe('gm-base64', () => {
        it('should be able to convert a bmp image to base64', (done) => {
            let in_stream = fs.createReadStream(test_fns['bmp']);
            gm(in_stream).toBase64( true, (err, base64) => {
                expect(err).to.be.null;
                expect(base64).to.contain('bmp');
                done()
            })
        });
        it('should be able to convert a gif image to base64', (done) => {
            let in_stream = fs.createReadStream(test_fns['gif']);
            gm(in_stream).toBase64( true, (err, base64) => {
                expect(err).to.be.null;
                expect(base64).to.contain('gif');
                done()
            })
        });
        it('should be able to convert a jpeg image to base64', (done) => {
            let in_stream = fs.createReadStream(test_fns['jpeg']);
            gm(in_stream).toBase64( true, (err, base64) => {
                expect(err).to.be.null;
                expect(base64).to.contain('jpeg');
                done()
            })
        });
        it('should be able to convert a png image to base64', (done) => {
            let in_stream = fs.createReadStream(test_fns['png']);
            gm(in_stream).toBase64( true, (err, base64) => {
                expect(err).to.be.null;
                expect(base64).to.contain('png');
                done()
            })
        });
    });
});
