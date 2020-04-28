import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticky-header',
  templateUrl: './StickyHeader.component.html',
  styleUrls: ['./StickyHeader.component.scss']
})
export class StickyheaderComponent implements OnInit {

	public menuStyle      : string ="primary-menu list-inline"
	public image          : any    = "assets/images/logo1.png";

	constructor() { }

	ngOnInit() {
	}
}
 