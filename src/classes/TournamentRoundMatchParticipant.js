import {store} from "@/store"

class TournamentRoundMatchParticipant {
    id
    name
    score

    constructor(name) {
        this.id = Math.random().toString( 10 ).slice( -4 )
        this.score = 0
        this.name = this.getName( name )
    }

    getName(name) {
        if ( name ) {
            return this.name = name
        } else {
            if ( store.getters.getTournament.random === true ) {
                store.dispatch( 'createName' )
                    .then( name => this.name = name )
                    .catch( (name) => {

                        this.name = name

                    } )
            }

        }
    }
}

export {TournamentRoundMatchParticipant}