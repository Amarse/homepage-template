import { Component, OnInit } from '@angular/core';
import { AnglyService } from '../../../Services/Angly.service';


@Component({
	selector: 'app-footer',
	templateUrl: './Footer.component.html',
	styleUrls: ['./Footer.component.scss']
})
export class FooterComponent implements OnInit {

	public ShowQuoteForm : any;

	footerIcon = [
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

	ourService = [
		{
			service:"Flight Reservations"
		},
		{
			service:"Accommodation"
		},
		{
			service:"Airline Layalty"
		},
		{
			service:"Accounting Services"
		},
		{
			service:"Travel Insurance"
		},
		{
			service:"Emergency services"
		}
	]
  constructor( private anglyService : AnglyService) { }

	ngOnInit() {
		this.getFooterQuoteForm();
  }
  
  	// getFooterQuoteForm used to get data from service and assign to ShowQuoteForm
	getFooterQuoteForm(){
		this.anglyService.getBlogData()
			.subscribe( response => {this.ShowQuoteForm = response },
						err      => console.log(err),
						()       => this.ShowQuoteForm
			)
  	}
}
