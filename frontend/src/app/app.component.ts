import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { ScrollToService } from './scroll-to.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('aboutSec') about: ElementRef<HTMLInputElement>;
  ngAfterViewInit(): void {
    this.scrollService.subScrollElementFun(this.scrollTo);
  }
  constructor(private scrollService: ScrollToService) {

  }
  scrollTo(id: string): void {
    const ele = document.getElementById(id);
    ele.scrollIntoView({
      behavior: "smooth", 
      block: "end", 
      inline: "nearest"
    });
  }
}
