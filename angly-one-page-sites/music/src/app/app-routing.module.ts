import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './Main/Main.component';

export const AppRoutes: Routes = [{
   path: '',
   redirectTo: 'home',
   pathMatch: 'full',
   },{
      path: 'home',
      component: MainComponent
   }
];

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule.forRoot(AppRoutes)
	],
	exports : [RouterModule]
})
export class AppRoutingModule { }
