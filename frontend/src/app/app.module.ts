import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMaterialModule } from './myMaterial.module';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { MySectionTfComponent } from './my-section-tf/my-section-tf.component';
import { MyGameComponent } from './my-game/my-game.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyAboutComponent,
    MySectionTfComponent,
    MyGameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
