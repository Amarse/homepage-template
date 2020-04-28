import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/Data.service';

@Component({ 
  selector: 'app-pricing-plans',
  templateUrl: './PricingPlans.component.html',
  styleUrls: ['./PricingPlans.component.scss']
})
export class PricingPlansComponent implements OnInit {
   
   public showplan : any;

   constructor(private DataService:DataService) { }

   ngOnInit() {
      this.getService_plan();
   }
   
   // get pricingPlan from data service 
   getService_plan(){
      this.DataService.getServicePlan()
         .subscribe( response  => {this.showplan = response },
                     err       => console.log(err),
                     ()        => this.showplan
        ) 
	}
}
  