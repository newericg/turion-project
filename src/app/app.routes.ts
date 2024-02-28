import { Routes } from '@angular/router';
import { MainPageComponent } from './interfaces/main-page/main-page.component';
import { FormValuesComponent } from './interfaces/form-values/form-values.component';

export const routes: Routes = [
    {
        path: '',
        title: '',
        component: MainPageComponent,
    },
    // {
    //     path: '/',
    //     title: '',
    //     component: FormValuesComponent,
    // },

];
