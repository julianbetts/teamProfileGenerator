const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
    } //always need constructor

    getSchool(){
        return this.school
    }
    getRole(){
        return ('Intern')
    }
}

module.exports = Intern
