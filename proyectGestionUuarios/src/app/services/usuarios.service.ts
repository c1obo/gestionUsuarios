import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }
  getUsuarios() {
    let header = new HttpHeaders()
      .set('Type-content', 'application/json')

    return this.http.get("/usuarios/usuario?page=1", {
      headers: header
    });

  }
}
