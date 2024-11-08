// Problem 1:
// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

const sumArray = (numbers: number[]): number => {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

const sum = sumArray([1, 2, 3, 4, 5]);
console.log(sum)











