import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-social-icon',
  templateUrl: './SocialIcon.component.html',
  styleUrls: ['./SocialIcon.component.scss']
})
export class SocialiconComponent implements OnInit {

	@Input() socialIcon : any ;
	@Input() addClass   : any ;
	constructor() { }

	ngOnInit() {
	}
}
  