import { Component, OnInit } from '@angular/core';
enum Status{ 
  ShowImage=0,
  ShowButton=1,
  ShowProgress=2
  } 

@Component({
  selector: 'app-my-game',
  templateUrl: './my-game.component.html',
  styleUrls: ['./my-game.component.css']
})
export class MyGameComponent implements OnInit {
  imagePath = ['FL', 'CLL', 'MCL'];
  currentStatus;
  Status : typeof Status = Status;
  imageUrl:string;
  constructor() { }

  ngOnInit() {
  }
  randomNumber(num:number): number {
    return Math.floor(Math.random() * num);
  }
  randomSelection(): void {
    const labelName = this.imagePath[this.randomNumber(this.imagePath.length)];
    const imageName = this.randomNumber(10)+1;
    this.imageUrl = `assets/img/${labelName}/${imageName}.jpeg`;
    this.currentStatus = Status.ShowImage;
  }
}
