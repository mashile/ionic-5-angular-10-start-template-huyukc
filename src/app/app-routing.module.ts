import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PagesComponent} from './pages/pages.component';

const routes: Routes = [
  {path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {path: '', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'pages', component:PagesComponent}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
