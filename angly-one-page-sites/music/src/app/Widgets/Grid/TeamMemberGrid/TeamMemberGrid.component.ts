import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-team-member-grid',
	templateUrl: './TeamMemberGrid.component.html',
	styleUrls: ['./TeamMemberGrid.component.scss']
})
export class TeamMemberGridComponent implements OnInit {

	@Input() teamMembersContent : any;
	
	constructor() { }

	ngOnInit() {
	}

}
