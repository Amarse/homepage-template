import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DataService {

	constructor(private http:HttpClient) { }
  
   // this method get ServiceData  from ServiceData.json file 
   getServiceData(){
      return this.http.get("assets/data/servicesdata.json")
         .pipe(response => response)
   }

   // this method get serviceplan  from serviceplan.json file 
   getServicePlan(){
      return this.http.get("assets/data/serviceplan.json")
         .pipe(response => response)
  }
   
   // this method get blogs  from blogs.json file 
   getBlogData(){
      return this.http.get("assets/data/blogs.json")
         .pipe(response => response)
   }
   
   // this method get team slider  from teamslider.json file 
   getTeamSliderData(){
      return this.http.get("assets/data/teamSlider.json")
         .pipe(response => response)
   }

   // this method  getTestimonialSliderData  from testimonialSlider.json file 
   getTestimonialSliderData(){
      return this.http.get("assets/data/testimonialSlider.json")
         .pipe(response => response)
   }

   // this method get blogpostlist  from blogpostlist.json file 
   getBlogPostListData(){
      return this.http.get("assets/data/blogpostlist.json")
         .pipe(response => response)
   }

   // this method get homeslider  from homeslider.json file 
   getHomeSlider(){
    return this.http.get("assets/data/homeslider.json")
      .pipe(response => response)
  }

   // this method get projectdata from projectdata.json file 
   getProjectdata(){
      return this.http.get("assets/data/projectdata.json") 
         .pipe( response => response)
   }
}
 