const Employee = require("./lib/Employee.js")
const Engineer = require("./lib/Engineer.js")
const Intern = require("./lib/Intern.js")
const Manager = require("./lib/Manager.js")
const inquirer = require("inquirer")
const fs = require("fs") //built in no need to install

const employeeArray = []

const questions = [
    
    {
      type: 'input',
      name: 'name',
      message: "What is your name?",
    },
    {
      type: 'input',
      name: 'id',
      message: 'what is your id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email?',
      },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is your office number?",
    }
    
    
  ];

const engineerQ = [
    {
      type: 'input',
      name: 'name',
      message: "What is your name?",
    },
    {
      type: 'input',
      name: 'id',
      message: 'what is your id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email?',
      },
    {
      type: 'input',
      name: 'github',
      message: "What is your github name?",
    }
]

const internQ = [
  {
    type: 'input',
    name: 'name',
    message: "What is your name?",
  },
  {
    type: 'input',
    name: 'id',
    message: 'what is your id?',
  },
  {
      type: 'input',
      name: 'email',
      message: 'what is your email?',
    },
    {
      type: 'input',
      name: 'school',
      message: "What is your school name?",
    }
]


  
  // Function to write README file using the user input
  function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  
  // Function to initialize app
  function createManager() {
    inquirer.prompt(questions).then((data) => {
      console.log('Generating README...');
      const employee = new Manager(data.name, data.id, data.email, data.officeNumber)
      employeeArray.push(employee)
      chooseEmployee()

    });
  }
function chooseEmployee() {
    inquirer.prompt({
        type: "list",
        name: "option",
        message: "next",
        choices: ["Intern", "Engineer", "Quit"]
    }).then((inquirerResponses) => {
        console.log('Generating README...');
        //if statement to check what function to run
        if (inquirerResponses.option == "Engineer") {
            createEngineer()
        }else if(inquirerResponses.option == "Intern"){
            createIntern()
        }else {
          console.log("quit")
          console.log(employeeArray)
          writeToFile()
        }
      });
}

function createEngineer() {
    inquirer.prompt(engineerQ).then((data)  => { //what do i do with inquirerResponses?
      console.log('Generating...');
      console.log(data)
      const employee = new Engineer(data.name, data.id, data.email, data.github)
      employeeArray.push(employee)
      chooseEmployee()
    });
}

function createIntern() {
    inquirer.prompt(internQ).then((data)  => {
      console.log('Generating...');
      const employee = new Intern(data.name, data.id, data.email, data.school)
      employeeArray.push(employee)
      chooseEmployee()
    });
}



createManager();


//what about manager office number