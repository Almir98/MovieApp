import { Component, OnInit } from '@angular/core';
import { MovieService } from '../_services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: any;
  currentPage = 1;
  backgroundImage: string;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getAllMovies();
  }

  getAllMovies()
  {
    this.movieService.getPopular('movie', this.currentPage).subscribe(response =>{

      this.movies = response;
    }, error =>{
      console.log(error);
    });
  }

  onMouseOver(movie) {
    this.backgroundImage = movie.backdrop_path;
  }

  scrollToTop()
  {
    const el: any | null = document.getElementById('main');
    window.scrollTo({
      top: el.offsetTop - 60,
      behavior: 'smooth',
    });
  }

  LoadNewMovies()
  {
    this.currentPage++;
    this.movieService.getPopular('movie', this.currentPage).subscribe(response =>{

      this.movies = response;
      this.scrollToTop();
    }, error =>{
      console.log(error);
    });
  }

  LoadPrevMovies()
  {
    this.currentPage--;
    console.log(this.currentPage);
    this.movieService.getPopular('movie', this.currentPage).subscribe(response =>{

      this.movies = response;
      this.scrollToTop();
    }, error =>{
      console.log(error);
    });
  }
}
