


class SalaryStrategy  {
    constructor (paymentDetails) {
        this.salary = paymentDetails.salary;
    }

    paymentAmount () {
        return (this.salary/12).toFixed(2);
    }
}

class HourlyStrategy {
    constructor (paymentDetails) {
        this.hourlyRate = paymentDetails.hourlyRate;
        this.hours = paymentDetails.hours;
    }

    paymentAmount () {
        return (this.hourlyRate * this.hours);
    }
}


class Employee {
    constructor(empDetails, paymentDetails) {
        this.name = empDetails.name;
        this.paymentDetails = paymentDetails;
    }
    sendPayment (strategyClass) {
        const strategy  = new strategyClass(this.paymentDetails);
        const amount = strategy.paymentAmount();
        console.log('Sending ', amount, ' to ', this.name);
    }
}

const rahul = new Employee({name: 'Rahul'}, { salary: 550000 });
const neha = new Employee({name: 'Neha'}, { salary: 340000 });
const mohit = new Employee({name: 'Mohit'}, { hourlyRate: 2000, hours: 30 });

rahul.sendPayment(SalaryStrategy);
neha.sendPayment(SalaryStrategy);
mohit.sendPayment(HourlyStrategy);