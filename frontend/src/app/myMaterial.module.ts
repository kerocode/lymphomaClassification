import { MatButtonModule, MatCheckboxModule, MatTooltipModule, MatRadioModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatTooltipModule, MatRadioModule],
    exports: [MatButtonModule, MatCheckboxModule, MatTooltipModule, MatRadioModule],
})
export class MyMaterialModule { }