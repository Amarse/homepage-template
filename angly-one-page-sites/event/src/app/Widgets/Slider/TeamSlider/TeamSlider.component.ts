import { Component, OnInit, Input } from '@angular/core';
 
@Component({
   selector: 'app-team-slider',
   templateUrl: './TeamSlider.component.html',
   styleUrls: ['./TeamSlider.component.scss']
})
export class TeamSliderComponent implements OnInit {

   @Input() teamContent : any;
   
   icons = [
      {
         class:"facebook",
         icon :"fab fa-facebook-f"
      },
      {
         class:"twitter",
         icon :"fab fa-twitter"
      },
      {
         class:"linkedin",
         icon :"fab fa-linkedin-in"
      },
      {
         class:"yelp",
         icon :"fab fa-yelp" 
      }
   ];

   slideConfig = {"slidesToShow": 2, "slidesToScroll": 1, "infinite": true,"dots":false,"arrows":true,"autoplay":true,"autoplaySpeed": 2000,
        "responsive": [
         {
            "breakpoint":1250,
            "settings": {
               "slidesToShow":1,
               "arrows":false,
            }
         },  
         {
            "breakpoint":992,
            "settings": {
               "slidesToShow":1,
               "arrows":false,
            }
         },  
      ]
   };

	constructor() { }

	ngOnInit() {
		
	}
   
   
}
