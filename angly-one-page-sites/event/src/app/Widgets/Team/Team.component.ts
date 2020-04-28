import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/Data.service';

@Component({
  selector: 'app-team',
  templateUrl: './Team.component.html',
  styleUrls: ['./Team.component.scss']
})
export class TeamComponent implements OnInit {
  	
  	public teamData    : any;

	constructor(public dataService : DataService) { }

	ngOnInit() {
		this.getTeamSlider();
	}

	// get Team Slider data from data service 
	getTeamSlider() {
      this.dataService.getTeamSliderData()
         .subscribe( response  => {this.teamData = response },
                     err       => console.log(err),
                     ()        => this.teamData
        ) 
   }
}
