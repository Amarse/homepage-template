import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms"
import { AppComponent } from './app.component';
import { HeaderComponent } from './Core/Header/Header/Header.component';
import { FooterComponent } from './Core/Footer/Footer.component';
import { MenuComponent } from './Core/Menu/Menu.component';
import { LogoComponent } from './Core/Logo/Logo.component';
import { MainComponent } from './Main/Main.component';
import { WidgetsModule } from './Widgets/widgets.module';
import { StickyheaderComponent } from './Core/Header/StickyHeader/StickyHeader.component';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './Services/Data.service';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		MenuComponent,
		LogoComponent,
		MainComponent,
		StickyheaderComponent,
		MatButtonModule
	],
	imports: [
		BrowserModule,
		WidgetsModule,
		HttpClientModule,
		AppRoutingModule,
		FormsModule,
		LoadingBarHttpClientModule
	],
	providers: [DataService],
	bootstrap: [AppComponent]
})
export class AppModule { }
