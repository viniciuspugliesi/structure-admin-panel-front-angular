import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LayoutCleanComponent} from './core/layout/layout-clean/layout-clean.component';

const routes: Routes = [
    // { path: '', },
    // {
    //     path: 'auth', data: {base: true}, component: LayoutCleanComponent, canActivate: [RedirectIfAuthenticatedGuard], children: [
    //         {path: '', loadChildren: './modules/'},
    //     ]
    // },
    {
        path: 'error', data: {base: true}, component: LayoutCleanComponent, children: [
            {path: '', loadChildren: './modules/errors/error.module#ErrorModule'},
        ]
    },
    {path: '**', redirectTo: '/error/404'},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule {
}
