import { Component, OnInit } from '@angular/core';
import { PersonService } from '../_services/person.service';
import { SearchService } from '../_services/search.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  currentPage = 1;
  people: any;
  person:any;
  backgroundImage: string;
  searchQuery = '';

  constructor(private peopleService: PersonService, private searchService: SearchService) { }

  ngOnInit() {
    this.getAllCasts();
  }
  onHover(person){
    if(!person.adult)
    this.backgroundImage = person.known_for[0].backdrop_path;
    
    this.person = person;
  }

  getAllCasts()
  {
    this.peopleService.getPopular(this.currentPage).subscribe(response =>{

      this.people = response;
    }, error =>{
      console.log(error);
    });
  }
  
  scrollToTop()
  {
    const el: any | null = document.getElementById('main');
    window.scrollTo({
      top: el.offsetTop - 60,
      behavior: 'smooth',
    });
  }

  LoadActors()
  {
    this.currentPage++;
    this.peopleService.getPopular(this.currentPage).subscribe(response =>{

      this.people = response;
      this.scrollToTop();
    }, error =>{
      console.log(error);
    });
  }

  LoadPrevActors()
  {
    this.currentPage--;
    this.peopleService.getPopular(this.currentPage).subscribe(response =>{

      this.people = response;
      this.scrollToTop();
    }, error =>{
      console.log(error);
    });
  }

  getPopular(page) {
    if(this.searchQuery == ''){
      this.peopleService.getPopular(page).subscribe((responseData) => {
        this.people = responseData;
      });
    }
    else{
      this.getPeopleBySearchQuery(this.searchQuery, page);
    }
  }

  getPeopleBySearchQuery(searchQuery, page) {
    this.searchQuery = searchQuery;
    this.currentPage = 1;

    if(searchQuery == ''){
      this.getPopular(this.currentPage);
    }
    else{
      this.searchService.searchPeople(searchQuery, page).subscribe((responseData) => this.people = responseData);
    }
  }
}
