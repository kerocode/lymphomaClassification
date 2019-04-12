import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  constructor() { }
  randomNumber(num: number): number {
    return Math.floor(Math.random() * num);
  }
}
