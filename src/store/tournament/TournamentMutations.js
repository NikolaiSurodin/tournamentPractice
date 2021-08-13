export default {
    SET_TOURNAMENT(state, tournament) {
        state.tournament = tournament
        state.participantCount = tournament.participantCount
    },
    SET_ROUND_COUNT(state, roundCount) {
        state.tournament.roundCount = roundCount
    },
    SET_ROUND_LIST(state, roundList) {
        state.roundList = roundList
        state.tournament.roundList = roundList
    },
    SET_MATCH_LIST(state, matchList) {
        state.matchList = matchList
        state.tournament.matchList = matchList
    },
    SET_WINNER_PARTICIPANT_TO_NEXT_MATCH(state, { name, numberRound, numberMatch, index, id }) {

        let match = state.matchList.find( match => match.numberRound === numberRound && match.numberMatch === numberMatch )
        Object.assign( match.participantList[index], {
            id: id,
            name: name
        } )
    },
    SET_TOURNAMENT_WINNER(state, winnerParticipant) {
        state.tournament.winner = winnerParticipant
    },
    SET_PLAY_NAME(state, list) {
        state.participantList = list
    }
}