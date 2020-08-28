const API_KEY = "664e96613cdbcf6539d40b0be72230b3";

export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, 
    fetchTopRated: `/movietop_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&withgeres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&withgeres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&withgeres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&withgeres=10749`,
    fetchMystery: `/discover/movie?api_key=${API_KEY}&withgeres=9648`,
    fetchSciFi: `/discover/movie?api_key=${API_KEY}&withgeres=878`,
    fetchWestern: `/discover/movie?api_key=${API_KEY}&withgeres=37`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&withgeres=16`,
    fetchTV: `/discover/movie?api_key=${API_KEY}&withgeres=10770`,
};
