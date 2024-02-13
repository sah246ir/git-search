import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
export const routes: Routes = [
    {
        component:HomeComponent,
        path:''
    },
    {
        component:HomeComponent,
        path:'search'
    },
    {
        component:RepositoriesComponent,
        path:'search/:uname'
    }
];
