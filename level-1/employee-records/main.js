// Employee Records Assignment

var employees = []

function Employee (name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
}

Employee.prototype.employeePrintForm = function() {
    console.log(this)
}

var jon = new Employee("Jon", "Janitor", "$18.00/hr")
var jacob = new Employee("Jacob", "CEO", "$150,000.00/yr")
var jingles = new Employee("Jingles", "Basket-baller", "1,200,000.00/yr")
jingles.status = "Contract"


jon.employeePrintForm()
jacob.employeePrintForm()
jingles.employeePrintForm()

employees.push(jon, jacob, jingles)