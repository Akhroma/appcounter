import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { environment } from './environment'
import { Usuario } from './models/usuario'



@Injectable()
export class CadastroService {

  http: any;
  public static POSTING = 'posting'
  public static CREATED = 'created'

  private savedReq = new Subject<any>();







  constructor(http: HttpClient) { }

  public getUsuario(data: any): any {

    return this.http.get(environment.apiUrl).subscribe(value => {
      value['usuario'] = data.usuario.nome;
    })
  
  }



}
