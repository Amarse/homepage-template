import { Component, OnInit ,Input } from '@angular/core';

@Component({
	selector: 'app-logo',
	templateUrl: './Logo.component.html',
	styleUrls: ['./Logo.component.scss']
})

export class LogoComponent implements OnInit {

	@Input() logoClass   : any;
	@Input() logo     	: any;

	constructor() { }

	ngOnInit() {
	}
}
