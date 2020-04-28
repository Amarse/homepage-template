import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../Services/Data.service';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './BlogPostList.component.html',
  styleUrls: ['./BlogPostList.component.scss']
})
export class BlogPostListComponent implements OnInit {
	
	public postlist  : any;

   constructor(private DataService : DataService) { }

   ngOnInit() {   
      this.getBlogPostlistdata();
   }

// get blogpostlist data from data service 
   getBlogPostlistdata(){
      this.DataService.getBlogPostListData()
         .subscribe( response  => {this.postlist = response },
                     err       => console.log(err),
                     ()        => this.postlist
        ) 
   }
}
