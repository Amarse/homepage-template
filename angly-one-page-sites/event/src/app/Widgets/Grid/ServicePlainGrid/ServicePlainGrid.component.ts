import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-service-plain-grid',
  templateUrl: './ServicePlainGrid.component.html',
  styleUrls: ['./ServicePlainGrid.component.scss']
})
export class ServiceplaingridComponent implements OnInit {

	@Input() showPlan : any;

  constructor() { }

  ngOnInit() {
  }

}
 