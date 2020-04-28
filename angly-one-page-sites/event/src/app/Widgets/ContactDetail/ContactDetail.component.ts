import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './ContactDetail.component.html',
  styleUrls: ['./ContactDetail.component.scss']
})
export class ContactDetailComponent implements OnInit {

	public iconClass: any = "icon-layout2";

	icons = [
		{
			class:"facebook",
			icon :"fab fa-facebook-f"
		},
		{
			class:"twitter",
			icon :"fab fa-twitter"
		},
		{
			class:"linkedin",
			icon :"fab fa-linkedin-in"
		},
		{
			class:"yelp",
			icon :"fab fa-yelp" 
		}
	];
	
	constructor() { }

	ngOnInit() {
	}
}
 