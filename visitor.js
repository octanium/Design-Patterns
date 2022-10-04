function Employee(name, salary)
{
  this.name = name
  this.salary = salary
}

Employee.prototype = {
  getSalary: function()
  {
    return this.salary
  },
  setSalary: function(sal)
  {
    this.salary = sal
  },
  accept: function(visitorFunction)
  {
    visitorFunction(this)
  }
}
/////////////////////////////////////////////

const user1 = new Employee("Kamran", 10000)
console.log(user1.getSalary())

function ExtraSalary(emp)
{
  emp.setSalary(emp.getSalary() * 2)
}

user1.accept(ExtraSalary)
console.log(user1.getSalary())