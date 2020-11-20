import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Intro = () => import(/* webpackChunkName: "intro" */ '../views/Intro.vue');
const Movie = () => import(/* webpackChunkName: "about" */ '../views/Movie.vue');
const MovieTrailer = () => import(/* webpackChunkName: "trailer" */ '../components/MovieTrailer.vue');

const routes = [
    {
        path : '/',
        name : 'Intro',
        component : Intro
    },
    {
        path : '/:id',
        name : 'Movie',
        component : Movie
    },
    {
        path : '/:id/trailer',
        name : 'Trailer',
        component : MovieTrailer
    }
]

const router = new VueRouter({
    mode : 'history',
    base : process.env.BASE_URL,
    routes
});

export default router;