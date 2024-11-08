// Problem 8:
// Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys.
// The function should return true if all of the specified keys exist in the object; otherwise, it should return false.


function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    return keys.every(key => key in obj);
}

const user = {
    name: "Mitu",
    age: 30,
    email: "mitu@gmail.com"
};

console.log(validateKeys(user, ["name", "age"]));
// console.log(validateKeys(user, ["name", "address"])); 