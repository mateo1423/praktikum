var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const trigramgen = require("../trigramgen");

describe('trigramgen funkcija', function(){
    it('trigramgen should be a function', function(){
        trigramgen('');
        });
    it('function should throw an error if argument is not a text', function(){
        expect(() => trigramgen(1)).to.throw(Error);
        });
    it('should throw error if argument is not a string', function () {
            expect(() => trigramGenerator(5)).to.throw();
            expect(() => trigramGenerator([])).to.throw();
            expect(() => trigramGenerator({})).to.throw();
          });
      
    it('should return an object', function () {
          // expect(trigramGenerator('')).to.be.an('object');
          expect(typeof trigramGenerator('')).to.equal('object');
        });
      
    it(`should return correct trigram for 2 words input`, function () {
          expect(trigramGenerator('I wish')).to.eql(new Map());
        });
      
    it(`should return correct trigram for 3 words input`, function () {
          console.log(trigramGenerator('I wish I'));
          expect(trigramGenerator('I wish I')).to.eql(new Map([['I wish', ['I']]]));
        });
    });