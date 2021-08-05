class Tournament {
    participantCount //кол-во участников
    roundCount //число раундов
    roundList // список раундов
    matchList //список матчей
    winner // победитель турнира
    numberOfGames // количесво очков доя каждого матча

    constructor(options = {}) {
        for (let key of Object.keys(this)) {
            this[key] = Object.hasOwnProperty.call(options, key) ? options[key] : null
        }
    }
}

export {Tournament}