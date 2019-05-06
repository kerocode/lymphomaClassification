import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';

import { PredictionService } from '../prediction.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

interface ImgFile {
  name: string;
  size: number;
}
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
  imgFile: ImgFile;
  imageSrc: string;
  constructor(private cd: ChangeDetectorRef, private predictionService: PredictionService) { }
  img = ['CLL', 'FL', 'MCL'];
  currentResult = undefined;
  ngOnInit() {
  }

  onFileClick(event) {
    this.currentPhase = Phase.showImg;
    this.showProgress = Phase.showProgress;
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      console.log(file);
      // [this.imgFile.name, this.imgFile.size] = file;
      console.log(this.imgInput);
      reader.readAsDataURL(file);
      reader.onload = () => {
        // const img = new Image(500, 500);
        this.choosenImg.nativeElement.src = reader.result as string;
        this.choosenImg.nativeElement.onload = () => {
          this.showProgress = undefined;
          this.predictionService.predict(this.choosenImg.nativeElement).then(
            result => {
              console.log(result);
              this.currentResult = result;
            });
        }
      };
      reader.onerror = (e) => console.log(e);
    }
  }
  touchInput($event) {
    /*  const [file] = $event.target.files;
      if (file.name === this.imgFile.name && file.size === this.imgFile.size) {
        this.showProgress = undefined;
      }*/
  }
  onSubmit() { }
  chooseImg() {
    this.imgInput.nativeElement.click();
  }
  round(value: number) {
    const num = value * 100;
    return ` ${num.toFixed(3)} %`;
  }
}
