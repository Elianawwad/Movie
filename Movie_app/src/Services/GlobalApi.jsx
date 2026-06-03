import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const Api_Key = "67aa357e0350921935c9aa1823a7a634";

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

//https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+Api_Key);
const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default { getTrendingVideos, getMovieByGenreId };