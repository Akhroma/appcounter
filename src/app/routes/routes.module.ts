import { Routes } from '@angular/router'
import { LoginComponent } from '../login/login.component';
import { CadastrarComponent } from '../cadastrar/cadastrar.component';
import { HeaderComponent } from '../header/header.component';
import { UserComponent } from '../user/user.component';




export const routes: Routes = [
  
  { path: '', component: LoginComponent },
  { path: 'cadastrar', component: CadastrarComponent,
  children: [{ path: '', component: CadastrarComponent }]},
  { path: 'login', component: UserComponent,
  children: [{ path: '', component: LoginComponent }]},
  { path: 'header', component: HeaderComponent},

  { path: '',   redirectTo: '/login', pathMatch: 'full' },  
  
]



