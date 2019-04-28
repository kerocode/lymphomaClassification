import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ScrollToService } from './scroll-to.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('about') about: ElementRef<HTMLInputElement>;
  ngOnInit(): void {
    this.scrollService.subScrollElementFun(this.scrollTo);
  }

  constructor(private scrollService: ScrollToService) {

  }
  title = 'tensorflowChatBox';
  scrollTo(el: string): void {
    if (el === 'about') {
      this.about.nativeElement.scrollIntoView();
    }
  }
}
