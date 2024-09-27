console.log("----------------------------");
console.log("1. Array assignment. Create an array called Months of 12 elements which will hold the names of the months.");
console.log("----------------------------");

let arr = [12];

arr[0] = "January";
arr[1] = "Feb";
arr[2] = "March";
arr[3] = "April";
arr[4] = "May";
arr[5] = "June";
arr[6] = "July";
arr[7] = "August";
arr[8] = "Sep";
arr[9] = "Oct";
arr[10] = "Nov";
arr[11] = "Dec";

let arr2 = arr.slice();

console.log("----------------------------");
console.log("Display the 5th month of the array.");
console.log("----------------------------");

console.log(arr[4]);

console.log("----------------------------");
console.log("Display all the names of the month in separate line.");
console.log("----------------------------");

for (i = 0; i < 12; i++)
    console.log(arr[i]);

console.log("----------------------------");
console.log("Delete the last month.");
console.log("----------------------------");

let deleted = arr.pop();
for (i = 0; i < 12; i++)
    console.log(arr[i]);

console.log("Deleted month: " + deleted);

console.log("----------------------------");
console.log("Add the deleted last month in the beginning the array.");
console.log("----------------------------");

arr.unshift(deleted);
for (i = 0; i < 12; i++)
    console.log(arr[i]);

console.log("----------------------------");
console.log("Delete 4 months starting from April.");
console.log("----------------------------");

arr.splice(4, 4);
for (i = 0; i < 12; i++)
    console.log(arr[i]);

console.log("----------------------------");
console.log("Add a month named 'MyMonth' after June without deleting any month from the original list of 12 months.");
console.log("----------------------------");

arr2.splice(7, 0, "myMonth");
for (i = 0; i < 12; i++)
    console.log(arr2[i]);


console.log("");
console.log("");
console.log("----------------------------");
console.log("2. Object assignment");
console.log("----------------------------");

let Employee = {
    Employee_No: 111,
    Employee_Name: "Sankalp",
    Employee_Age: 22,
    Employee_Address: "Hubli",
    Employee_PhoneNo: 9916689178,
    Employee_EmailId: "abc@gmail.com"
};

console.log("");
console.log("----------------------------");
console.log("Display the data of the Employee");
console.log("----------------------------");
console.log("");


console.log(`Employee ${Employee.Employee_Name} stays at ${Employee.Employee_Address}`);
console.log(`Employee ${Employee.Employee_Name} has got phone number ${Employee.Employee_PhoneNo}`);
console.log(`Employee ${Employee.Employee_Name} has got email ID ${Employee.Employee_EmailId}`);
console.log(`Employee ${Employee.Employee_Name} age is ${Employee.Employee_Age}`);

console.log("");
console.log("----------------------------");
console.log("Add another key called Employee_Hobbies as another value in the employee object.");
console.log("----------------------------");
console.log("");

Employee.Employee_Hobbies = "Sports";
console.log(Employee);

console.log("");
console.log("----------------------------");
console.log("Delete the EmailId of the employee.");
console.log("----------------------------");
console.log("");

delete Employee.Employee_EmailId;

console.log("");
console.log("----------------------------");
console.log("Display Employee all keys");
console.log("----------------------------");
console.log("");

console.log(Employee);

console.log("");
console.log("----------------------------");
console.log("3. Write a JavaScript program which will store 5 employees' data(employee_number, name, designation, salary) in an array");
console.log("----------------------------");
console.log("");

let employees =
    [
        {
            employee_number: 111,
            name: "AAA",
            designation: "Manager",
            salary: 50000
        },
        {
            employee_number: 222,
            name: "BBB",
            designation: "Analyst",
            salary: 40000
        },
        {
            employee_number: 333,
            name: "CCC",
            designation: "Manager",
            salary: 25000
        },
        {
            employee_number: 444,
            name: "DDD",
            designation: "Software Engineer",
            salary: 30000
        },
        {
            employee_number: 555,
            name: "EEE",
            designation: "Analyst",
            salary: 15000
        }
    ];

console.log(employees)

console.log("");
console.log("----------------------------");
console.log("Updating salaries and displaying employees details after raise:");
console.log("----------------------------");
console.log("");

function raise(employees) {
    employees.forEach(element => {

        if (element.salary >= 40000)
            element.salary += (0.10 * element.salary);

        else if (element.salary >= 30000 && element.salary < 40000)
            element.salary += (0.15 * element.salary);
            
        else if (element.salary >= 20000 && element.salary < 30000)
            element.salary += (0.20 * element.salary);
            
        else
            element.salary += (0.25 * element.salary);

    });
}

raise(employees);

console.log(employees);