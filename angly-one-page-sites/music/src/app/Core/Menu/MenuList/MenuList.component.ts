import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-menu-list',
	templateUrl: './MenuList.component.html',
	styleUrls: ['./MenuList.component.scss']
})
export class MenuListComponent implements OnInit {

	@Input() stickyClass : any;
	
	constructor() { }

	ngOnInit() {

   // click on menu 1 (Home) then window scroll to Home section.
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
         };
      }
      
   //  click on menu 2 Track then window scroll to track section.
   var el = document.getElementsByClassName("menu-2")
      for(var i =0; i< el.length;i++){
         el[i].addEventListener("click",scrollMenuServices)
      }
      function scrollMenuServices(){ 
         document.getElementById('track-section').scrollIntoView({
            behavior: 'smooth'
         });
          if(window.innerWidth<=991){
            var tog = document.getElementsByClassName("header")
            for( var j = 0; j < tog.length;j++ ){
               tog[j].classList.remove("menu-opened"); 
           }
         }
      }
    
   //  click on menu 3 contact us then window scroll to contact us section.
   var el = document.getElementsByClassName("menu-3")
      for(var i =0; i< el.length;i++){
         el[i].addEventListener("click",scrollMenuPortfolio)
      }
      function scrollMenuPortfolio(){ 
         document.getElementById('contact-us-section').scrollIntoView({
            behavior: 'smooth'
         });
         if(window.innerWidth<=991){
            var tog = document.getElementsByClassName("header")
            for( var j = 0; j < tog.length;j++ ){
               tog[j].classList.remove("menu-opened"); 
           }
         }
      }
    
   //  click on menu 4 tour then window scroll to tour section.
   var el = document.getElementsByClassName("menu-4")
      for(var i =0; i< el.length;i++){
         el[i].addEventListener("click",scrollMenuAbout)
      }
      function scrollMenuAbout(){ 
         document.getElementById('upcoming-tour-section').scrollIntoView({
            behavior: 'smooth'
         });
         if(window.innerWidth<=991){
            var tog = document.getElementsByClassName("header")
            for( var j = 0; j < tog.length;j++ ){
               tog[j].classList.remove("menu-opened"); 
           }
         }
      }
    
   //  click on menu 5 team then window scroll to team section.         
   var el = document.getElementsByClassName("menu-5")
      for(var i =0; i< el.length;i++){
         el[i].addEventListener("click",scrollMenuBlog)
      }
      function scrollMenuBlog(){ 
         document.getElementById('team-section').scrollIntoView({
            behavior: 'smooth'
         });
         if(window.innerWidth<=991){
            var tog = document.getElementsByClassName("header")
            for( var j = 0; j < tog.length;j++ ){
               tog[j].classList.remove("menu-opened"); 
           }
         }
      }

   //  click on menu 6 gallery then window scroll to gallery section.       
   var el = document.getElementsByClassName("menu-6")
      for(var i =0; i< el.length;i++){
         el[i].addEventListener("click",scrollMenuContact)
      }
      function scrollMenuContact(){ 
         document.getElementById('gallery-section').scrollIntoView({
            behavior: 'smooth'
         });
         if(window.innerWidth<=991){
            var tog = document.getElementsByClassName("header")
            for( var j = 0; j < tog.length;j++ ){
               tog[j].classList.remove("menu-opened"); 
           }
         }
      }

   //  click on menu 7 news then window scroll to news section.     
   var el = document.getElementsByClassName("menu-7")
      for(var i =0; i< el.length;i++){
         el[i].addEventListener("click",scrollMenuNews)
      }
      function scrollMenuNews(){ 
         document.getElementById('news-section').scrollIntoView({
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
