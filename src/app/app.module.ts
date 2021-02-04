import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeeklyComponent } from './weekly/weekly.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
const routes: Routes = [
  { path: 'weekly', component: WeeklyComponent },
  { path: 'monthly', component: MonthlyComponent },
  { path: '', component: HomepageComponent },
  // { path: '**', component: AppComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    WeeklyComponent,
    MonthlyComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
