import { Component, OnInit } from '@angular/core';
import { AnglyService } from '../../../Services/Angly.service';

@Component({
   selector: 'app-clients',
   templateUrl: './Clients.component.html',
   styleUrls: ['./Clients.component.scss']
})
export class ClientsComponent implements OnInit {
	
   public clientsdata :any;

  // client slider config
	slideConfig = { "infinite": true,"slidesToShow":5,"slidesToScroll":1,"dots":false,"arrows":false, "autoplay":true,"autoplaySpeed": 2000,
      "responsive": [
         {
            "breakpoint":1367,
            "settings": {
               "slidesToShow":4,
            }
         },
         {
            "breakpoint":768,
            "settings": {
               "slidesToShow":3,
            }
         },
         {
            "breakpoint":577,
            "settings": {
               "slidesToShow":2,
            }
         },
         {
            "breakpoint":480,
            "settings": {
               "slidesToShow":1,
            }
         },
      ]
   };

   constructor(private anglyService:AnglyService) { }

   ngOnInit() {
      this.getclients();
   }
  
   // getclients method is used to get clients data from service
   getclients(){
      this.anglyService.getclients()   
         .subscribe( response  => {this.clientsdata = response },
                     err       => console.log(err),
                     ()        => this.clientsdata
         ) 
     }
}