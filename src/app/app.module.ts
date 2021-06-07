import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LeftSlideComponent } from './left-slide/left-slide.component';
import { RightSlideComponent } from './right-slide/right-slide.component'
import{FormsModule}from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    LeftSlideComponent,
    RightSlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
