import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../_services/movie.service';

@Component({
  selector: 'app-movieDetails',
  templateUrl: './movieDetails.component.html',
  styleUrls: ['./movieDetails.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: any;
  movieID: number;
  mediaType: string;
  reviews: any;
  images: any;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.GetMovieOrTvShow();
  }

  GetMovieOrTvShow()
  {
    this.movieID = +this.route.snapshot.paramMap.get('id');
    this.mediaType = this.route.snapshot.params['type'];

    if(this.mediaType == 'movie'){
      this.movieService.getMovieDetails(this.movieID).subscribe(response =>{

        this.movie = response;
        console.log(this.movie);
      }, error =>{
        console.log(error);
      })
    }
    else if(this.mediaType == 'tv'){
      this.movieService.getTvShowDetails(this.movieID).subscribe(response => {

        this.movie = response;
      }, error =>{
        console.log(error);
      })
    }
  }

  getClassNameByRate(vote) {
    if (vote >= 8) {
      return 'green';
    } else if (vote >= 5) {
      return 'orange';
    } else {
      return 'red';
    }
  }

  getReviews(){
    this.movieService.getReviews('movie', this.movieID).subscribe(response=>{
      
      this.reviews = response;
    }, error =>{
      console.log(error);
    });
  }

  getImages(){
    this.movieService.getImages('movie', this.movieID).subscribe(response=>{

      this.images = response;
    }, error =>{
      console.log(error);
    });
  }


}
