import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../Service/music.service';

@Component({
  selector: 'app-track',
  templateUrl: './Track.component.html',
  styleUrls: ['./Track.component.scss']
})
export class TrackComponent implements OnInit {

	trackListContent : any;
	albumBgImage	  : any;
	musicList 		  : any;

	constructor(public service : MusicService) { 
	}

	ngOnInit() {
		this.service.getTrackListContent().
			subscribe(res => {this.trackListContent = res},
						 err => console.log(err),
						 ()  => this.getAlbumType('dream')
				)
	}

	//getAlbumType method is used to get the music list by the album type.
	getAlbumType(type) {
		if(this.trackListContent && this.trackListContent.length>0)
		for(var data of this.trackListContent){
			if(data.type == type) {
				this.albumBgImage = data.image;
				this.musicList = data.musicList;
			}
		}
	}

	//playList method is used to scroll into play list section.
	playList(){
		document.getElementById('play_list').scrollIntoView({
            behavior: 'smooth'
      });
	}
}

