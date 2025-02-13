import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Telefono } from './models/telefono';
import { DriverService } from './services/driver.service';
import { Driver } from './models/driver';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
