export default {
    ADD_INDEX(state, index) {
        state.usedNameIndexList.push( index )
    },
    ADD_NAME(state, name) {
        state.usedNameList.push( name )
    },
    SET_PLAYER_NEW_NAME(state, { ev, match }) {
        let participant = match.participantList.find( el => el.id === ev.id )
        if ( participant.name === 'TBA' )
            participant.name = ev.name
    },
    SET_FILTERED_NAME_LIST(state, nameList) {
        state.usedNameList = nameList
    },
    SET_RANDOM_NAME_INDEX(state, idx) {
        state.indexListForRandomList.push( idx )
    },
    SET_RANDOM_NAME(state, name) {
        state.nameListForRandom.push( name )
    },
    CLEAR_NAME_LIST(state) {
        state.usedNameList = []
    }
}