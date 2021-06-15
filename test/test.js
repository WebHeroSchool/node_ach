const assert = require('assert')
const arr1 = [1,2,3];
reverse1 = (a) => a.map(a.pop, [...a]);
reverse2 = arr => arr.reverse();

it ('func reverse1', function() {
    assert.deepEqual(reverse1(arr1), [3,2,1])
})

it ('func reverse2', function() {
    assert.deepEqual(reverse2(arr1), [3,2,1])
})
// console.log(reverse1(arr1))
// console.log(reverse2(arr1))
