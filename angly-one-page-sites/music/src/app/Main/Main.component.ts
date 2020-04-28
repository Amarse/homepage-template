import { Component, OnInit, HostListener } from '@angular/core';

@Component({
	selector: 'app-main',
	templateUrl: './Main.component.html',
	styleUrls: ['./Main.component.scss']
})

export class MainComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	@HostListener('window:scroll', ['$event'])

	// onScrollEvent method is used for skicky header and back to top   
	onScrollEvent($event) {	
		//skicky header
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrollTop >= 200) {
      	if(!document.getElementById('header-sticky').classList.contains('visible')){
      		document.getElementById('header-sticky').className += " visible";
      	}
      }  else {
         document.getElementById('header-sticky').classList.remove("visible");
      }

		//back to top 
	   if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
				document.getElementById("return-to-top").style.display="block";				
			}
		else{
			document.getElementById("return-to-top").style.display="none";	
		} 

		document.getElementById("return-to-top").addEventListener("click",scrollToTop);
		
		function scrollToTop () {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}
}
