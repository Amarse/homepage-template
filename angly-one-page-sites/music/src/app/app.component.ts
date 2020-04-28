import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

   constructor(private loadingBar: LoadingBarService){

   }
   ngOnInit(){
      this.startLoading();
      setTimeout(()=>{
         this.stopLoading();
      },2000)
   }

   startLoading() {
       this.loadingBar.start();
    }
  
   stopLoading() {
       this.loadingBar.complete();
   }

}