import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routing} from './auth-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        routing,
        CommonModule,
        FormsModule,
    ],
    declarations: []
})
export class AuthModule {
}
