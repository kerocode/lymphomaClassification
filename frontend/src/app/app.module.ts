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
import { FormsModule } from '@angular/forms';
import { PredictionService } from './prediction.service';
import { PicModalComponent } from './pic-modal/pic-modal.component';
import { HowToComponent } from './how-to/how-to.component';
import { PredictSectionComponent } from './predict-section/predict-section.component';
import { MyFooterComponent } from './my-footer/my-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyAboutComponent,
    MySectionTfComponent,
    MyGameComponent,
    PicModalComponent,
    HowToComponent,
    PredictSectionComponent,
    MyFooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MyMaterialModule,
    AppRoutingModule
  ],
  entryComponents: [
    PicModalComponent
  ],
  providers: [PredictionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
