//zadatak 1
function sum(arr) {
    const reducer = (sum, val) => sum + val;
    const initialValue = 0;
    return arr.reduce(reducer, initialValue);
}

console.log('zadatak1 primjer:', sum([2, 6, 8, 9]));

    //zadatak 2
    function union(...arr) {
        return arr.reduce((first, second) => [...new Set(first.concat(second))]);
    }
    console.log('Primjer2: ', union([2, 4, 5, 7, 6], [4, 3, 7, 9], [7, 2, 4, 6,8]))
   
    //zadatak3: 
function common(...arr) {
    return arr.reduce((first, second) => {
        return first.filter(el => second.includes(el));
    })
}
console.log('Primjer3: ', common([4, 7, 11, 3, 5], [5, 7, 12, 6], [9, 7, 4, 5, 2])) 

    //zadatak 4:

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
function fieldByIndex(products, field) {
    return products.reduce((acc, curr) => {
        const key = curr[field];
        const value = acc[key] ? [...acc[key], curr] : [curr];
        acc[key] = value;
        return acc;
    }, {});
}

console.log('zadatak4: ', fieldByIndex(products, 'size'))

//zadatak5: 
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

function getLocation(places, paths) {
    return paths.reduce((object, path) => {
        return (object || {})[path];
    }, places)
}
console.log('zadatak5: ', getLocation(places, paths)) 

//zadatak 6
let people = [
    { name: 'Alen', age: 21 },
    { name: 'Petra', age: 26 },
    { name: 'Ivan', age: 24 }
];

function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        let key = obj[property]
        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(obj)
        return acc
    }, {})
}

console.log('zadatak6: ', groupBy(people, 'age'))

//zadatak7
function removeDuplicate(ageGroup) {
    let uniqueAgeGroup = ageGroup.reduce(function (accumulator, currentValue) {
        if (accumulator.indexOf(currentValue) === -1) {
            accumulator.push(currentValue);
        }
        return accumulator;
    }, []
    );
    return uniqueAgeGroup;
}
//zadatak8
function subtraction(numbers) {
    const minus = ((total, num) => total - num)
    return numbers.reduce(minus);
}
//zadatak9
function dollars(arr) {
    const reducer = ((total, amount) => total + amount);
    return arr.reduce(reducer);
}

module.exports = { dollars, subtraction, removeDuplicate, sum, union, common, fieldByIndex, getLocation, groupBy, people };