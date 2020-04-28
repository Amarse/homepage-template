import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/Data.service';

@Component({
  selector: 'app-services',
  templateUrl: './Services.component.html',
  styleUrls: ['./Services.component.scss']
})

export class ServicesComponent implements OnInit {

	public ServiceData : any;

   constructor(private dataService : DataService) { }

   ngOnInit(){
   	this.getServiceGrid();
   }
   
   // get service data from data service 
   getServiceGrid(){
		this.dataService.getServiceData()
			.subscribe( response  => {this.ServiceData = response },
                     err       => console.log(err),
                     ()        => this.ServiceData
         ) 
	}
}
 