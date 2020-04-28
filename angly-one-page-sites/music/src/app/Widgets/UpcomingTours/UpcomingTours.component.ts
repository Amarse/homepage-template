import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../Service/music.service';

@Component({
  selector: 'app-upcoming-tours',
  templateUrl: './UpcomingTours.component.html',
  styleUrls: ['./UpcomingTours.component.scss']
})
export class UpcomingToursComponent implements OnInit {

	UpcomingToursContent : any;
	tourBgImage 		   : any = "assets/images/h2sldr1.jpg";

	constructor(private service : MusicService) { }

	ngOnInit() {
		this.service.getToursContent().
			subscribe( res => { this.UpcomingToursContent = res},
						  err => console.log(err),
						  ()  => this.UpcomingToursContent
						)
	}

	//changeTourBg method is used to change the background image of tour section.
	changeTourBg(bgImage, index){
		var data = document.getElementsByClassName('tour-item');
		for(var i =0 ; i < data.length ; i++){
			if((data[i].classList.contains('brdr-primary'))){
				data[i].classList.remove('brdr-primary');
			}
		}
		this.tourBgImage = bgImage;
		document.getElementById("tour_"+index).className += " brdr-primary";
		
	}
}
