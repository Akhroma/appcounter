import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { RoutesModule } from './routes/routes.module'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastrarComponent   
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutesModule,
    HttpModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
