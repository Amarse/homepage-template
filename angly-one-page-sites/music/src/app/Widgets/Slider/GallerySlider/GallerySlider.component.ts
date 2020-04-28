import { Component, OnInit, Input } from '@angular/core';
import { MusicService } from '../../../Service/music.service';

@Component({
	selector: 'app-gallery-slider',
	templateUrl: './GallerySlider.component.html',
	styleUrls: ['./GallerySlider.component.scss']
})

export class GallerySliderComponent implements OnInit {

	@Input() gallerySliderContent : any;
	@Input() gallerySliderConfig  : any;
	
	constructor(public service: MusicService) { }

	ngOnInit() {
	}

}
