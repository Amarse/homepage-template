import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AboutComponent } from '../Widgets/About/About.component';
import { ServicesComponent } from '../Widgets/Services/Services.component';
import { ProjectComponent } from '../Widgets/Project/Project.component';
import { PricingPlansComponent } from '../Widgets/PricingPlans/PricingPlans.component';
import { LocationComponent } from '../Widgets/Location/Location.component';
import { BlogsComponent } from '../Widgets/Blogs/Blogs.component';
import { BlogDiscriptionComponent } from '../Widgets/Grid/BlogGrid/BlogGrid.component';
import { TeamSliderComponent } from '../Widgets/Slider/TeamSlider/TeamSlider.component';
import { TestimonialComponent } from '../Widgets/Testimonial/Testimonial.component';
import { ContactFormComponent } from '../Widgets/Form/ContactForm/ContactForm.component';
import { ContactDetailComponent } from '../Widgets/ContactDetail/ContactDetail.component';
import { RequestQuoteComponent } from '../Widgets/RequestQuote/RequestQuote.component';
import { CounterComponent } from '../Widgets/Counter/Counter.component';
import { SocialiconComponent } from '../Widgets/SocialIcon/SocialIcon/SocialIcon.component';
import { TestimonialSliderComponent } from '../Widgets/Slider/TestimonialSlider/TestimonialSlider.component';
import { ServicesGridComponent } from '../Widgets/Grid/ServicesGrid/ServicesGrid.component';
import { QuoteFormComponent } from '../Widgets/Form/QuoteForm/QuoteForm.component';
import { HeaderContactDetailComponent } from '../Widgets/HeaderContactDetail/HeaderContactDetail.component';
import { ProjectgridComponent } from '../Widgets/Grid/ProjectGrid/ProjectGrid.component';
import { SectionTitleComponent } from '../Widgets/SectionTitle/SectionTitle/SectionTitle.component';
import { HomeComponent } from '../Widgets/Slider/Home/Home.component';
import { ServiceplaingridComponent } from '../Widgets/Grid/ServicePlainGrid/ServicePlainGrid.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AgmCoreModule } from '@agm/core';
import { BlogPostListComponent } from './List/BlogPostList/BlogPostList.component';
import { TeamComponent } from './Team/Team.component';

@NgModule({
   declarations: [
      AboutComponent,
      ServicesComponent,
      ProjectComponent,
      PricingPlansComponent,
      LocationComponent,
      BlogsComponent,
      BlogDiscriptionComponent,
      TeamSliderComponent,
      TestimonialComponent,
      ContactFormComponent,
      ContactDetailComponent,
      RequestQuoteComponent,
      CounterComponent,
      SocialiconComponent,
      TestimonialSliderComponent,
      ServicesGridComponent,
      QuoteFormComponent,
      HeaderContactDetailComponent,
      ProjectgridComponent,
      SectionTitleComponent,
      HomeComponent,
      ServiceplaingridComponent,
      BlogPostListComponent,
      TeamComponent,
   ],
   imports: [
      CommonModule,
      SlickCarouselModule,
      FormsModule,
      BrowserModule,
      ReactiveFormsModule,
      AgmCoreModule.forRoot({
         apiKey:'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk'
      })
   ],
   exports:[
      AboutComponent,
      ServicesComponent,
      ProjectComponent,
      PricingPlansComponent,
      LocationComponent,
      BlogsComponent,
      BlogDiscriptionComponent,
      TeamSliderComponent,
      TestimonialComponent,
      ContactFormComponent,
      ContactDetailComponent,
      RequestQuoteComponent,
      CounterComponent,
      SocialiconComponent,
      TestimonialSliderComponent,
      ServicesGridComponent,
      QuoteFormComponent,
      HeaderContactDetailComponent,
      ProjectgridComponent,
      SectionTitleComponent,
      HomeComponent,
      ServiceplaingridComponent,
      BlogPostListComponent,
      TeamComponent
   ]
})
export class WidgetsModule { }
