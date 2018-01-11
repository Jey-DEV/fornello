import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
{ redirectTo: 'home',  path: '', pathMatch: 'full'},

{ component: HomeComponent, path: 'home'},
];

export const RoutesModule: ModuleWithProviders = RouterModule.forRoot(routes);
