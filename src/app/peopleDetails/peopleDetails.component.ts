import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../_services/person.service';

@Component({
  selector: 'app-peopleDetails',
  templateUrl: './peopleDetails.component.html',
  styleUrls: ['./peopleDetails.component.scss']
})
export class PeopleDetailsComponent implements OnInit {

  person:any;
  personId: number;
  images:any;

  constructor(private personService: PersonService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getPersonDetails();
  }

  getPersonImages(personId:number)
  {
    this.personService.getPersonImages(personId).subscribe(response=>{

      this.images = response;
    }, error =>{
      console.log(error);
    });
  }

  getPersonDetails()
  {
    this.personId = +this.route.snapshot.paramMap.get('id');
    this.getPersonImages(this.personId);
    
    this.personService.getPerson(this.personId).subscribe(response =>{

      this.person = response;
    }, error =>{
      console.log(error);
    });
  }



}
