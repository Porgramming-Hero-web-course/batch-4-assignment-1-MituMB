// Problem 2:
// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed.
//  Preserve the original order of elements.
//removeDuplicates([1, 2, 2, 3, 4, 4, 5])


const removeDuplicates = (numbers: number[]): { prevArr: number[], newArr: number[] } => {
    const uniqueNumbers: number[] = [...new Set(numbers)];
    return { prevArr: numbers, newArr: uniqueNumbers };
}
const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log("Original Array:", result.prevArr);
console.log("Array with Duplicates Removed:", result.newArr);

