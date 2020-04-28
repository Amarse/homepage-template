import { Component, OnInit } from '@angular/core';
import { AnglyService } from '../../Services/Angly.service';

@Component({
   selector: 'app-portfolio',
   templateUrl: './Portfolio.component.html',
   styleUrls: ['./Portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  
   public portfolioData : any;

   constructor(private anglyService:AnglyService) { }

   ngOnInit() {
      this.getPortfolio();
   }

   //getPortfolio method used to get Portfoliodata from service and transfer to portfolioData
   getPortfolio(){
      this.anglyService.getportfolio()
         .subscribe( response => {this.portfolioData = response },
                     err      => console.log(err),
                     ()       => this.portfolioData
         )            
   }

   //getPortfolioByType first check data is available if available then  push data to array and then return array 
   getPortfolioByType (type) {
      let portfolioContentByType = [];
      if(this.portfolioData && this.portfolioData.length > 0){
         for(let content of this.portfolioData){
            if(content.type == type){
               portfolioContentByType.push(content)
            }
         }
      return portfolioContentByType;
      }
   }
}
