import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

constructor(private http: HttpClient) { }

getTrending(mediaType: string, timeWindow: string)
{
  return this.http.get(`${environment.tmdbAPIUrl}/trending/${mediaType}/${timeWindow}?api_key=${environment.tmbdAPIkey}`).pipe();
}

}
