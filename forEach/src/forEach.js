//primjer 1
const array1 = [1,3,6,7]
let Callbacknum = 0

array1.forEach(function (element) {
    console.log(element)
    Callbacknum++
})

console.log("Callbacknum: ", Callbacknum)

//primjer 2
const varArray = ['var1', 'var2', 'var3']
const copyArray = []

varArray.forEach(function (item) {
    copyArray.push(item)
})
console.log(copyArray)

//primjer 3
function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element)
}

[2, 5, , 9].forEach(logArrayElements)

//PRIMJE 4

function Counter() {
    this.sum = 0
    this.count = 0
}
Counter.prototype.add = function (array) {
    array.forEach(function countEntry(entry) {
        this.sum += entry
        ++this.count
    }, this)
}

const obj = new Counter()
obj.add([2, 5, 9])
obj.count
// 3
obj.sum
// 16

//PRIMJER 5

function copy(obj) {
    const copy = Object.create(Object.getPrototypeOf(obj))
    const propNames = Object.getOwnPropertyNames(obj)

    propNames.forEach(function (name) {
        const desc = Object.getOwnPropertyDescriptor(obj, name)
        Object.defineProperty(copy, name, desc)
    })

    return copy
}

const obj1 = { a: 1, b: 2 }
const obj2 = copy(obj1) // obj2 looks like obj1 now


//PRIMJER 6

let words = ['one', 'two', 'three', 'four']
words.forEach(function (word) {
    console.log(word)
    if (word === 'two') {
        words.shift() //'one' will delete from array
    }
}) // one // two // four

console.log(words);  //['two', 'three', 'four']

//PRIMJER 7

function flatten(arr) {
    const result = []

    arr.forEach(function (i) {
        if (Array.isArray(i)) {
            result.push(...flatten(i))
        } else {
            result.push(i)
        }
    })

    return result
}

// Usage
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]]

flatten(nested) // [1, 2, 3, 4, 5, 6, 7, 8, 9]




module.exports = { numCallbackRuns, copyItems, logArrayElements };