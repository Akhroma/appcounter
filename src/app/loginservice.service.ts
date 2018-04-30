
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from './environment';
import { Usuario } from './models/usuario'


@Injectable()
export class LoginserviceService {
  userAuthenticated: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private http: HttpClient) { }

  isLogged() : boolean {
    const user = localStorage.getItem('user')
    
    if (!user) {
      return false
    }

    return true
  }

  validateLogin(user: Usuario){
    console.log(user.nome+' entrou aqui '+ user.pass)
    return this.http.post(environment.apiUrl,{
      username: user.nome,
      password: user.pass
      
    })
  }










  // login(username: string, password: string) : Observable<boolean> {    
  //   return this.http.get(`${environment.apiUrl}/users?username=${username}&password=${password}`)
  //     .map((data: any[]) => {
  //       const userIsLogged = data.length > 0;       

  //       this.userAuthenticated.emit(userIsLogged)

  //       if (userIsLogged) {
  //         const user = data.pop()
  //         delete user.password
  //         localStorage.setItem('user', JSON.stringify(user))
  //       }

  //       return userIsLogged;
  //     })
  // }

  // logout() {
  //   localStorage.removeItem('user')
  //   this.userAuthenticated.emit(false)
  // }

}
