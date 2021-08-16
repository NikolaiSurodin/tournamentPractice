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
    addPoint({ commit, getters }, match) {
        let roundCount = getters.getTournament.roundCount
        let currentMatch = match.match
        let participantList = currentMatch.participantList
        let participant = participantList.find( player => player.id === match.participantId )
        let sumParticipantsScore = participantList[0].score + participantList[1].score

        if ( currentMatch.score > sumParticipantsScore && participant.name !== 'TBA' ) {

            participant.score++
        }

        if ( currentMatch.score === sumParticipantsScore + 1 && participant.name !== 'TBA' ) {

            let winnerParticipant = participant.score > participant.score ? participant : participant

            currentMatch.completed = true
            currentMatch.winner = winnerParticipant

            let nextMatchNumber = null
            let participantIndex = null

            if ( currentMatch.numberMatch % 2 === 0 ) {
                nextMatchNumber = currentMatch.numberMatch
                participantIndex = 1
            } else {
                nextMatchNumber = currentMatch.numberMatch + 1
                participantIndex = 0
            }

            if ( currentMatch.numberRound + 1 <= roundCount ) {

                commit( 'SET_WINNER_PARTICIPANT_TO_NEXT_MATCH', {
                    id: winnerParticipant.id,
                    name: winnerParticipant.name,
                    numberMatch: nextMatchNumber / 2,
                    numberRound: currentMatch.numberRound + 1,
                    index: participantIndex
                } )
            }
        }
    },
    createTournamentWinner({ commit, getters }) {
        let matchList = getters.getMatchList
        let lastMatch = matchList[matchList.length - 1]
        let participantListLastMatch = lastMatch.participantList
        if ( participantListLastMatch[0].name !== 'TBA' || participantListLastMatch[1].name !== 'TBA' ) {
            let winnerParticipant = participantListLastMatch[0].score > participantListLastMatch[1].score ? participantListLastMatch[0] : participantListLastMatch[1]

            if ( lastMatch.score === participantListLastMatch[0].score + participantListLastMatch[1].score ) {
                commit( 'SET_TOURNAMENT_WINNER', winnerParticipant )
            }
        }
    }
}