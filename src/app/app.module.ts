import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavitemComponent } from './navitem/navitem.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LifeForceScienceComponent } from './life-force-science/life-force-science.component';
import { EnergyCultivationComponent } from './energy-cultivation/energy-cultivation.component';
import { StoreComponent } from './store/store.component';
import { SisterSitesComponent } from './sister-sites/sister-sites.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InnerLinkComponent } from './inner-link/inner-link.component';
import { TheSecretOfTheGoldenFlowerComponent } from './the-secret-of-the-golden-flower/the-secret-of-the-golden-flower.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavitemComponent,
    HeaderComponent,
    HomeComponent,
    LifeForceScienceComponent,
    EnergyCultivationComponent,
    StoreComponent,
    SisterSitesComponent,
    CalendarComponent,
    AnnouncementsComponent,
    SidebarComponent,
    InnerLinkComponent,
    TheSecretOfTheGoldenFlowerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
