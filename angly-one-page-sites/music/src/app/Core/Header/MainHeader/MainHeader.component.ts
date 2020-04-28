import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../../Service/music.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './MainHeader.component.html',
  styleUrls: ['./MainHeader.component.scss']
})
export class MainHeaderComponent implements OnInit {

	socialIconsContent : any;
	
	constructor(private service : MusicService) { }

	ngOnInit() {
		this.service.getSocialIconsContent().
			subscribe( res => {this.socialIconsContent = res},
						  err => console.log(err),
						  ()  => this.socialIconsContent
						)
	}

}
