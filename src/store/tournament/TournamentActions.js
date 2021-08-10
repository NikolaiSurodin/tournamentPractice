import {Tournament} from "@/classes/Tournament";
import {TournamentRound} from "@/classes/TournamentRound";
import {TournamentRoundMatch} from "@/classes/TournamentRoundMatch";

export default {

    createTournament({ commit, dispatch }, data) {
        return new Promise( (resolve, reject) => {
            const tournament = new Tournament( data )
            if ( tournament.participantCount === Math.pow( 2, Math.floor( Math.log( tournament.participantCount ) / Math.log( 2 ) ) ) ) {

                commit( 'SET_TOURNAMENT', tournament )
                dispatch( 'createRound', tournament.roundCount )
                dispatch( 'createMatchList' )
                resolve( tournament )

            } else {
                reject( err => console.log( err ) )
            }
        } )
    },
    createRound({ commit, state }) {
        const roundCount = Math.log( state.participantCount ) / Math.log( 2 )
        commit( 'SET_ROUND_COUNT', roundCount )
        let roundList = []
        for (let i = 0; i < roundCount; i++) {
            roundList.push( new TournamentRound( i + 1 ) )
        }
        commit( 'SET_ROUND_LIST', roundList )
    },
    createMatchList({ commit, getters }) {
        let matchList = []
        let roundList = getters.getRoundList
        let participantCount = getters.getParticipantCount

        roundList.forEach( (round) => {
            let numberRound = round.numberRound
            for (let i = 0; i < participantCount / Math.pow( 2, numberRound ); i++) {
                let numberMatch = i + 1
                let match = new TournamentRoundMatch( numberRound, numberMatch )

                matchList.push( match )

            }
        } )
        commit( 'SET_MATCH_LIST', matchList )
    },
    addPoint({ commit, getters }, payload) {

        let maxScoreForMatch = getters.getTournament.numberOfGames
        let participantList = payload.participantList
        let sumParticipantsScore = (participantList[0].score + participantList[1].score) + 1
        let roundCount = getters.getTournament.roundCount
        let match = payload.match

        if ( match.score >= sumParticipantsScore && payload.participant.name !== 'Player' && payload.participant.name !== 'NO NAME' ) {

            payload.participant.score++

        }

        if ( maxScoreForMatch === sumParticipantsScore ) {

            let winnerParticipant = participantList[0].score > participantList[1].score ? participantList[0] : participantList[1]

            match.completed = true
            match.winner = winnerParticipant

            let nextMatchNumber = null
            let participantIndex = null

            if ( match.numberMatch % 2 === 0 ) {
                nextMatchNumber = match.numberMatch
                participantIndex = 1
            } else {
                nextMatchNumber = match.numberMatch + 1
                participantIndex = 0
            }

            if ( match.numberRound + 1 <= roundCount ) {

                commit( 'SET_WINNER_PARTICIPANT_TO_NEXT_MATCH', {
                    id: winnerParticipant.id,
                    name: winnerParticipant.name,
                    numberMatch: nextMatchNumber / 2,
                    numberRound: match.numberRound + 1,
                    index: participantIndex

                } )
            }
        }
    },
    createTournamentWinner({ commit, getters }) {
        let matchList = getters.getMatchList
        let lastMatch = matchList[matchList.length - 1]
        let participantListLastMatch = lastMatch.participantList
        if ( participantListLastMatch[0].name !== 'Player' || participantListLastMatch[1].name !== 'Player' ) {

            let winnerParticipant = participantListLastMatch[0].score > participantListLastMatch[1].score ? participantListLastMatch[0] : participantListLastMatch[1]

            if ( lastMatch.score === participantListLastMatch[0].score + participantListLastMatch[1].score ) {
                commit( 'SET_TOURNAMENT_WINNER', winnerParticipant )
            }

        }
    }

}