import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/Data.service';

@Component({
  selector: 'app-project',
  templateUrl: './Project.component.html',
  styleUrls: ['./Project.component.scss']
})
export class ProjectComponent implements OnInit {

   public projectData : any ;

   constructor(private dataSerive:DataService ) { }

   ngOnInit() {
      this.getProjectData();
   }
   
   // get project data from data service 
   getProjectData(){
      this.dataSerive.getProjectdata()
         .subscribe( response => {this.projectData = response },
                     err      => console.log(err),
                     ()       => this.projectData
         )            
   }

   // this method transfer data into array according to his type and then return 
   getProjectByType(type) {
         let projectContentByType = [];
         if(this.projectData && this.projectData.length > 0){
            for(let content of this.projectData){
               if(content.type == type){
                  projectContentByType.push(content)
               }
            }
         return projectContentByType;
         }
   }
}