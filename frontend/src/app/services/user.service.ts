import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {    Router  } from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private env: string;
  //cuando en los constructores se inicializa o se crea la variable para un modulo se coloca _ esta variable es la que se va a interpretar
  constructor(private _http: HttpClient , private _router: Router) {
    //cuando utilicemos la variable env va a ser igual a este archivo la propiedad app.url
    this.env = environment.APP_URL;
  }

  //metodos
  //va a llegar un json de la parte del formulario

  //consmir api , devuelve cualquier tipo de dato,
  //despues del any se coloca la url
  //los datos vienen del register component
  //el servicio recibe el json voy a hacer un porotocolo http quiero
  //this._http.post
  //user/registerUser lo estamos creando this.env = 'https://localhost:3001/api/'
  regiserUser(user: any) {
    return this._http.post<any>(this.env + 'user/registerUser', user);
  }

  login(user: any) {
    return this._http.post<any>(this.env + 'user/login', user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    //obtenemos el toquen del localStorage
    return localStorage.getItem('token');
  }
}
