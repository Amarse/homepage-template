import { Component, OnInit } from '@angular/core';
import { AnglyService } from '../../Services/Angly.service';

@Component({
	selector: 'app-testimonial',
	templateUrl: './Testimonial.component.html',
	styleUrls: ['./Testimonial.component.scss']
})

export class TestimonialComponent implements OnInit {
   
   testimonialContent : any;
   
	constructor(private anglyService : AnglyService) { }

	ngOnInit() {
      this.anglyService.getTestimonialData()
         .subscribe( response  => {this.testimonialContent = response },
                     err       => console.log(err),
                     ()        => this.testimonialContent
         )  
   }
}
