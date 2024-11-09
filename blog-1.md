
# Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

- Type guards in TypeScript are necessary because it helps developers to check that the variables or objects they're using are the correct type during runtime. This helps keep code clean and error-free, and also makes it easier to debug if there is any wrong data type. So, it is important to use type guards to keep everything running smoothly! 🚀


There are several types of type guards in TypeScript. Here are the main ones with examples:

**1. `typeof` Type Guard**
The `typeof `operator checks for primitive data types like string, number, boolean, etc. It helps for checking basic data type.

**_Example:_**


```
function checkType(value: string | number | boolean) {
  if (typeof value === "string") {
    console.log("string value:", value);
  } else if (typeof value === 'number'){
    console.log("number value:", value);
  }else{
  console.log("this is boolean value:", value);
  }
}
checkType(60)
```


> **Use Case**: Use `typeof `when you need to handle different types of primitive values differently.

**2. `instanceof` Type Guard**

The `instanceof` keyword checks if an object is an instance of a particular class.


```
class Manager{
  role: string;
  id:number;

  constructor(role: string,id:number) {
    this.role= role;
    this.id= id;
  }

  getDetails() {
    return `Manger: Role- "${this.role}", ID - ${this.id}`;
  }
}

class Executive{
  department: string;
  sec: string;

  constructor(department: string, sec: string) {
    this.department= department;
    this.sec= sec;
  }

  getDetails() {
    return `Executive: department - "${this.department}", Section - ${this.sec}`;
  }
}

function employeeDetail(employee: Manager| Executive) {
  if (employee instanceof Executive) {
    console.log(employee.getDetails());
  } else {
    console.log(employee.getDetails());
  }
}

// check value
const manager= new Manager("Admin", 333);
const executive= new Executive("IT", "Network");

employeeDetail(manager);      // Output:  "Manger: Role- "Admin", ID - 333" 
employeeDetail(executive) // Output:  "Executive: department - "IT", Section - Network" 
```

> **Use Case:** Use `instanceof `when working with objects created from specific classes and you need to access class-specific properties or methods


**3. `in` Operator Type Guard**
The `in` operator checks if a specific property exists in an object.

**_Example:_**

```
interface Car {
  drive: () => void;
}

interface Boat {
  sail: () => void;
}

function start(vehicle: Car | Boat) {
  if ("drive" in vehicle) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
}
```

> **Use Case:** Use `in` when you need to check if a particular property exists in an object, especially when dealing with objects that have overlapping or similar structures.
