import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../_services/movie.service';

@Component({
  selector: 'app-popularShows',
  templateUrl: './popularShows.component.html',
  styleUrls: ['./popularShows.component.scss']
})
export class PopularShowsComponent implements OnInit {

  popularShows:any;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getPopularShows();
  }

  getPopularShows(){
    this.movieService.getPopular('tv',1).subscribe(response =>{
      this.popularShows = response;
    }, error =>{
      console.log(error);
    })
  }
}
