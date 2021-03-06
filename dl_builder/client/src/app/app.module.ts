import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { PopupComponent } from './popup/popup.component';
import { GenerateSlideComponent } from './sidebar/generate-slide/generate-slide.component';
import { NewSlideFormComponent } from './new-slide-form/new-slide-form.component';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import { NewSlideService } from './new-slide-form/new-slide.service';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    PopupComponent,
    GenerateSlideComponent,
    NewSlideFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientModule,
    FormsModule,
    HttpClientXsrfModule.withOptions({
  cookieName: 'csrftoken',
  headerName: 'X-CSRFToken',
}),
  ],
  providers: [NewSlideService],
  bootstrap: [AppComponent]
})
export class AppModule { }
