import { Component, OnInit ,Input} from '@angular/core';

@Component({
   selector: 'app-menu',
   templateUrl: './Menu.component.html',
   styleUrls: ['./Menu.component.scss']
})

export class MenuComponent implements OnInit {

   @Input() stickyClass : any;

   constructor() { }

   ngOnInit() {

   //  click on menu 1 (Home)then window scroll to section 1(Home) 
   var el = document.getElementsByClassName("menu-1")
      for(var i =0; i< el.length;i++){
         el[i].addEventListener("click",scrollMenuHome)
      }
      function scrollMenuHome(){ 
         document.getElementById('home-section').scrollIntoView({
            behavior: 'smooth'
         });
         if(window.innerWidth<=991){
            var tog = document.getElementsByClassName("header")
            for( var j = 0; j < tog.length;j++ ){
               tog[j].classList.remove("menu-opened"); 
           }
         }
      }
      
   //  click on menu 2 (Services)then window scroll to section 2(Services)
   var el = document.getElementsByClassName("menu-2")
      for(var i =0; i< el.length;i++){
         el[i].addEventListener("click",scrollMenuServices)
      }
      function scrollMenuServices(){ 
         document.getElementById('service-section').scrollIntoView({
            behavior: 'smooth'
         });
         if(window.innerWidth<=991){
            var tog = document.getElementsByClassName("header")
            for( var j = 0; j < tog.length;j++ ){
               tog[j].classList.remove("menu-opened"); 
            }
         }
      }
    
   //  click on menu 3 (Portfolio)then window scroll to section 3(Portfolio) 
   var el = document.getElementsByClassName("menu-3")
      for(var i =0; i< el.length;i++){
         el[i].addEventListener("click",scrollMenuPortfolio)
      }
      function scrollMenuPortfolio(){ 
         document.getElementById('portfolio-section').scrollIntoView({
            behavior: 'smooth'
         });
         if(window.innerWidth<=991){
            var tog = document.getElementsByClassName("header")
            for( var j = 0; j < tog.length;j++ ){
               tog[j].classList.remove("menu-opened"); 
            }
         }
      }
    
   //  click on menu 4 (About)then window scroll to section 4(About) 
   var el = document.getElementsByClassName("menu-4")
      for(var i =0; i< el.length;i++){
         el[i].addEventListener("click",scrollMenuAbout)
      }
      function scrollMenuAbout(){ 
         document.getElementById('pricing-section').scrollIntoView({
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
         document.getElementById('blog-section').scrollIntoView({
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
         document.getElementById('contact-section').scrollIntoView({
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
