import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../Service/music.service';

@Component({
  selector: 'app-team-member',
  templateUrl: './TeamMember.component.html',
  styleUrls: ['./TeamMember.component.scss']
})

export class TeamMemberComponent implements OnInit {

	teamMemberContent : any;

	constructor(private service : MusicService) { }

	ngOnInit() {
		this.service.getTeamMemberContent().
			subscribe( res => { this.teamMemberContent = res },
						  err => console.log(err),
						  ()  => this.teamMemberContent
						)
	}

}
