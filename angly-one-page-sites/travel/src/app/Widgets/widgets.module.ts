import { NgModule,ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';

import { PortfolioComponent } from '../Widgets/Portfolio/Portfolio.component';
import { ServicesComponent } from '../Widgets/Services/Services.component';
import { ItinerariesComponent } from '../Widgets/Itineraries/Itineraries.component';
import { PricingComponent } from '../Widgets/Pricing/Pricing.component';
import { BlogsComponent } from '../Widgets/Blogs/Blogs.component';
import { TestimonialComponent } from '../Widgets/Testimonial/Testimonial.component';
import { ContactUsComponent } from '../Widgets/ContactUs/ContactUs.component';
import { ClientsComponent } from '../Widgets/Slider/Clients/Clients.component';
import { RequestQuoteComponent } from '../Widgets/RequestQuote/RequestQuote.component';
import { MapComponent } from '../Widgets/Map/Map.component';
import { SocialiconComponent } from '../Widgets/SocialIcon/SocialIcon/SocialIcon.component';
import { ServiceGridComponent } from '../Widgets/Grid/ServiceGrid/ServiceGrid.component';
import { BlogGridComponent } from '../Widgets/Grid/BlogGrid/BlogGrid.component';
import { TravelItinerariesComponent } from '../Widgets/Grid/TravelItineraries/TravelItineraries.component';
import { CommonTitleComponent } from '../Widgets/CommonTitle/CommonTitle/CommonTitle.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RequestQuoteFormComponent } from '../Widgets/Form/RequestQuoteForm/RequestQuoteForm.component';
import { TestimonialSliderComponent } from '../Widgets/Slider/TestimonialSlider/TestimonialSlider.component';
import { PortfolioGridComponent } from './Grid/PortfolioGrid/PortfolioGrid.component';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { HeaderContentBlockComponent } from './HeaderContectBlock/HeaderContectBlock.component';
import { PortfolioPopupComponent } from './PopUp/PortfolioPopup/PortfolioPopup.component';
import { ItinerariesPopupComponent } from './PopUp/ItinerariesPopup/ItinerariesPopup.component';


@NgModule({
	declarations: [   
		PortfolioComponent,
		ServicesComponent,
		ItinerariesComponent,
		TestimonialSliderComponent,
		BlogsComponent,
		TestimonialComponent,
		ContactUsComponent,
		ClientsComponent,
		RequestQuoteComponent,
		MapComponent,
		SocialiconComponent,
		ServiceGridComponent,
		BlogGridComponent,
		TravelItinerariesComponent,
		CommonTitleComponent,
		RequestQuoteFormComponent,
		PricingComponent,
		PortfolioGridComponent,
		HeaderContentBlockComponent,
		PortfolioPopupComponent,
		ItinerariesPopupComponent,
	],
	imports: [
		BrowserModule,
		CommonModule,
		SlickCarouselModule,
		ReactiveFormsModule,
		FormsModule,
		NgbModule.forRoot(),
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk'
		})
	],
	exports:[
		PortfolioComponent,
		ServicesComponent,
		ItinerariesComponent,
		TestimonialSliderComponent,
		BlogsComponent,
		TestimonialComponent,
		ContactUsComponent,
		ClientsComponent,
		RequestQuoteComponent,
		MapComponent,
		SocialiconComponent,
		ServiceGridComponent,
		BlogGridComponent,
		TravelItinerariesComponent,
		CommonTitleComponent,
		RequestQuoteFormComponent,
		PricingComponent,
		PortfolioGridComponent,
		HeaderContentBlockComponent
	],
	entryComponents : [
		PortfolioPopupComponent,
		ItinerariesPopupComponent
	],
	providers: [
		NgbActiveModal
	]
})
export class WidgetsModule { }

