function update() {
    let person =
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
            }
        ];

    person.forEach(person => {
        let newRow = document.getElementById("table").insertRow();

        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);

        cell1.innerHTML = person.employee_number;
        cell2.innerHTML = person.name;
        cell3.innerHTML = person.designation;
        cell4.innerHTML = person.salary;
    });


}