export default {
    createName({ commit, getters }) {
        return new Promise( (resolve, reject) => {
            let usedNameIndexList = getters.getUsedNameIndexList
            let nameList = getters.getNameList
            let randomIndex = Math.floor( Math.random() * nameList.length )
            let name = nameList[randomIndex]
            let index = nameList.indexOf( name )

            if ( nameList.length !== usedNameIndexList.length ) {
                if ( getters.getTournament.participantCount <= nameList.length )
                    while (usedNameIndexList.includes( index )) {
                        if ( usedNameIndexList.includes( index ) ) {
                            randomIndex = Math.floor( Math.random() * nameList.length )
                            name = nameList[randomIndex]
                            index = nameList.indexOf( name )
                        } else {
                            break
                        }
                    }
                commit( 'ADD_NAME', name )
                commit( 'ADD_INDEX', index )
                resolve( name )
            } else {
                name = 'NO NAME'
                reject( name )
            }
        } )
    },
    randomName({ commit, getters }) {
        return new Promise( (resolve, reject) => {
            let indexList = getters.getIndexListForRandom
            let usedNameList = getters.getUsedNameList
            let randomIndex = Math.floor( Math.random() * usedNameList.length )
            let name = usedNameList[randomIndex]
            let index = usedNameList.indexOf( name )

            if ( usedNameList.length !== indexList.length ) {
                if ( getters.getTournament.participantCount <= usedNameList.length )
                    while (indexList.includes( index )) {
                        if ( indexList.includes( index ) ) {
                            randomIndex = Math.floor( Math.random() * usedNameList.length )
                            name = usedNameList[randomIndex]
                            index = usedNameList.indexOf( name )
                        } else {
                            break
                        }
                    }
                commit( 'SET_RANDOM_NAME', name )
                commit( 'SET_RANDOM_NAME_INDEX', index )
                resolve( name )
            } else {
                reject(  )
            }
        } )

    },
    checkName({ commit }, name) {
        commit( 'SET_NEW_NAME', name )
    },
    createNameForPlayer({ commit, getters }, ev) {
        let match = getters.getMatchList.find( match => match.id === ev.matchId )
        commit( 'SET_PLAYER_NEW_NAME', { ev, match } )
    },
    filterNameList({ commit, getters }, name) {
        commit( 'SET_FILTER', getters.getUsedNameList.filter( el => el !== name ) )
    },
    createRandomName({ commit, dispatch, getters }) {
        return new Promise( (resolve,reject) => {
            let list = getters.getMatchList
            for (let match of list) {
                match.random = true
                if ( match.numberRound === 1 ) {
                    match.participantList.forEach( el => {
                        dispatch( 'randomName' )
                            .then( (name) => {
                                el.name = name
                                resolve()
                            } )
                            .catch(err => reject(err))

                    } )

                }
            }
            commit('clearRandomNameList')
        } )


    }
}