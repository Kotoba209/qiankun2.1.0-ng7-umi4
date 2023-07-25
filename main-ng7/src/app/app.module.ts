import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
// import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// // import {ButtonModule} from 'primeng/button';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyComponent } from './empty/empty.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MainAppComponent } from './main-app/main-app.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent,
    HomeComponent,
    AboutComponent,
    MainAppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // FormsModule,
    ButtonModule,
    MenuModule
    // SlideMenuModule,
    // CheckboxModule,
    // ListboxModule
    // ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
