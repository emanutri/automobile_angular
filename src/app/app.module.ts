import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AutomobileCreateComponent } from './automobile/automobile-create/automobile-create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AutomobileSearchComponent } from './automobile/automobile-search/automobile-search.component';
import { AutomobileSearchResultsComponent } from './automobile/automobile-search-results/automobile-search-results.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AutomobileDetailComponent } from './automobile/automobile-detail/automobile-detail.component';
import { AutomobileEditComponent } from './automobile/automobile-edit/automobile-edit.component';
import { DatePipe } from '@angular/common';
import { AutomobileDeleteComponent } from './automobile/automobile-delete/automobile-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    FooterComponent,
    AutomobileCreateComponent,
    AutomobileSearchComponent,
    AutomobileSearchResultsComponent,
    AutomobileDetailComponent,
    AutomobileEditComponent,
    AutomobileDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
