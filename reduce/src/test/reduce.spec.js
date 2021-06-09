var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const { dollars, subtraction, removeDuplicate, sum, union, common, fieldByIndex, getLocation, groupBy, people } = require("../reduce.js");


describe('REDUCE', function () {
   //zadatak1
    it('sum should be a function', function () {
        expect(sum).to.be.a('function');
    });
    it("sum should throw error if argument is not an array",
        function () {
            expect(() => sum("text")).to.throw(Error);
            expect(() => sum(1)).to.throw(Error);
            expect(() => sum({})).to.throw(Error);
        });
    it("sum should accept array as an argument", function () {
        sum([]);
    });
    it("sum should return 16 if parameter is: [2, 6, 8, 9] ", function () {
        expect(sum([2, 6, 8, 9])).to.equal(25);
    });

    //primjer2
    it('union should be a function', function () {
        expect(union).to.be.a('function');
    });
    it("union hould return [2, 4, 5, 7, 6, 3, 9, 8] if parameter is: [2, 4, 5, 7, 6], [4, 3, 7, 9], [7, 2, 4, 6,8]", function () {
        expect(union([2, 4, 5, 7, 6], [4, 3, 7, 9], [7, 2, 4, 6,8])).to.eql([2, 4, 5, 7, 6, 3, 9, 8]);
    });

    //primjer3
    it('common should be a function', function () {
        expect(common).to.be.a('function');
    });
    it("common should return [5, 7] if parameter is: [4, 5, 11, 3, 7], [5, 7, 12, 6], [9, 5, 4, 7, 2] ", function () {
        expect(common([4, 5, 11, 3, 7], [5, 7, 12, 6], [9, 5, 4, 7, 2])).to.eql([7, 5]);
    });

    //zadatak4
    const products = [
        {
            "Id": 234435,
            "color": 1,
            "size": "11-M"
        },
        {
            "Id": 443434,
            "color": 2,
            "size": "11-M"
        },
        {
            "Id": 343434,
            "color": 1,
            "size": "11-L"
        },
        {
            "Id": 322333,
            "color": 2,
            "size": "12-M"
        }
    ];

    it('fieldByIndex should be a function', function () {
        expect(fieldByIndex).to.be.a('function');
    });
    it("Should return 11-M if parameter is products ", function () {
        expect(fieldByIndex(products, 'size')).to.eql({
            '11-M': [
                { Id: 234435, color: 1, size: '11-M' },
                { Id: 443434, color: 2, size: '11-M' }
            ],
            '11-L': [{ Id: 343434, color: 1, size: '11-L' }],
            '12-M': [{ Id: 322333, color: 2, size: '12-M' }]
        });
    });

    //zadatak5
    const places = {
        tours: {
            nearMe: {
                thailand: {
                    date: 'Mon Aug 27',
                    loc: 'Bangkok',
                    cost: '3000.00',
                },
            },
        }
    }
    const paths = ['tours', 'nearMe', 'thailand', 'loc'];
    it('getLocation should be a function', function () {
        expect(fieldByIndex).to.be.a('function');
        expect(getLocation(places, paths)).to.eql("Bangkok");
    });

    //zadatak6
    it('groupBy should be a function', function () {
        expect(groupBy).to.be.a('function');
    });
    it("groupBy should throw error if argument is not an array",
        function () {
            expect(() => groupBy("text")).to.throw(Error);
            expect(() => groupBy(1)).to.throw(Error);
            expect(() => groupBy({})).to.throw(Error);
        });
    it("groupBy should accept array of objects as an argument", function () {
        groupBy([{}]);
    });
    it("groupBy should return  if parameter is people", function () {
        expect(groupBy(people, 'age')).to.eql({
            '21': [{ name: 'Alen', age: 21 }],
            '24': [{ name: 'Ivan', age: 24 }],
            '26': [{ name: 'Petra', age: 26 }]
        });
    });

    //zadatak7
    it("removing duplicate numbers", function () {
        expect(removeDuplicate([18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10])).to.be.eql([18, 21, 1, 51, 5, 7, 10])
    });

    it("removing duplicate numbers 2", function () {
        expect(removeDuplicate([5, 5, 5, 4, 4, 8, 8, 5, 4])).to.be.eql([5, 4, 8])
    });

    it("for [455, 55, 20] should return 380", function () {
        expect(subtraction([455, 55, 20])).to.be.equal(380)
    });

    it("for [21, 4, 12] should return 10", function () {
        expect(subtraction([21, 4, 12])).to.be.equal(5)
    });

    it("counting dollars: [40, 50, 60] should be 150", function () {
        expect(dollars([40, 50, 60])).to.equal(150)
    });

    it("counting dollars: [22,16] should be 38", function () {
        expect(dollars([22, 16])).to.equal(38)
    });

});