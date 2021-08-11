import {TournamentRoundMatchParticipant} from "@/classes/TournamentRoundMatchParticipant"
import {store} from "@/store"

class TournamentRoundMatch {
    id
    numberRound
    numberMatch
    score
    participantList
    date
    completed
    played
    winner

    constructor(numberRound, numberMatch) {
        this.id =`id--${ Math.random().toString(16).slice(-5)}--`
        let year = new Date().getFullYear()
        let month = Math.floor(Math.random() * 11)
        let date = Math.floor(Math.random() * 31)
        this.date = new Date(year, month, date).toISOString().substring(0, 10)
        this.played = this.date < new Date().toISOString().substring(0, 10)
        this.participantList =  this.getParticipantList(numberRound)
        this.numberRound = numberRound
        this.numberMatch = numberMatch
        this.score = store.getters.getTournament.numberOfGames
        this.completed = false
    }
    getParticipantList(numberRound){
       return  numberRound === 1 ? [new TournamentRoundMatchParticipant(), new TournamentRoundMatchParticipant()] : [new TournamentRoundMatchParticipant('TBA'), new TournamentRoundMatchParticipant("TBA")]
    }
}

export {TournamentRoundMatch}