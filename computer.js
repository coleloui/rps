let computerChoices = ["rock", "paper", "scissors"]

const rpsComp = () => {
    let comp = Math.floor(Math.random()*computerChoices.length)
    return computerChoices[comp]
}

module.exports = {
    rpsComp
}