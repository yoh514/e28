new Vue({
    el: '#app',
    data: {
        userChoice: null,
        comChoice: null,
        count: 3,
        winner: null,
        lifeOfUser: 3,
        lifeOfCom: 3,
        isClickable: true,
        logs: [],
        selects: [
            { name: 'Scissors', value: 'scissors' },
            { name: 'Rock', value: 'rock' },
            { name: 'Paper', value: 'paper' },
        ]
    },

    computed: {
        userChoiceImg: function () {
            return this.userChoice !== null ?
                `images/${this.userChoice}.png` : 'images/question.png'
        },
        comChoiceImg: function () {
            return this.comChoice !== null ?
                `images/${this.comChoice}.png` : 'images/question.png'
        },
        leftLifeOfUser: function () {
            return 3 - this.lifeOfUser
        },
        leftLifeOfCom: function () {
            return 3 - this.lifeOfCom
        }
    },

    watch: {
        count: function (newVal) {
            if (newVal === 0) {
                // computer selects move 
                this.selectCom()

                // win or lose, deduct life of loser
                this.whoIsWin()

                // reset game
                this.count = 3
                this.isClickable = true
                this.updateLogs()
            }
        },
        lifeOfUser: function (newVal) {
            if (newVal === 0) {
                // end the game
                this.endGame('Sorry. You lost.')
            }
        },
        lifeOfCom: function (newVal) {
            if (newVal === 0) {
                this.endGame('Congratulations! You won!')
            }
        }
    },
    methods: {
        startGame: function () {
            //not showing the button
            this.isClickable = false
            if (this.userChoice === null) {
                alert('Select one from Rock, Scissors, or Paper')
                this.isClickable = true
            } else {
                let countDown = setInterval(() => {
                    this.count--
                    if (this.count === 0) {
                        clearInterval(countDown)
                    }
                }, 1000)
            }
        },
        selectCom: function () {
            let number = Math.random()
            if (number < 0.33) {
                this.comChoice = 'scissors'
            } else if (number < 0.66) {
                this.comChoice = 'rock'
            } else {
                this.comChoice = 'paper'
            }
        },
        whoIsWin: function () {
            if (this.userChoice === this.comChoice) this.winner = 'draw'
            else if (this.userChoice === 'rock' && this.comChoice === 'scissors') this.winner = 'user'
            else if (this.userChoice === 'scissors' && this.comChoice === 'paper') this.winner = 'user'
            else if (this.userChoice === 'paper' && this.comChoice === 'rock') this.winner = 'user'
            else if (this.userChoice === 'scissors' && this.comChoice === 'rock') this.winner = 'com'
            else if (this.userChoice === 'paper' && this.comChoice === 'scissors') this.winner = 'com'
            else if (this.userChoice === 'rock' && this.comChoice === 'paper') this.winner = 'com'
            else this.winner = 'error'

            // deduct life
            if (this.winner === 'user') {
                this.lifeOfCom--
            }
            else if (this.winner === 'com') {
                this.lifeOfUser--
            }
        },
        updateLogs: function () {
            let log = {
                message: `You: ${this.userChoice}, Computer: ${this.comChoice}`,
                winner: this.winner
            }

            this.logs.unshift(log)
        },
        endGame: function (msg) {
            setTimeout(() => {
                confirm(msg)
                this.lifeOfUser = 3
                this.lifeOfCom = 3
                this.userChoice = null
                this.comChoice = null
                this.winner = null
                this.logs = []
            }, 500)
        }
    }
})