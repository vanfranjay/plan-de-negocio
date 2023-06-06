import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeEsBo from '@angular/common/locales/es-BO';

registerLocaleData(localeEsBo, 'es-BO');


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-BO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
