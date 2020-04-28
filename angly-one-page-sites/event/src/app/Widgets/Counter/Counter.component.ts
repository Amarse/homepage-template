import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/Data.service';

@Component({
  selector: 'app-counter',
  templateUrl: './Counter.component.html',
  styleUrls: ['./Counter.component.scss']
})
export class CounterComponent implements OnInit {

   ShowtotalData       :any;
   days                : any;
   hours               : any;
   minutes             : any;
   seconds             : any;
   difference          : any;
   countDownDate       : any;
   currentTimeStamp    : any = new Date().getTime();

   constructor(private DataService : DataService) { }

   ngOnInit() {
   
      this.countDownDate = this.currentTimeStamp+(86400*10*1000);
      setInterval(() => {   
         this.counterDown();
      },0)
   }


   //counterDown method is used to Time calculations for days, hours, minutes and seconds.
   counterDown() {
      this.currentTimeStamp = new Date().getTime();
      this.difference = this.countDownDate - this.currentTimeStamp;
      this.days = Math.floor(this.difference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((this.difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((this.difference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((this.difference % (1000 * 60)) / 1000);
   }
}
