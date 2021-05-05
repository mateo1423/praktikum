var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const dayofyear = require("../dayofyear");

describe('dayofyear impl', function(){
    it('dayofyear should be a function', function(){
        dayofyear(1);
    });
    it('should return 1 for 01.01.2000', function(){
        expect(dayofyear(2000, 1, 1)).to.equal(1);
    });
    it('should return 2 for 02.01.2000', function(){
        expect(dayofyear(2000, 1, 2)).to.equal(2);
    });
    it('should return 32 for 01.02.2000', function(){
        expect(dayofyear(2000, 2, 1)).to.equal(32);
    });
    it('should return 61 for 01.03.2000', function(){
        expect(dayofyear(2000, 3, 1)).to.equal(61);
    });
    it('should return 92 for 01.04.2000', function(){
        expect(dayofyear(2000, 4, 1)).to.equal(92);
    });

});