import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../_services/movie.service';

@Component({
  selector: 'app-casts',
  templateUrl: './casts.component.html',
  styleUrls: ['./casts.component.scss']
})
export class CastsComponent implements OnInit {

  casts: any;
  @Input() movieId: number;
  @Input() mediaType: string;

  constructor(private movieAndTVService: MovieService) { }

  ngOnInit() {
    this.getCast(this.movieId, this.mediaType);
  }

  getCast(movieID: number, mediaType: string){
    this.movieAndTVService.getCast(movieID, mediaType).subscribe(casts => this.casts = casts);
  }

}
