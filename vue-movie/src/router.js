import VueRouter from "vue-router";
import Home from "./components/Movie/Home";
import MovieDetail from "./components/MovieDetails/MovieDetail";
import Actors from "./components/Actor/Actors";
import ActorDetail from "./components/ActorDetails/ActorDetail";

let routes = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/movie/:id",
            name: "movie",
            component: MovieDetail,
        },
        {
            path: "/actors",
            name: "actors",
            component: Actors,
        },
        {
            path: "/actors/:id",
            name: "actor-details",
            component: ActorDetail,
        },
    ],
});

export default routes;
