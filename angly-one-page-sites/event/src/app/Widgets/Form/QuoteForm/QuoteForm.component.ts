import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators ,NgForm ,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  templateUrl: './QuoteForm.component.html',
  styleUrls: ['./QuoteForm.component.scss']
})
export class QuoteFormComponent implements OnInit {

	form = new FormGroup({
      name: new FormControl('', Validators.required),
      phone:new FormControl(''),
      comment:new FormControl('',Validators.required),
      email: new FormControl('', [
         Validators.required,
         Validators.email
      ])
   });

   constructor() { }

   ngOnInit() {
   }
   // this method id call when click on button and reset the form 
   OnSubmit(form = NgForm){
      this.form.reset();
   }
}