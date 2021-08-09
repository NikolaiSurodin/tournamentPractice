import Vue from "vue"
import Vuex from "vuex"
import ModuleTournament from "./tournament/ModuleTournament"
import ModuleName from "./participantName/ModuleName"

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        ModuleTournament,
        ModuleName
    }
})


