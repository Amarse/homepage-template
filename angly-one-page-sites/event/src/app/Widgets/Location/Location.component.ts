import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './Location.component.html',
  styleUrls: ['./Location.component.scss']
})
export class LocationComponent implements OnInit {

   lat: number = 51.678418;
	lng: number = 7.809007;
	
	constructor() { }

	ngOnInit() {
	}
}
 