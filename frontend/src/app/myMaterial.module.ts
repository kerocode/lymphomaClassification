import {
    MatButtonModule, MatCheckboxModule, MatTooltipModule, MatRadioModule, MatDialogModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatTooltipModule, MatRadioModule, MatDialogModule, MatProgressSpinnerModule,
        MatProgressBarModule],
    exports: [MatButtonModule, MatCheckboxModule, MatTooltipModule, MatRadioModule, MatDialogModule,
        MatProgressSpinnerModule, MatProgressBarModule],
})
export class MyMaterialModule { }