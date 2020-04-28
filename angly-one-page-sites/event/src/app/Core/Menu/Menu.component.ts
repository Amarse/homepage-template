import { Component, OnInit , Input } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './Menu.component.html',
  styleUrls: ['./Menu.component.scss']
})
export class MenuComponent implements OnInit {

	@Input() stickyClass : any ;

	constructor() { }

	ngOnInit() {
 
	 //  click on menu 1 (Home)then window scroll to section 1(Home) 
   var el = document.getElementsByClassName("menu-1")
      for(var i =0; i< el.length;i++){
         el[i].addEventListener("click",scrollMenuHome)
      }
      function scrollMenuHome(){ 
         document.getElementById('section-1').scrollIntoView({
            behavior: 'smooth'
         });
         if(window.innerWidth<=991){
            var tog = document.getElementsByClassName("header")
            for( var j = 0; j < tog.length;j++ ){
               tog[j].classList.remove("menu-opened"); 
           }
         }
      }
      
    //  click on menu 2 (About)then window scroll to section 2(About)
   var el = document.getElementsByClassName("menu-3")
      for(var i =0; i< el.length;i++){
         el[i].addEventListener("click",scrollMenuAbout)
      }
      function scrollMenuAbout(){ 
         document.getElementById('section-2').scrollIntoView({
            behavior: 'smooth'
         });
         if(window.innerWidth<=991){
            var tog = document.getElementsByClassName("header")
            for( var j = 0; j < tog.length;j++ ){
               tog[j].classList.remove("menu-opened"); 
            }
         }
      }
    
    //  click on menu 3 (Services)then window scroll to section 3(Services) 
   var el = document.getElementsByClassName("menu-2")
      for(var i =0; i< el.length;i++){
         el[i].addEventListener("click",scrollMenuServices)
      }
      function scrollMenuServices(){ 
         document.getElementById('section-3').scrollIntoView({
            behavior: 'smooth'
         });
         if(window.innerWidth<=991){
            var tog = document.getElementsByClassName("header")
            for( var j = 0; j < tog.length;j++ ){
               tog[j].classList.remove("menu-opened"); 
            }
         }
      }
    
    //  click on menu 4 (Projects)then window scroll to section 4(Projects) 
   var el = document.getElementsByClassName("menu-4")
      for(var i =0; i< el.length;i++){
         el[i].addEventListener("click",scrollMenuProjects)
      }
      function scrollMenuProjects(){ 
         document.getElementById('section-4').scrollIntoView({
            behavior: 'smooth'
         });
         if(window.innerWidth<=991){
            var tog = document.getElementsByClassName("header")
            for( var j = 0; j < tog.length;j++ ){
               tog[j].classList.remove("menu-opened"); 
            }
         }
      }
    
    //  click on menu 5 (Blog)then window scroll to section 5(Blog)         
   var el = document.getElementsByClassName("menu-5")
      for(var i =0; i< el.length;i++){
         el[i].addEventListener("click",scrollMenuBlog)
      }
      function scrollMenuBlog(){ 
         document.getElementById('section-5').scrollIntoView({
            behavior: 'smooth'
         });
         if(window.innerWidth<=991){
            var tog = document.getElementsByClassName("header")
            for( var j = 0; j < tog.length;j++ ){
               tog[j].classList.remove("menu-opened"); 
            }
         }
      }

    //  click on menu 6 (Contact)then window scroll to section 6(Contact)       
   var el = document.getElementsByClassName("menu-6")
      for(var i =0; i< el.length;i++){
         el[i].addEventListener("click",scrollMenuContact)
      }
      function scrollMenuContact(){ 
         document.getElementById('section-6').scrollIntoView({
            behavior: 'smooth'
         });
         if(window.innerWidth<=991){
            var tog = document.getElementsByClassName("header")
            for( var j = 0; j < tog.length;j++ ){
               tog[j].classList.remove("menu-opened"); 
            }
         }
      }

   var el = document.getElementsByClassName("menu-7")
      for(var i =0; i< el.length;i++){
         el[i].addEventListener("click",scrollMenuSpeaker)
      }
      function scrollMenuSpeaker(){ 
         document.getElementById('section-7').scrollIntoView({
            behavior: 'smooth'
         });
         if(window.innerWidth<=991){
            var tog = document.getElementsByClassName("header")
            for( var j = 0; j < tog.length;j++ ){
               tog[j].classList.remove("menu-opened"); 
            }
         }
      }
	}
}
