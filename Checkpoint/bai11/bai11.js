class Employee{
    constructor(name, salary){
        this.name = name, this.salary = salary
    }
displayInfo(){
            console.log(this.name + " lương: " + this.salary)
        }
}

class Manager extends Employee{
    constructor(name, salary, department){
       super(name,salary), this.department = department;
    }
    displayInfo(){
        console.log("Tên: " + this.name + ", lương: " + this.salary + ", phòng ban: "+ this.department)
        // console.log(" daaddad "+ Employee.salary);
    }
}
var nhut = new Employee("nhut", 1000000)
var lam = new Manager("abc",34400000,"Tài chính kế toán")

lam.displayInfo();
nhut.displayInfo();