import { Component, OnInit } from '@angular/core';
import { AnglyService } from '../../Services/Angly.service';

@Component({
   selector: 'app-blogs',
   templateUrl: './Blogs.component.html',
   styleUrls: ['./Blogs.component.scss']
})
export class BlogsComponent implements OnInit {

   public blogData : any;
   public title    : string = "Recent News";
   public subtitle : string = "Updates";
  
   constructor(private anglyService :AnglyService) { }

   ngOnInit() {
      this.getblogData();
   }
  
  // getblogData method is used to get blog data from service 
   getblogData(){
      this.anglyService.getBlogData()
         .subscribe( response => {this.blogData = response },
                     err      => console.log(err),
                     ()       => this.blogData
         )
  }
}

