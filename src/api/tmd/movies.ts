//https://api.themoviedb.org/3/movie/550?api_key=a6cb6652c4e4e290e6da649d1d4f7c50
//now_playing?api_key=a6cb6652c4e4e290e6da649d1d4f7c50
import axios from "axios";

export const movies = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
