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
                    if (  usedNameIndexList.includes( index ) ) {
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

    }
}