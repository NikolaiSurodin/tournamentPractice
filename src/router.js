import Vue from "vue";
import VueRouter from "vue-router"
import TournamentPage from "@/view/TournamentPage";

Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            component:TournamentPage
        }
    ]
})
export default router
