import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';

const APP_ROUTES: Routes=[
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
];

export const routerModule = RouterModule.forRoot(APP_ROUTES);
