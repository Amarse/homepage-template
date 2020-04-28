import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-social-links',
	templateUrl: './SocialLinks.component.html',
	styleUrls: ['./SocialLinks.component.scss']
})
export class SocialLinksComponent implements OnInit {

	@Input() socialIconsData : any;
	
	constructor() { }

	ngOnInit() {
	}

}
