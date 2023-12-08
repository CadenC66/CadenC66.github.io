let person = [];
let salaries = [];

function addSalary(){
    const name = document.getElementById("employeeEnter").value;
    if (name=="") {
        alert("Invalid input. Please enter valid name.");
        document.getElementById("employeeEnter").focus();
        return;
      }
    const salaryInput = prompt(`Enter salary for ${name}:`);
    if (salaryInput=="" || isNaN(salaryInput)) {
      alert("Invalid input. Please enter valid salary."); 
      return;
    }
  
    const salary = parseFloat(salaryInput);
    person.push(name);
    salaries.push(salary);
  
    document.getElementById("employeeEnter").value = '';
  
    document.getElementById("employeeEnter").focus();
    displayResults();
    displaySalary();
}

function displayResults(){
    const resultsDiv = document.getElementById("results");

  const averageSalary = salaries.length > 0 ? (salaries.reduce((sum, salary) => sum + salary, 0) / salaries.length).toFixed(2) : 0;
  const highestSalary = salaries.length > 0 ? Math.max(...salaries) : 0;

  resultsDiv.innerHTML = `<h2>Results</h2>
                          <p>Average Salary: $${averageSalary}</p>
                          <p>Highest Salary: $${highestSalary}</p>`;
}

function displaySalary(){
    const resultsTable = document.getElementById("results_table");
    resultsTable.innerHTML = `
    <tr>
        <th>Name</th>
        <th>Salary</th>
    </tr>
`;

  for (let i = 0; i < person.length; i++) {
    resultsTable.innerHTML += `
        <tr>
            <td>${person[i]}</td>
            <td>${salaries[i]}</td>
        </tr>
    `;
}
}
