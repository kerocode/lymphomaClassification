import { Component, OnInit } from '@angular/core';
import { PredictionService } from '../prediction.service';

enum Status {
  ShowImage = 0,
  ShowButton = 1,
  ShowProgress = 2,
  ShowResult = 3
}
enum GameResult {
  Com = 0,
  User = 1,
  Draw = 2,
  None = 3
}
@Component({
  selector: 'app-my-game',
  templateUrl: './my-game.component.html',
  styleUrls: ['./my-game.component.css']
})
export class MyGameComponent implements OnInit {
  imagePath = ['FL', 'CLL', 'MCL'];
  currentStatus;
  userSelection: number;
  comSelection = 5;
  userScore = 0;
  comScore = 0;
  currentId: number;
  Status: typeof Status = Status;
  GameResult: typeof GameResult = GameResult;
  result: number;
  imageUrl: string;
  constructor(private predictionService: PredictionService) { }

  ngOnInit() {
  }

  randomSelection(): void {
    this.currentId = this.predictionService.randomNumber(this.imagePath.length);
    const labelName = this.imagePath[this.currentId];
    const imageName = this.predictionService.randomNumber(10) + 1;
    this.imageUrl = `assets/img/${labelName}/${imageName}.jpeg`;
    this.currentStatus = Status.ShowImage;
  }
  submitAnswer() {
    this.comSelection = this.predictionService.randomNumber(3);
    if (Number(this.userSelection) === this.currentId && this.comSelection === this.currentId) {
      this.result = GameResult.Draw;
    } else if (Number(this.userSelection) === this.currentId) {
      this.userScore++;
      this.result = GameResult.User;
    } else if (this.comSelection === this.currentId) {
      this.comScore++;
      this.result = GameResult.Com;
    } else {
      this.result = GameResult.None;
    }
    this.currentStatus = Status.ShowResult;
  }
  playAgain() {
    this.currentStatus = Status.ShowImage;
    this.comSelection = 5;
    this.userSelection = undefined;
  }
  quite() {
    this.userScore = 0;
    this.comScore = 0;
    this.comSelection = 5;
    this.currentStatus = Status.ShowButton;
    this.userSelection = undefined;
  }
}
