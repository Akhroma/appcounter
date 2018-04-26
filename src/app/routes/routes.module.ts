import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from '../login/login.component';
import { CadastrarComponent } from '../cadastrar/cadastrar.component';


let routes: Routes = [
  
  { path: '',   component: LoginComponent },
  { path: 'cadastrar', component: CadastrarComponent }  
  
]



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class RoutesModule { }
