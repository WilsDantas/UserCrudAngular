import { User } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseUrlApi = "http://62.171.164.29:9090/api/requisicoes/"

  private configHeader = {
    headers: new HttpHeaders({
      'Authorization': 'ji989sa--dk876dls955dsjfc8KKmvcc',
      'Content-Type': 'application/json; charset=utf-8'
    })
  }

  constructor(private http: HttpClient) { }


  showUsers(): Observable<User[]> {
    var urlApi = `${this.baseUrlApi}cadastro/listar`;
    return this.http.get<User[]>(urlApi, this.configHeader);
  }

  createUser(user: User): Observable<User> {
    var urlApi = `${this.baseUrlApi}cadastro/incluir`;

    return this.http.post<User>(urlApi, user, this.configHeader)
  }

  ShowByIdUser(id: String): Observable<User> {
    var urlApi = `${this.baseUrlApi}cadastro/obter/${id}`;
    
    return this.http.get<User>(urlApi, this.configHeader)
  }

  UpdateUser(user: User): Observable<User> {
    var urlApi = `${this.baseUrlApi}cadastro/atualizar/${user.id}`
    return this.http.put<User>(urlApi, user, this.configHeader)
  }

  DeleteUser(id: Number): Observable<User> {
    var urlApi = `${this.baseUrlApi}cadastro/delete/${id}`;
    return this.http.delete<User>(urlApi, this.configHeader)
  }
}
