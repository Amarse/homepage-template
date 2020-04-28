import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../Service/music.service';

@Component({
	selector: 'app-banner',
	templateUrl: './Banner.component.html',
	styleUrls: ['./Banner.component.scss']
})

export class BannerComponent implements OnInit {

	bannerContent	 : any;
	bannerBgImage     : any = "assets/images/h2sldr2.jpg";
	
	constructor(private service : MusicService) { }

	ngOnInit() {
		this.service.getBannerContent().
			subscribe( res => { this.bannerContent = res},
						  err => console.log(err),
						  ()  => this.bannerContent
						)
	}

	//changeBannerBg method is used to change the background image of banner section.
	changeBannerBg(bgImage, index){
		var data = document.getElementsByClassName('banner-slide');
		// for(var i =0 ; i < data.length ; i++){
		// 	if((data[i].classList.contains('brdr-primary'))){
		// 		data[i].classList.remove('brdr-primary');
		// 	}
		// }
		this.bannerBgImage = bgImage;
		// document.getElementById("banner_"+index).className += " brdr-primary";
		
	}
}
