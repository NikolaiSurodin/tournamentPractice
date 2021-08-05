class TournamentRoundMatchParticipant {
    id
    name
    score


    constructor() {
        this.id =  Math.random().toString(10).slice(-4)
        this.name = 'Player'
        this.score = 0
    }
}
export {TournamentRoundMatchParticipant}