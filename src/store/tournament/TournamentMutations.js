export default {
    SET_TOURNAMENT(state, tournament) {
        state.tournament = tournament
        state.participantCount = tournament.participantCount
    },
    SET_ROUND_COUNT(state, roundCount) {
        state.tournament.roundCount = roundCount
    },
    SET_ROUND_LIST(state, roundLIst) {
        state.roundList = roundLIst
        state.tournament.roundList = roundLIst
    },
    SET_MATCH_LIST(state, matchList) {
        state.matchList = matchList
        state.tournament.matchList = matchList
    }
}