import { Component, OnInit } from '@angular/core';
import { ScrollToService } from '../scroll-to.service';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {

  constructor(private scrollService: ScrollToService) {
  }

  ngOnInit() {
  }
  scrollTo(el: string) {
    this.scrollService.setNextvalue(el);
  }
}
