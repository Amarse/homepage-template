import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/Data.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './Testimonial.component.html',
  styleUrls: ['./Testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
	
	public reviewsData :any;
	
	constructor(private dataService: DataService) { }

	ngOnInit() {
      this.getTestimonialSlider();
   }
   
  // get Testimonial Slider data from data service
   getTestimonialSlider(){
      this.dataService.getTestimonialSliderData()
         .subscribe( response  => {this.reviewsData = response },
                     err       => console.log(err),
                     ()        => this.reviewsData
        ) 
   }
}
