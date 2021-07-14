const inquirer = require('inquirer');
const computer = require('./computer')
require('dotenv').config()

let finished
let endApplication


const userChoices = [{
    type: 'list',
    message: 'What would you like to throw out?',
    choices: ["rock", "paper", "scissors"],
    name: 'userChoice'
}]

const end = [{
    type: 'confirm',
    name: "again",
    message: 'Would you like to play again?' ['Yes'/'No']
}]




const play = async () => {
    do {
       const user = await inquirer.prompt(userChoices)
       const { userChoice } = user
       let rpsComp = computer.rpsComp()

       switch (userChoice) {
           case "rock":
               console.log(`computer throws ${rpsComp}`)
               if(rpsComp === "rock"){
                 console.log("you tie")
               }
               if(rpsComp === "paper"){
                 console.log("you lose")
               }
               if(rpsComp === "scissors"){
                 console.log("you win")
               }
               endApplication = await inquirer.prompt(end)
                break;
           case "paper":
            console.log(`computer throws ${rpsComp}`)
            if(rpsComp === "rock"){
                console.log("you win")
              }
              if(rpsComp === "paper"){
                console.log("you tie")
              }
              if(rpsComp === "scissors"){
                console.log("you lose")
              }
               endApplication = await inquirer.prompt(end)
                break;
           case "scissors":
               console.log(`computer throws ${rpsComp}`)
            if(rpsComp === "rock"){
                console.log("you lose")
              }
              if(rpsComp === "paper"){
                console.log("you win")
              }
              if(rpsComp === "scissors"){
                console.log("you tie")
              }
               endApplication = await inquirer.prompt(end)
                break;
            default:
                "please try again"
        }
        finished = endApplication.again
   } while (finished === true)
}

play()