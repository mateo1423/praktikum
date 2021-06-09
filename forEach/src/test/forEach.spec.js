let assert = require('assert');
let chai = require('chai');
let expect = chai.expect;
let should = chai.should;
const { numCallbackRuns, copyItems, logArrayElements } = require("../forEach.js");
[2, 5, , 9].forEach(logArrayElements)


describe('FOR EACH', function () {
    //primjer 1
    it('CallBacknum should return 4', function () {
        expect(CallbackRuns).to.be.equal(4)
    });
    //primjer 2
    it('copyArray should return  var1, var2, var3', function () {
        expect(copyArray).to.be.eql(['var1', 'var2', 'var3'])
    });

});