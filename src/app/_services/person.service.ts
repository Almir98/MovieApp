import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

constructor(private http: HttpClient) { }

getPerson(personId){
  return this.http.get(`${environment.tmdbAPIUrl}/person/${personId}?api_key=${environment.tmbdAPIkey}&language=en-US`).pipe();
}

getPersonImages(personId){
  return this.http.get(`${environment.tmdbAPIUrl}/person/${personId}/images?api_key=${environment.tmbdAPIkey}&language=en-US&include_adult=false`).pipe();
}

getPopular(page){
  return this.http.get(`${environment.tmdbAPIUrl}/person/popular?api_key=${environment.tmbdAPIkey}&language=en-US&include_adult=false&page=${page}`).pipe();
}

}
