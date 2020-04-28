import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-project-grid',
  templateUrl: './ProjectGrid.component.html',
  styleUrls: ['./ProjectGrid.component.scss']
})
export class ProjectgridComponent implements OnInit {

	@Input() projectGrid : any;

	constructor() { }

	ngOnInit() {
	}
}
 