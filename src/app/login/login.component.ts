import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from 'selenium-webdriver'
import { Usuario } from '../models/usuario';
import { UserComponent } from '../user/user.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginserviceService]

})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  public user: Usuario


  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginserviceService) {
    this.user = new Usuario();
  }

  ngOnInit() {


  }

  validateLogin() {
    if (this.user.nome && this.user.pass) {
      this.loginService.validateLogin(this.user).subscribe(result => {
        console.log('result is ', result)
      },
        error => {
          console.log('error is ', error)
        })
    
      }
    else {
      alert('enter username and password')
    }
  }









OnSubmit(){


}















  // doLogin() {
  //   let {
  //     username,
  //     password
  //   } = this.userForm.value
  //   this.loginService.login(username, password).subscribe(data => {
  //     if (data) {
  //       console.log(username)
  //     } else {
  //       alert('Usuário ou senha inválidos!')
  //     }
  //   })
  // }
}