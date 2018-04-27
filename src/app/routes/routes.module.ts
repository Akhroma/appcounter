import { Routes } from '@angular/router'
import { LoginComponent } from '../login/login.component';
import { CadastrarComponent } from '../cadastrar/cadastrar.component';
import { HeaderComponent } from '../header/header.component';


export const routes: Routes = [
  
  { path: '',   component: LoginComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'header', component: HeaderComponent}  
  
]



