import { Component, OnInit ,Input} from '@angular/core';
import { AnglyService } from '../../../Services/Angly.service';

@Component({
	selector: 'app-travel-itineraries',
	templateUrl: './TravelItineraries.component.html',
	styleUrls: ['./TravelItineraries.component.scss']
})
export class TravelItinerariesComponent implements OnInit {
	
	@Input() travelItineraries : any;

	constructor(public service : AnglyService) { }

	ngOnInit() {
	}

	//OpenItinerariesPopup method is used to open the travel itineraries pop up.
	OpenItinerariesPopup(){
		this.service.openTravelItineriariesDialog();
	}
}
