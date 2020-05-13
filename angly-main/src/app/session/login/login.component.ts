import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'angly-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    url;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  click(){
    console.log("login");

    setTimeout(() =>{
      this.router.navigate([this.url || 'admin']);
    },1000); 

  }



}
