export default {
    ADD_INDEX(state, index){
        state.usedNameIndexList.push(index)
    },
    ADD_NAME(state, name) {
        state.usedNameList.push(name)
    },
    updateList(state, value) {
        console.log(value)
    }
}