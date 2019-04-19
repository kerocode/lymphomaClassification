import {
    MatButtonModule, MatCheckboxModule, MatTooltipModule, MatRadioModule, MatDialogModule,
    MatProgressSpinnerModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatTooltipModule, MatRadioModule, MatDialogModule, MatProgressSpinnerModule],
    exports: [MatButtonModule, MatCheckboxModule, MatTooltipModule, MatRadioModule, MatDialogModule, MatProgressSpinnerModule],
})
export class MyMaterialModule { }