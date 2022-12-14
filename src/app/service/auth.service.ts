import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

    login(userLogin: UserLogin): Observable<UserLogin>{
      return this.http.post<UserLogin>('https://blogpessoalnataliacosta.herokuapp.com/usuarios/logar',userLogin)
    }

    cadastrar(user: User): Observable<User>{
      return this.http.post<User>('https://blogpessoalnataliacosta.herokuapp.com/usuarios/cadastrar',user)
    }

    getByIdUser(id: number): Observable<User>{
      return this.http.get<User>(`https://blogpessoalnataliacosta.herokuapp.com/usuarios/${id}`)

    }

    atualizarUser(user: User): Observable<User> {
      var token = {
        headers: new HttpHeaders().set('Authorization', environment.token)
      }
      return this.http.put<User>('https://blogpessoalnataliacosta.herokuapp.com/usuarios/atualizar', user, token)
    }

    logado(){
      let ok: boolean = false

      if (environment.token != ''){
        ok = true
      }

      return ok 
    }

}

