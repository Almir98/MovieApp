import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

constructor(private http: HttpClient) { }

getPopular(mediaType, page){
  return this.http.get(`${environment.tmdbAPIUrl}/${mediaType}/popular?api_key=${environment.tmbdAPIkey}&language=en-US&page=${page}`).pipe();
}

getMovieDetails(movieId)
{
  return this.http.get(`${environment.tmdbAPIUrl}/movie/${movieId}?api_key=${environment.tmbdAPIkey}&adult=false&language=en-US`).pipe();
}

getTvShowDetails(tvId)
{
  return this.http.get(`${environment.tmdbAPIUrl}/tv/${tvId}?api_key=${environment.tmbdAPIkey}&language=en-US`).pipe();
}

getReviews(mediaType, id){
  return this.http.get(`${environment.tmdbAPIUrl}/${mediaType}/${id}/reviews?api_key=${environment.tmbdAPIkey}&language=en-US`).pipe();
}

getImages(mediaType, id){
  return this.http.get(`${environment.tmdbAPIUrl}/${mediaType}/${id}/images?api_key=${environment.tmbdAPIkey}&language=en-US`).pipe();
}

getCast(movieId, mediaType){
  return this.http.get(`${environment.tmdbAPIUrl}/${mediaType}/${movieId}/credits?api_key=${environment.tmbdAPIkey}&adult=false&language=en-US`).pipe();
}


}
