import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { routes } from './routes/routes.module'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginserviceService } from './loginservice.service'
import { ServicesService } from './services.service'





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastrarComponent,
    HeaderComponent   
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
   
  ],
  providers: [LoginserviceService,
              ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
