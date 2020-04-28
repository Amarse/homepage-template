import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../Service/music.service';

@Component({
	selector: 'app-gallery',
	templateUrl: './Gallery.component.html',
	styleUrls: ['./Gallery.component.scss']
})

export class GalleryComponent implements OnInit {

	galleryContent : any;
	
	galleryConfig  = {
		"infinite": true,
		"slidesToShow":3,
		"slidesToScroll":1,
		"autoplay": true,
		"autoplaySpeed": 3000,
		"centerMode": true,
		"centerPadding": '0px',
		"dots":false,
		"arrows":true,
		"responsive": [
         {
            "breakpoint": 1025,
            "settings": {
               "slidesToShow": 3,
            }
         },
         {
            "breakpoint": 768,
            "settings": {
               "slidesToShow": 2,
               "dots":false,
               "arrows":false,
            }
         },
         {
            "breakpoint": 578,
            "settings": {
               "slidesToShow": 1,
               "dots":false,
               "arrows":false,
            }
         },
      ]};

	constructor(private service : MusicService) { }

	ngOnInit() {
		this.service.getGalleryContent().
			subscribe( res => { this.galleryContent = res},
						  err => console.log(err),
						  () 	=> this.galleryContent
						)
	}

}
