import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-itineraries-popup',
	templateUrl: './ItinerariesPopup.component.html',
	styleUrls: ['./ItinerariesPopup.component.scss']
})

export class ItinerariesPopupComponent implements OnInit {
	
	itinerariesContent : any [] = [
		{
			bg_image : "assets/images/beach.jpg",
			day 		: "Day 1",
			title		: "Calangute Beach",
			description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled specimen book."
		},
		{
			bg_image : "assets/images/bom-jesus.jpg",
			day 		: "Day 2",
			title		: "Basilica Of Bom Jesus",
			description : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College."
		},
		{
			bg_image : "assets/images/fort.jpg",
			day 		: "Day 3",
			title		: "Aguada Fort",
			description : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
		}
	]
	
	constructor(public  activeModal: NgbActiveModal) { }

	ngOnInit() {
	}
}
