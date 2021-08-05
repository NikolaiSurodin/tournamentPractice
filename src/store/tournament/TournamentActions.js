import {Tournament} from "@/classes/Tournament";
import {TournamentRound} from "@/classes/TournamentRound";
import {TournamentRoundMatch} from "@/classes/TournamentRoundMatch";

export default {

    createTournament({commit, dispatch}, data) {
        return new Promise((resolve, reject) => {
            const tournament = new Tournament(data)
            if (tournament.participantCount === Math.pow(2, Math.floor(Math.log(tournament.participantCount) / Math.log(2)))) {

                commit('SET_TOURNAMENT', tournament)
                dispatch('createRound', tournament.roundCount)
                dispatch('createMatchList')
                resolve()

            } else {
                reject(err => console.log(err))
            }
        })
    },
    createRound({commit, state}) {
        const roundCount = Math.log(state.participantCount) / Math.log(2)
        commit('SET_ROUND_COUNT', roundCount)
        let roundList = []
        for (let i = 0; i < roundCount; i++) {
            roundList.push(new TournamentRound(i + 1))
        }
        commit('SET_ROUND_LIST', roundList)
    },
    createMatchList({commit, getters}) {
        let matchList = []
        let roundList = getters.getRoundList
        let participantCount = getters.getParticipantCount

        roundList.forEach((round) => {
            let numberRound = round.numberRound
            for (let i = 0; i < participantCount / Math.pow(2, numberRound); i++) {
                let numberMatch = i + 1
                let match = new TournamentRoundMatch(numberRound, numberMatch)

                matchList.push(match)

            }
        })
        commit('SET_MATCH_LIST', matchList)
    }

}