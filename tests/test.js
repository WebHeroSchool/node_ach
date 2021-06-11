const arr1 = [1,2,3];
reverse1 = (a) => a.map(a.pop, [...a]);
reverse2 = arr => arr.reverse();

console.log(reverse1(arr1))
console.log(reverse2(arr1))
