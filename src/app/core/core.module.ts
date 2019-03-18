import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {CoreService} from './core.service';
import { LayoutDefaultComponent } from './layout/layout-default/layout-default.component';
import { LayoutCleanComponent } from './layout/layout-clean/layout-clean.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
    ],
    declarations: [
        LayoutDefaultComponent,
        LayoutCleanComponent
    ],
    providers: [
        CoreService,
    ]
})
export class CoreModule {
}
