import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LifeForceScienceComponent } from './life-force-science/life-force-science.component';
import { EnergyCultivationComponent } from './energy-cultivation/energy-cultivation.component';
import { StoreComponent } from './store/store.component';
import { SisterSitesComponent } from './sister-sites/sister-sites.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { TheSecretOfTheGoldenFlowerComponent } from './the-secret-of-the-golden-flower/the-secret-of-the-golden-flower.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'life-force-science', component: LifeForceScienceComponent },
  { path: 'energy-cultivation', component: EnergyCultivationComponent },
  { path: 'store', component: StoreComponent },
    { path: 'store/the-secret-of-the-golden-flower-a-kundalini-meditation-method', component: TheSecretOfTheGoldenFlowerComponent },
  { path: 'sister-sites', component: SisterSitesComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'announcements', component: AnnouncementsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
