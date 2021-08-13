import Vue from "vue";
import VueRouter from "vue-router";
import TournamentPage from "@/view/TournamentPage";
import test from "@/view/test";
Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            component:TournamentPage
        },
        {
            path:'/test',
            component:test
        }
    ]
})
export default router
