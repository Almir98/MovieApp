import { Component, OnInit } from '@angular/core';
import { MovieService } from '../_services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: any;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getAllMovies();
  }

  getAllMovies()
  {
    this.movieService.getPopular('movie', 1).subscribe(response =>{

      this.movies = response;
    }, error =>{
      console.log(error);
    });
  }

}
