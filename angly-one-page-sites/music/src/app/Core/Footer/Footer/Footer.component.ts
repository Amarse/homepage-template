import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../../Service/music.service';

@Component({
	selector: 'app-footer',
	templateUrl: './Footer.component.html',
	styleUrls: ['./Footer.component.scss']
})

export class FooterComponent implements OnInit {

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
