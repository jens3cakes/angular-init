import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HkComponent } from './hk/hk.component'
import { PuppyDogsComponent} from './puppyDogs/puppyDogs.component'

@NgModule({
  declarations: [
    AppComponent,
    HkComponent,
    PuppyDogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
