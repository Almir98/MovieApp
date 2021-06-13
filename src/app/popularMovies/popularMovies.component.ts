import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/_services/movie.service';

@Component({
  selector: 'app-popularMovies',
  templateUrl: './popularMovies.component.html',
  styleUrls: ['./popularMovies.component.scss']
})
export class PopularMoviesComponent implements OnInit {

  popularMovies: any;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getPopularMovies();
  }

  getPopularMovies(){
    this.movieService.getPopular('movie', 1).subscribe(response =>{

      this.popularMovies = response;
    }, error =>{
      console.log(error);
    });
  }
}
