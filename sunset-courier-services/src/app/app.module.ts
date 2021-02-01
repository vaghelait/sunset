import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';

import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ContactComponent } from './contact/contact.component';
import { QuotationComponent } from './quotation/quotation.component';
import { ServicesComponent } from './services/services.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { FaqsComponent } from './faqs/faqs.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    QuotationComponent,
    ServicesComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ImageCarouselComponent,
    MobileMenuComponent,
    FaqsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    AngularMyDatePickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatCarouselModule,
    MatListModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
