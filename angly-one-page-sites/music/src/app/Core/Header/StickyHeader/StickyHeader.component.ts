import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../../Service/music.service';

@Component({
	selector: 'app-sticky-header',
	templateUrl: './StickyHeader.component.html',
	styleUrls: ['./StickyHeader.component.scss']
})

export class StickyHeaderComponent implements OnInit {

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
