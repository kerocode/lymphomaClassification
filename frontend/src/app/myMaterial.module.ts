import { MatButtonModule, MatCheckboxModule, MatTooltipModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatTooltipModule],
    exports: [MatButtonModule, MatCheckboxModule, MatTooltipModule],
})
export class MyMaterialModule { }