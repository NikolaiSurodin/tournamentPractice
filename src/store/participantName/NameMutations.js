export default {
    ADD_INDEX(state, index) {
        state.usedNameIndexList.push( index )
    },
    ADD_NAME(state, name) {
        state.usedNameList.push( name )
    },
    updateList(state, value) {
        console.log( value )
    },
    SET_NAME(state, value) {
        console.log( value )
    },
    SET_NEW_NAME(state, name) {
        state.currentName = name.removed.element
    },
    SET_PLAYER_NEW_NAME(state, { ev, match }) {
        let participant = match.participantList.find( el => el.id === ev.id )
        participant.name = ev.name
    },
    SET_FILTER(state, nameList) {
        state.filterName = nameList
    }
}