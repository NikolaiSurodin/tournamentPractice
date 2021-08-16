export default {
    ADD_INDEX(state, index) {
        state.usedNameIndexList.push( index )
    },
    ADD_NAME(state, name) {
        state.usedNameList.push( name )
    },
    SET_NEW_NAME(state, name) {
        state.currentName = name.removed.element
    },
    SET_PLAYER_NEW_NAME(state, { ev, match }) {
        let participant = match.participantList.find( el => el.id === ev.id )
        if ( participant.name === 'TBA' )
            participant.name = ev.name
    },
    SET_FILTER(state, nameList) {
        state.usedNameList = nameList
    },

    SET_RANDOM_NAME_INDEX(state, idx) {
        state.indexListForRandomList.push( idx )
    },
    SET_RANDOM_NAME(state, name) {
        state.nameListForRandom.push( name )

    },
    clearRandomNameList(state) {
        state.usedNameList = []
    }
}