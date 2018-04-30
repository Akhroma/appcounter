import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { routes } from './routes/routes.module'
import { HttpModule } from '@angular/http'
import { FormsModule, FormBuilder, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginserviceService } from './loginservice.service'
import { ServicesService } from './services.service'
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { CadastroService } from './cadastro.service';
import { UserComponent } from './user/user.component';






@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    HeaderComponent,
    LoginComponent,
    UserComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    HttpClientModule,


  ],
  providers: [
    LoginserviceService,
    ServicesService,
    CadastroService,





  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
