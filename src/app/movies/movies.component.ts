import { Component, OnInit } from '@angular/core';
import { MovieService } from '../_services/movie.service';
import { SearchService } from '../_services/search.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: any;
  currentPage = 1;
  backgroundImage: string;
  searchQuery = '';
  genreFilters = [];
  sortBy = 'popularity.desc';
  movieFilters: any;
  keywordIDs = [];

  constructor(private movieService: MovieService, private searchService: SearchService) { }

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

  search(search){
    this.currentPage = 1;
    this.searchQuery = search;
    console.log(search);
    this.searchMovies(search, this.currentPage);
  }

  discover(mediaType, page) {

    this.searchService
      .discover(mediaType, page, this.sortBy, this.genreFilters, this.keywordIDs)
      .subscribe((data) => this.movies = data);
  }
  
  searchMovies(query, page) {
    if (query != '') {
      this.searchQuery = query;
      this.searchService.searchMovies(query, page).subscribe((data) => {
        this.movies = data;
      });
    } else {
      this.currentPage = 1;
      this.discover('movie', this.currentPage);
      this.searchQuery = '';
    }
  }
}
