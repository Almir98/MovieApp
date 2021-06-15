import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  keywords = '';

constructor(private http: HttpClient) { }

searchMovies(query, page){
  return this.http.get(`${environment.tmdbAPIUrl}/search/movie?api_key=${environment.tmbdAPIkey}&language=en-US&query=${query}&page=${page}&include_adult=false`).pipe();
}

searchTVs(query, page){
  return this.http.get(`${environment.tmdbAPIUrl}/search/tv?api_key=${environment.tmbdAPIkey}&language=en-US&query=${query}&page=${page}&include_adult=false`).pipe();
}

searchPeople(query, page){
  return this.http.get(`${environment.tmdbAPIUrl}/search/person?api_key=${environment.tmbdAPIkey}&language=en-US&query=${query}&page=${page}&include_adult=true`).pipe();
}

discover(mediaType='movie', page, sortBy, genres, keywwords){
  return this.http.get(`${environment.tmdbAPIUrl}/discover/${mediaType}?api_key=${environment.tmbdAPIkey}&language=en-US&sort_by=${sortBy}&include_adult=false&page=${page}&with_genres=${genres}&without_keywords=${this.keywords}&with_keywords=${keywwords.join('|')}`).pipe();
}
}
