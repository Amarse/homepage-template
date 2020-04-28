import { Component, OnInit,Input } from '@angular/core';

@Component({
	selector: 'app-common-title',
	templateUrl: './CommonTitle.component.html',
	styleUrls: ['./CommonTitle.component.scss']
})

export class CommonTitleComponent implements OnInit {
	
	@Input() Title    : string;
	@Input() Subtitle : string;
 
	constructor() { }

	ngOnInit() {
 	}
}