export default {
    createName({commit, getters}) {
        return new Promise((resolve, reject) => {
            let usedNameIndex = getters.getUsedNameIndexList
            let nameList = getters.getNameList
            let randomIndex = Math.floor(Math.random() * nameList.length)
            let name = nameList[randomIndex]
            let index = nameList.indexOf(name)

            if (nameList.length !== usedNameIndex.length) {

                while (usedNameIndex.includes(index)) {
                    if (usedNameIndex.length || usedNameIndex.includes(index)) {
                        randomIndex = Math.floor(Math.random() * nameList.length)
                        name = nameList[randomIndex]
                        index = nameList.indexOf(name)

                    } else {
                        break
                    }
                }
                commit('ADD_NAME', name)
                commit('ADD_INDEX', index)
                resolve(name)
            } else {
                name = 'NO NAME'
                reject(name)
            }

        })

    }
}