import { Injectable, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Injectable({
  providedIn: 'root'
})
export class PredictionService implements AfterViewInit {
  ngAfterViewInit(): void {
    // this.loadModel().then(model => this.model = model);
  }
  ngOnInit(): void {
    //this.loadModel().then(model => this.model = model);
  }
  model: tf.LayersModel;
  constructor() {
    // this.loadModel().then(model => this.model = model);
  }
  randomNumber(num: number): number {
    return Math.floor(Math.random() * num);
  }

  toTensor(image: HTMLImageElement) {
    let img = tf.browser.fromPixels(image, 3);
    img = tf.image.resizeBilinear(img, [25, 25]);
    const img4d = tf.reshape(img, [-1, 25, 25, 3])
    return tf.cast(img4d, 'float32');
  }
  async predict(image: HTMLImageElement): Promise<Array<number>> {
    return new Promise((resolve, reject) => {
      try {
        tf.tidy(() => {
          const imgTensor = this.toTensor(image);
          if (this.model === undefined) {
            this.loadModel().then(model => this.model = model).then(() => {
              // Make and format the predications
              const output = this.model.predict(imgTensor) as any;
              // Save predictions on the component
              resolve(Array.from(output.dataSync()));
            });
          } else {
            // Make and format the predications
            const output = this.model.predict(imgTensor) as any;
            // Save predictions on the component
            resolve(Array.from(output.dataSync()));
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }
  async loadModel() {
    return await tf.loadLayersModel('assets/ml/model.json');
  }
}
