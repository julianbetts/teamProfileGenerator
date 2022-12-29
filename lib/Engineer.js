const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github
    } //always need constructor

    getGithub(){
        return this.github
    }
    getRole(){
        return ('Engineer')
    }
}

module.exports = Engineer



// //github—GitHub username

// getGithub()

// getRole()—overridden to return 'Engineer'