

function Dev(name) {
    this.name = name;
    this.type = 'Developer';
}

function Tester(name) {
    this.name = name;
    this.type = 'Tester';
}

function EmployeeHandler () {
    this.create = (name, type) => {
        if (type === 1) {
            return new Dev(name);
        } else if (type === 2) {
            return new Tester(name);
        }
    }
}

function display () {

}

const emp = new EmployeeHandler();
const employees = [];
employees.push(emp.create('Name-1', 1));
employees.push(emp.create('Name-2', 2));
employees.push(emp.create('Name-3', 1));
employees.push(emp.create('Name-4', 2));

employees.forEach(e => {
    console.log('Hi my name is ', e.name, ' and I am a ', e.type);
});