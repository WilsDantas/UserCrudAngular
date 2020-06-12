import { Sexo } from './sexo.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SexoService {


  private baseUrlApi = "http://62.171.164.29:9090/api/requisicoes/"

  private configHeader = {
    headers: new HttpHeaders({
      'Authorization': 'ji989sa--dk876dls955dsjfc8KKmvcc',
      'Content-Type': 'application/json; charset=utf-8'
    })
  }

  constructor(private http: HttpClient) { }

  getSexo():Observable<Sexo>{
    var urlApi = `${this.baseUrlApi}sexo/listar`
    return this.http.get<Sexo>(urlApi, this.configHeader)
  }

}
