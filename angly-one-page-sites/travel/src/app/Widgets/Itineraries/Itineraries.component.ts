import { Component, OnInit } from '@angular/core';
import { AnglyService } from '../../Services/Angly.service';

@Component({
   selector: 'app-itineraries',
   templateUrl: './Itineraries.component.html',
   styleUrls: ['./Itineraries.component.scss']
})
export class ItinerariesComponent implements OnInit {

   public itinerariesData  : any;

   constructor(private anglyService : AnglyService) { }

   ngOnInit() {
      this.getserviceData();
   }

   // getserviceData method  used to get services data from service 
   getserviceData(){
      this.anglyService.getServiceData()
        .subscribe( response  => {this.itinerariesData = response },
                    err       => console.log(err),
                    ()        => this.itinerariesData
        ) 
   }
}