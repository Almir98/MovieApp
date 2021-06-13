import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../_services/trending.service';

@Component({
  selector: 'app-trendings',
  templateUrl: './trendings.component.html',
  styleUrls: ['./trendings.component.scss']
})
export class TrendingsComponent implements OnInit {

  trendingToday: any;
  clickedtrendingToday: boolean = false;

  trendingOfWeek: any;
  clickedtrendingOfWeek: boolean = false;

  constructor(private trendingService: TrendingService) { }

  ngOnInit() {
    this.getTrendingsToday();
  }

  getTrendingsToday()
  {
    this.clickedtrendingToday = true;
    this.clickedtrendingOfWeek = false;

    return this.trendingService.getTrending('movie','day').subscribe(response =>{

      this.trendingToday = response;
      console.log(this.trendingToday);
    }, error =>{
      console.log(error);
    })
  }

  getTrendingsOfWeek()
  {
    this.clickedtrendingToday = false;
    this.clickedtrendingOfWeek = true;
    
    return this.trendingService.getTrending('movie','week').subscribe(response =>{

      this.trendingToday = response;
    }, error =>{
      console.log(error);
    })
  }


}
