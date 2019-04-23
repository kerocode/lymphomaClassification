import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';

import { PredictionService } from '../prediction.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
enum Phase {
  showImg = 'SHOWIMG',
  showProgress = 'SHOWPROGRESS',
  showResult = 'SHOWRESULT'
}
@Component({
  selector: 'app-predict-section',
  templateUrl: './predict-section.component.html',
  styleUrls: ['./predict-section.component.css'],
  animations: [
    trigger('enterPhase', [
      state('fadeIn', style({
        opacity: '1',
      })),
      transition('*=>fadeIn', [style({ opacity: '0' }), animate('300ms')])
    ]),
    trigger('checkMark', [
      state(':done', style({
        transform: 'rotate(0deg) scale(1)'
      })),
      transition(':enter', [style({ transform: 'rotate(20deg) scale(1.2)' }), animate('500ms')])
    ]),
  ]
})
export class PredictSectionComponent implements OnInit {
  @ViewChild('imgInput') imgInput: ElementRef<HTMLInputElement>;
  @ViewChild('choosenImg') choosenImg: ElementRef<HTMLImageElement>;
  currentPhase;
  showProgress: string;
  Phase: typeof Phase = Phase;
  imageSrc: string;
  constructor(private cd: ChangeDetectorRef, private predictionService: PredictionService) { }

  ngOnInit() {

  }

  onFileChange(event) {
    this.currentPhase = Phase.showImg;
    this.showProgress = Phase.showProgress;
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      console.log(this.imgInput);
      reader.onload = () => {
        // const img = new Image(500, 500);
        this.choosenImg.nativeElement.src = reader.result as string;
        this.predictionService.predict(this.choosenImg.nativeElement).then(
          result => {
            console.log(result);
            this.showProgress = undefined;
          });
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }
  onSubmit() { }
  chooseImg() {
    this.imgInput.nativeElement.click();
  }
}
