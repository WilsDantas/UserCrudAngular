import { Nacionalidade } from './nacionalidade.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NacionalidadeService {

  private baseUrlApi = "http://62.171.164.29:9090/api/requisicoes/"
  
  private configHeader = {
    headers: new HttpHeaders({
      'Authorization': 'ji989sa--dk876dls955dsjfc8KKmvcc',
      'Content-Type': 'application/json; charset=utf-8'
    })
  }

  constructor(private http: HttpClient) { }

  getNacionalidade(): Observable<Nacionalidade> {
    var urlApi = `${this.baseUrlApi}nacionalidade/listar`
    return this.http.get<Nacionalidade>(urlApi, this.configHeader)
  }
}
