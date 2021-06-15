import { Component, Input, OnInit } from '@angular/core';
import { PersonService } from '../_services/person.service';

@Component({
  selector: 'app-personCredits',
  templateUrl: './personCredits.component.html',
  styleUrls: ['./personCredits.component.scss']
})
export class PersonCreditsComponent implements OnInit {

  credits: any;
  @Input() personId: number;
  showDirecting = false;
  showProduction = false;
  showCrew = false;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPersonCredits(this.personId);
  }

  getPersonCredits(personId)
  {
    this.personService.getPersonsCombinedCredits(personId).subscribe(
      (credits) => (
        this.credits = credits,
        this.credits.crew.forEach((crew) => {
          if (crew.department == 'Directing') this.showDirecting = true;
          if (crew.department == 'Production') this.showProduction = true;
          if (crew.department == 'Crew') this.showCrew = true;
        })
      )
    );
  }




}
