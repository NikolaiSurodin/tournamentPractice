export default {
    getTournament: state => state.tournament,
    getMatchList: state => state.matchList,
    getRoundList: state => state.roundList,
    getParticipantCount: state => state.participantCount,
    getTournamentWinner: state => state.tournament.winner,
    getParticipantList: state => state.participantList
}