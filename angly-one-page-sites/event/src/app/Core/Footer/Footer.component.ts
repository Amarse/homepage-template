import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './Footer.component.html',
  styleUrls: ['./Footer.component.scss']
})
export class FooterComponent implements OnInit {

	public menuStyleClass: string = "list-inline";
	public image         : any    = "assets/images/logo1.png";

	constructor() { }

	ngOnInit() {
	}

}
