import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/Data.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './Blogs.component.html',
  styleUrls: ['./Blogs.component.scss']
})
export class BlogsComponent implements OnInit {
   
   public blogData  : any;
   
   constructor(private DataService : DataService) { }

   ngOnInit() {
  	   this.getblogdata();
   }
   // get blogs data form  data service 
   getblogdata(){
      this.DataService.getBlogData()
         .subscribe( response  => {this.blogData = response },
                     err       => console.log(err),
                     ()        => this.blogData
         ) 
   }
}
