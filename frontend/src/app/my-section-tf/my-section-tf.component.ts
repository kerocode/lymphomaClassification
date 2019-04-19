import { Component, OnInit } from '@angular/core';
import { PicModalComponent } from '../pic-modal/pic-modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-my-section-tf',
  templateUrl: './my-section-tf.component.html',
  styleUrls: ['./my-section-tf.component.css']
})
export class MySectionTfComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(url): void {
    if (!this.isMobileDevice()) {
      let dialogRef = this.dialog.open(PicModalComponent, {
        width: '75%',
        height: '75%',
        data: { url }
      });
    }
  }
  isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  };
}