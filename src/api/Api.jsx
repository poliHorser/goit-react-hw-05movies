import axios from "axios";

const API_KEY = 'c59d661c06ce192682a3f08ecc590a6a'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGFjNzI1MTA4Mjc2ZDkyM2RlMjQzOTE4NzUwNjJjNSIsInN1YiI6IjY1YjUwMjhhNGYzM2FkMDE3YTBiYTM1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DVikyztACIvDZrPSWL56RBOBtNnjH3jDZKwNSqkZN54',
  },
};


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

const BASE_URL = 'https://image.tmdb.org/t/p/w300';

const fetchTrending = async () => {
  
  return instance.get(`trending/movie/week?api_key=${API_KEY}`,
  options);

}


const fetchSearch = async (query) => {
  return instance.get(`search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`,
  options)
  
 
}


const fetchDetails = id => {
  return instance.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`,
  options);
}


const fetchActor = async (movieId) => {
    return (
        instance.get(`movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
        options)
    )
}

const fetchReviews = async (movieId) => {
  return instance.get(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`,
  options)
   
}

export {BASE_URL, fetchTrending, fetchSearch, fetchDetails, fetchActor, fetchReviews}











