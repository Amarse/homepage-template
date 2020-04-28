import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './SectionTitle.component.html',
  styleUrls: ['./SectionTitle.component.scss']
})
export class SectionTitleComponent implements OnInit {

	@Input() title    : any;
	@Input() subTitle : any;
   @Input() sectionTitleClass : any;
   
	constructor() { }

	ngOnInit() {
	}
}
