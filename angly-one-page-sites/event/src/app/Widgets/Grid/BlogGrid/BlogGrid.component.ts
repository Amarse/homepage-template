import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './BlogGrid.component.html',
  styleUrls: ['./BlogGrid.component.scss']
})
export class BlogDiscriptionComponent implements OnInit {

	@Input()blogDatavalue : any;
	
	constructor() { }

	ngOnInit() {
	}
}
