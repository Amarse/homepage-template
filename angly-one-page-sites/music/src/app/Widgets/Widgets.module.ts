import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { SocialLinksComponent } from './SocialShare/SocialLinks/SocialLinks.component';
import { CommonTitleComponent } from './CommonTitle/CommonTitle.component';
import { TrackComponent } from './Track/Track.component';
import { ContactUsFormComponent } from './Form/ContactUsForm/ContactUsForm.component';
import { UpcomingToursComponent } from './UpcomingTours/UpcomingTours.component';
import { TeamComponent } from './Team/Team.component';
import { GalleryComponent } from './Gallery/Gallery.component';
import { NewsComponent } from './News/News.component';
import { ContactUsComponent } from './ContactUs/ContactUs.component';
import { TeamMemberComponent } from './TeamMember/TeamMember.component';
import { TeamMemberGridComponent } from './Grid/TeamMemberGrid/TeamMemberGrid.component';
import { GallerySliderComponent } from './Slider/GallerySlider/GallerySlider.component';
import { BannerComponent } from './Banner/Banner.component';
import { VgCoreModule } from "videogular2/core";
import { VgControlsModule } from "videogular2/controls";
import { VgOverlayPlayModule } from "videogular2/overlay-play";
import { VgBufferingModule } from "videogular2/buffering";

@NgModule({
	declarations: [
		SocialLinksComponent, 
		CommonTitleComponent,
		TrackComponent,
		ContactUsFormComponent,
		UpcomingToursComponent,
		TeamComponent,
		GalleryComponent,
		NewsComponent,
		ContactUsComponent,
		TeamMemberComponent,
		TeamMemberGridComponent,
		GallerySliderComponent,
		BannerComponent
	],
	imports: [
		CommonModule,
		SlickCarouselModule,
		VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule
	],
	exports: [
		SocialLinksComponent,
		CommonTitleComponent,
		TrackComponent,
		ContactUsFormComponent,
		UpcomingToursComponent,
		TeamComponent,
		NewsComponent,
		GalleryComponent,
		ContactUsComponent,
		TeamMemberComponent,
		TeamMemberGridComponent,
		GallerySliderComponent,
		BannerComponent
	]
})
export class WidgetsModule { }
