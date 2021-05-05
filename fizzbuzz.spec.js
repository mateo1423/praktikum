var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const fizzBuzz = require("../fizzBuzz");

describe.skip('fizz buz problem', function() {
    it('fizzBuzz should be a function', function () {
        fizzBuzz();
    });

    it("za broj djeljiv sa 3 funkcija vraća Fizz", function() {
        let result = fizzBuzz(3);
        expect(result).to.eq("Fizz");
    });

    it("za broj djeljiv sa 5 funkcija vraća Buzz", function() {
       assert.equal(fizzBuzz(5), "Buzz"); 
    });

    it("Za broj djeljiv sa 3 i 5 funkcija vraća FizzBuzz", function() {
        expect(fizzBuzz(15)).to.eq("FizzBuzz");
    });

    it("Za ostale brojeve vratiti undefined", function() {
        let result = fizzBuzz(4);
        assert.strictEqual(result, undefined);
    });

});