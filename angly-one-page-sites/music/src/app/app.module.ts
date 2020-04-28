import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './Main/Main.component';
import { MainHeaderComponent } from './Core/Header/MainHeader/MainHeader.component';
import { StickyHeaderComponent } from './Core/Header/StickyHeader/StickyHeader.component';
import { LogoComponent } from './Core/Logo/Logo/Logo.component';
import { MenuListComponent } from './Core/Menu/MenuList/MenuList.component';
import { WidgetsModule } from './Widgets/Widgets.module';
import { MusicService } from './Service/music.service';
import { FooterComponent } from './Core/Footer/Footer/Footer.component';


@NgModule({
	declarations: [
		AppComponent,
		MainComponent,
		MainHeaderComponent,
		StickyHeaderComponent,
		LogoComponent,
		MenuListComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		WidgetsModule,
		HttpClientModule,
		LoadingBarModule,
		LoadingBarRouterModule
	],
	providers: [
		MusicService 
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
