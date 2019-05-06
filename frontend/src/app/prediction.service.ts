import { Injectable, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  model: tf.LayersModel;
  async ngOnInit() {
    await this.loadModel();
  }

  constructor() { }
  randomNumber(num: number): number {
    return Math.floor(Math.random() * num);
  }

  toTensor(image: HTMLImageElement) {
    let img = tf.browser.fromPixels(image, 3);
    img = tf.cast(img, 'float32');
    img = tf.image.resizeBilinear(img, [36, 36]);
    img = img.div(255.0);
    const img4d = tf.reshape(img, [-1, 36, 36, 3]);
    return img4d;
  }
  async predict(image: HTMLImageElement) {
    let predict = [];
    if (this.model === undefined) {
      await this.loadModel();
    }
    await tf.tidy(() => {
      const imgTensor = this.toTensor(image);
      // Make and format the predications
      const output = this.model.predict(imgTensor) as any;
      console.log(output.print());
      // Save predictions on the component
      predict = Array.from(output.dataSync());
    });
    return predict;
  }
  async loadModel() {
    this.model = await tf.loadLayersModel('assets/ml/model.json');
  }
}
