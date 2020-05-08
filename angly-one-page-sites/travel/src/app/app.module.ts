import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Core/Header/Header/Header.component';
import { FooterComponent } from './Core/Footer/Footer/Footer.component';
import { HomeComponent } from './Widgets/Slider/Home/Home.component';
import { LogoComponent } from './Core/Logo/Logo.component';
import { MenuComponent } from './Core/Menu/Menu.component';
import { StickyheaderComponent } from './Core/Header/StickyHeader/StickyHeader.component';
import { HttpClientModule } from '@angular/common/http';
import { AnglyService } from './Services/Angly.service';
import { WidgetsModule } from  './Widgets/widgets.module';
import { ResponsiveHeaderComponent } from './Core/Header/ResponsiveHeader/ResponsiveHeader.component';
import { MainComponent } from './Main/Main.component';
import { AppRoutingModule } from './app-routing.module';
import { CompanyComponent } from './company/company.component';

@NgModule({
  declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		LogoComponent,
		MenuComponent,
		StickyheaderComponent,
		ResponsiveHeaderComponent,
		FooterComponent,
		MainComponent,
		CompanyComponent
  ],
  	imports: [
		BrowserModule,
		HttpClientModule,
		WidgetsModule,
		AppRoutingModule,
		RouterModule,
		SlickCarouselModule,
		FormsModule,
		LoadingBarRouterModule
  ],
  providers: [AnglyService],
  bootstrap: [AppComponent]

})
export class AppModule { }
