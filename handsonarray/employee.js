const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    { id: 4, name: 'Maria Garcia', age: 32, department: 'Marketing', salary: 55000 },
    { id: 5, name: 'James Wilson', age: 41, department: 'IT', salary: 72000 },
    { id: 6, name: 'Emily Chen', age: 27, department: 'HR', salary: 48000 },
    { id: 7, name: 'Michael Brown', age: 38, department: 'Finance', salary: 65000 },
    { id: 8, name: 'Sarah Davis', age: 29, department: 'Marketing', salary: 52000 },
    { id: 9, name: 'David Martinez', age: 44, department: 'IT', salary: 80000 },
    { id: 10, name: 'Laura Thompson', age: 33, department: 'HR', salary: 47000 },
    { id: 11, name: 'Chris Anderson', age: 36, department: 'Finance', salary: 68000 },
    { id: 12, name: 'Jessica Taylor', age: 25, department: 'Marketing', salary: 43000 },
    { id: 13, name: 'Kevin White', age: 40, department: 'IT', salary: 75000 },
    { id: 14, name: 'Amanda Harris', age: 31, department: 'HR', salary: 49000 },
    { id: 15, name: 'Daniel Lee', age: 37, department: 'Finance', salary: 63000 },
    { id: 16, name: 'Megan Clark', age: 26, department: 'Marketing', salary: 46000 },
    { id: 17, name: 'Ryan Lewis', age: 43, department: 'IT', salary: 78000 },
    { id: 18, name: 'Sophia Robinson', age: 29, department: 'Marketing', salary: 51000 },
    { id: 19, name: 'Ethan Walker', age: 34, department: 'Finance', salary: 67000 },
    { id: 20, name: 'Olivia Hall', age: 27, department: 'HR', salary: 46000 },
    { id: 21, name: 'Liam Young', age: 39, department: 'IT', salary: 82000 },
    { id: 22, name: 'Emma Allen', age: 31, department: 'Marketing', salary: 54000 },
    { id: 23, name: 'Noah King', age: 45, department: 'Finance', salary: 71000 },
    { id: 24, name: 'Ava Scott', age: 26, department: 'HR', salary: 44000 },
    { id: 25, name: 'William Green', age: 37, department: 'IT', salary: 76000 },
];

const employeeDetails = document.getElementById('employeesDetails')
const tableEntete = `<thead><tr><th>id</th><th>name</th><th>age</th><th>department</th><th>salary</th></tr></thead>`


function displayEmployees() {
    const employeesData = employees.map(({ id, name, age, department, salary }) => `<tr><td>${id}</td><td>${name}</td><td>${age}</td><td>${department}</td><td>${salary}</td></tr>`).join('')
    employeeDetails.innerHTML=`<table>${tableEntete}<tbody>${employeesData}</tbody></table>`
}

function calculateTotalSalaries(){
    const totalSalary=employees.reduce((acc,{salary})=>acc+salary,0)
    employeeDetails.innerHTML=`<h1>Total employees Salary:$${totalSalary}</h1>`

}
function displayHREmployees(){
    const Hremployees=employees.filter(({department})=>department=='HR').map(({ id, name, age, department, salary }) => `<tr><td>${id}</td><td>${name}</td><td>${age}</td><td>${department}</td><td>${salary}</td></tr>`).join('')
    employeeDetails.innerHTML=`<table>${tableEntete}<tbody>${Hremployees}</tbody></table>`

}

function findEmployeeById(employeeId){
    if (employeeId>employees.length){
        alert('the id is not correct')
    }
    const employeesearched=employees.find(({id})=>id===parseInt(employeeId))
    let searched=''
    
for (let [key,val] of Object.entries(employeesearched)){
    searched+=`<li>${key}:${val}</li>`

}
    employeeDetails.innerHTML=`<ul>${searched}</ul>`
}