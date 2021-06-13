import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

constructor(private http: HttpClient) { }

getPopularMovies(mediaType, page){
  return this.http.get(`${environment.tmdbAPIUrl}/${mediaType}/popular?api_key=${environment.tmbdAPIkey}&language=en-US&page=${page}`).pipe();
}





}
