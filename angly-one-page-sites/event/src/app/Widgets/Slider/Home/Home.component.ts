import { Component, OnInit } from '@angular/core';
import { DataService } from  "../../../Services/Data.service";

@Component({
	selector: 'app-home',
	templateUrl: './Home.component.html',
	styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {

	homeslide 			: any;
	days 					: any;
	hours 				: any;
	minutes		 		: any;
	seconds  			: any;
	difference			: any;
	countDownDate     : any;
	currentTimeStamp  : any = new Date().getTime();

   slideConfig = {"slidesToShow": 1, "slidesToScroll": 1 , "infinite": true,"dots":false,"fade":true,"autoplay":true,"autoplaySpeed": 3000,"arrows":false,
		"responsive": [
			{
			   "breakpoint":1200,
			   "settings": {
			      "arrows":false,
			   }
			},
			{
			   "breakpoint":768,
			   "settings": {
			      "dots":false,
			      "arrows":false,
			   }
			}
		]
	};

	constructor( private dataService : DataService) { }

	ngOnInit() {
		this.gethomeslider();
		this.countDownDate = this.currentTimeStamp+(86400*10*1000);
		setInterval(() => {	
			this.counterDown();
		},0)
	}

	// get home slider data from data service 
	gethomeslider(){
		this.dataService.getHomeSlider()
			.subscribe( response =>{ this.homeslide = response },
							err      => console.log(err),
							()       => this.homeslide
			)
	}

	//counterDown method is used to Time calculations for days, hours, minutes and seconds.
	counterDown() {
		this.currentTimeStamp = new Date().getTime();
		this.difference = this.countDownDate - this.currentTimeStamp;
		this.days = Math.floor(this.difference / (1000 * 60 * 60 * 24));
		this.hours = Math.floor((this.difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		this.minutes = Math.floor((this.difference % (1000 * 60 * 60)) / (1000 * 60));
		this.seconds = Math.floor((this.difference % (1000 * 60)) / 1000);
	}
}
