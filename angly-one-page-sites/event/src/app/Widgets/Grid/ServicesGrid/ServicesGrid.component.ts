import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-services-grid',
  templateUrl: './ServicesGrid.component.html',
  styleUrls: ['./ServicesGrid.component.scss']
})

export class ServicesGridComponent implements OnInit {

	@Input() ServicesGrid : any;

	constructor() { }

	ngOnInit() {
	}
}
