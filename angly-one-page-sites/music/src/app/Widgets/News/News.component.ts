import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../Service/music.service';

@Component({
	selector: 'app-news',
	templateUrl: './News.component.html',
	styleUrls: ['./News.component.scss']
})
export class NewsComponent implements OnInit {

	newsContent : any;

	constructor(private service : MusicService) { }

	ngOnInit() {
		this.service.getNewsContent().
			subscribe( res => { this.newsContent = res},
						  err => console.log(err),
						  ()  => this.newsContent
						)
	}

}
