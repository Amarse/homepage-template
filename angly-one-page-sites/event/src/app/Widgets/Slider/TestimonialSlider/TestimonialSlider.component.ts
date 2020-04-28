import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-slider',
  templateUrl: './TestimonialSlider.component.html',
  styleUrls: ['./TestimonialSlider.component.scss']
})
export class TestimonialSliderComponent implements OnInit {

   @Input() testimonialContent : any;
	
   slideConfig = {"slidesToShow": 1, "slidesToScroll": 1 ,"infinite": true,"dots":false,"arrows":false,"autoplay":true,"autoplaySpeed": 2000};

   constructor() { }

   ngOnInit() {
    
   }
   
}
