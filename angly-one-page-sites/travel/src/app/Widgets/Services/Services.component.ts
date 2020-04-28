import { Component, OnInit } from '@angular/core';
import { AnglyService } from '../../Services/Angly.service';

@Component({
   selector: 'app-services',
   templateUrl: './Services.component.html',
   styleUrls: ['./Services.component.scss']
})
export class ServicesComponent implements OnInit {

   public ShowServiceData : any;

   constructor( private anglyService : AnglyService) { }

   ngOnInit() {
      this.getaboutdata();
   }

   // getaboutdata method is used to get about data from service
   getaboutdata(){
      this.anglyService.getAboutData()
         .subscribe( response => {this.ShowServiceData = response },
                     err      => console.log(err),
                     ()       => this.ShowServiceData
         )
  }
}