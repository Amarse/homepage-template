import { Component, OnInit ,Input} from '@angular/core';

@Component({
	selector: 'app-blog-grid',
	templateUrl: './BlogGrid.component.html',
	styleUrls: ['./BlogGrid.component.scss']
})
export class BlogGridComponent implements OnInit {

	@Input()  BlogDataValue : any;

	constructor() { }

	ngOnInit() {
	}
}

