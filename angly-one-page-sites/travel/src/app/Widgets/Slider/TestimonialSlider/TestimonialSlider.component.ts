import { Component, OnInit , Input} from '@angular/core';
import { AnglyService } from '../../../Services/Angly.service';

@Component({
   selector: 'app-testimonial-slider',
   templateUrl: './TestimonialSlider.component.html',
   styleUrls: ['./TestimonialSlider.component.scss']
})
export class TestimonialSliderComponent implements OnInit {

   @Input() testimonialSliderData : any;

   slideConfig = { "slidesToShow": 3, "slidesToScroll": 1,"autoplay":true,"arrows": true ,"dots": false ,"infinite": true,"autoplaySpeed": 5000,
      "responsive": [
         {
            "breakpoint":1200,
            "settings": {
              "arrows": false,
            }
         },
         {
            "breakpoint":992,
            "settings": {
              "slidesToShow":1,
              "slidesToScroll":1,
              "arrows": false,
            }
         }
      ]
   };

   constructor(private anglyService : AnglyService) { }

   ngOnInit() {
   }

 
}

