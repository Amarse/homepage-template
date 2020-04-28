import { Component, OnInit } from '@angular/core';
import { AnglyService } from '../../Services/Angly.service';

@Component({
	selector: 'app-pricing',
	templateUrl: './Pricing.component.html',
	styleUrls: ['./Pricing.component.scss']
})
export class PricingComponent implements OnInit {

	pricingContent : any;

	constructor(public service : AnglyService) { }

	ngOnInit() {
		this.service.getPricingContent().
			subscribe( response => {this.pricingContent = response },
                     err     => console.log(err),
                     ()      => this.pricingContent
         )
	}
}
