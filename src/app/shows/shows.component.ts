import { Component, OnInit } from '@angular/core';
import { MovieService } from '../_services/movie.service';
import { SearchService } from '../_services/search.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {

  movies: any;
  genreFilters = [];
  currentPage = 1;
  backgroundImage: string;
  searchQuery = '';
  sortBy = 'popularity.desc';
  movieFilters: any;
  keywordIDs = [];

  constructor(private movieService: MovieService, private searchService: SearchService) { }

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
      this.discover('tv', this.currentPage);
      this.searchQuery = '';
    }
  }

}
