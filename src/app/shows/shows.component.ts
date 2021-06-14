import { Component, OnInit } from '@angular/core';
import { MovieService } from '../_services/movie.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {

  movies: any;
  currentPage = 1;
  backgroundImage: string;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getAllMovies();
  }

  getAllMovies()
  {
    this.movieService.getPopular('tv', this.currentPage).subscribe(response =>{

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

  LoadNewShows()
  {
    this.currentPage++;
    this.movieService.getPopular('tv', this.currentPage).subscribe(response =>{

      this.movies = response;
      this.scrollToTop();
    }, error =>{
      console.log(error);
    });
  }

  LoadPrevShows()
  {
    this.currentPage--;
    console.log(this.currentPage);
    this.movieService.getPopular('tv', this.currentPage).subscribe(response =>{

      this.movies = response;
      this.scrollToTop();
    }, error =>{
      console.log(error);
    });
  }
}
