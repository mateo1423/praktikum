//zadatak1

function isBigEnough(value) {
    return value >= 10
}

//zadatak2

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return num > 1;
}

console.log(array.filter(isPrime));


//zadatak3

let arrObj = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: 'undefined' }
]

let invalidEntries = 0

function filterByID(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
        return true
    }
    invalidEntries++
    return false;
}

let arrByID = arrObj.filter(filterByID)

console.log('Filtered Array\n', arrByID)

console.log('Number of Invalid Entries = ', invalidEntries)

//zadatak4
let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']


function filterItems(arr, query) {
    return arr.filter(function (el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
}

console.log(filterItems(fruits, 'ap')) 
console.log(filterItems(fruits, 'an'))  

//zadatak5

let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']

const modifiedWords = words.filter((word, index, arr) => {
    arr[index + 1] += ' extra'
    return word.length < 6
})

console.log(modifiedWords)


//zdatak6

const appendedWords = words.filter((word, index, arr) => {
    arr.push('new')
    return word.length < 6
})

console.log('PRIMJER 6', appendedWords)
console.log(words)

//zdatak7

words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const deleteWords = words.filter((word, index, arr) => {
    arr.pop()
    return word.length < 6
})

console.log(deleteWords)
//zadatak 8
function isOdd(m) {
    const odd = m.filter(numb => numb % 2 != 0)
    return odd;
}
//zadatak9
function isPositive(positive) {
    const plus = positive.filter(pos => pos > 0)
    return plus;
}
//zdatak10
function checkAdult(ages) {
    const adult = ages.filter(age => age >= 18)
    return adult;
}

module.exports = { isOdd, isPositive, checkAdult, isBigEnough, isPrime, array, arrObj, filterByID, arrByID, invalidEntries, fruits, filterItems, words, modifiedWords, appendedWords, deleteWords }
 