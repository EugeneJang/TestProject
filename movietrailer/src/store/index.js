import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        movies: {
            dunkirk: {
                id: 'dunkirk',
                title: 'Dunkirk',
                subtitle: 'Dunkirk',
                description: `Miraculous evacuation of Allied soldiers from Belgium, Britain, Canada, and France, who were cut off and surrounded by the German army from the beaches and harbor of Dunkirk, France, during the Battle of France in World War II.`,
                largeImgSrc: `url('https://thefederalist.com/wp-content/uploads/2017/07/Screen-Shot-2017-07-20-at-2.48.26-PM-998x661.png')`,
                smallImgSrc: 'https://thefederalist.com/wp-content/uploads/2017/07/Screen-Shot-2017-07-20-at-2.48.26-PM-998x661.png',
                releaseDate: 'July 21 2017',
                duration: '1hr 46min',
                genre: 'Action, Drama, History',
                trailerPath: 'https://www.youtube.com/embed/F-eMt3SrfFU',
                favorite: false
            },
            interstellar: {
                id: 'interstellar',
                title: 'Interstellar',
                subtitle: 'Interstellar',
                description: `Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.`,
                largeImgSrc: `url('https://i0.wp.com/misfits.kr/wp-content/uploads/2014/11/10350448_666941050090425_8678700534832331669_n-1.jpg?resize=759%2C315')`,
                smallImgSrc: 'https://i0.wp.com/misfits.kr/wp-content/uploads/2014/11/10350448_666941050090425_8678700534832331669_n-1.jpg?resize=759%2C315',
                releaseDate: 'November 7 2014',
                duration: '2hr 49min',
                genre: 'Adventure, Drama',
                trailerPath: 'https://www.youtube.com/embed/zSWdZVtXT7E',
                favorite: false
            },
            'the-dark-knight-rises': {
                id: 'the-dark-knight-rises',
                title: 'The Dark Knight Rises',
                subtitle: 'TDKR',
                description: `Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham's finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.`,
                largeImgSrc: `url('https://www.fortressofsolitude.co.za/wp-content/uploads/2018/07/THE-DARK-KNIGHT-TRILOGY.jpg?width=1200&enable=upscale')`,
                smallImgSrc: 'https://www.fortressofsolitude.co.za/wp-content/uploads/2018/07/THE-DARK-KNIGHT-TRILOGY.jpg?width=1200&enable=upscale',
                releaseDate: 'July 20 2012',
                duration: '2hr 44min',
                genre: 'Action, Thriller',
                trailerPath: 'https://www.youtube.com/embed/g8evyE9TuYk',
                favorite: false
            },
            inception: {
                id: 'inception',
                title: 'Inception',
                subtitle: 'Inception',
                description: `Cobb, a skilled thief is offered a chance to regain his old life as payment for a task considered to be impossible: inception, the implantation of another person's idea into a target's subconscious.`,
                largeImgSrc: `url('https://static1.srcdn.com/wordpress/wp-content/uploads/2020/04/Inception-1.jpg')`,
                smallImgSrc: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/04/Inception-1.jpg',
                releaseDate: 'July 10 2010',
                duration: '2hr 28min',
                genre: 'Action, Adventure, Sci-Fi',
                trailerPath: 'https://www.youtube.com/embed/8hP9D6kZseM',
                favorite: false
            },
            'the-prestige': {
                id: 'the-prestige',
                title: 'The Prestige',
                subtitle: 'Prestige',
                description: `A mysterious story of two magicians whose intense rivalry leads them on a life-long battle for supremacy - to create the ultimate illusion whilst sacrificing everything they have to outwit the other.`,
                largeImgSrc: `url('https://i.ytimg.com/vi/K3A5-kseHi8/maxresdefault.jpg')`,
                smallImgSrc: 'https://i.ytimg.com/vi/K3A5-kseHi8/maxresdefault.jpg',
                releaseDate: 'October 20 2006',
                duration: '2hr 10min',
                genre: 'Drama, Mystery, Sci-Fi',
                trailerPath: 'https://www.youtube.com/embed/ijXruSzfGEc',
                favorite: false
            }
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})