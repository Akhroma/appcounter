import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from 'selenium-webdriver'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;



  constructor(private formBuilder: FormBuilder,
    private loginService: LoginserviceService) { }

  ngOnInit() {

  }

  doLogin() {
    let {
      username,
      password
    } = this.userForm.value
    this.loginService.login(username, password).subscribe(data => {
      if (data) {
      } else {
        alert('Usuário ou senha inválidos!')
      }
    })
  }
}