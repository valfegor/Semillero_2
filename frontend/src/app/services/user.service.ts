import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private env:string;
  //cuando en los constructores se inicializa o se crea la variable para un modulo se coloca _ esta variable es la que se va a interpretar
  constructor(private _http:HttpClient) { 
    //cuando utilicemos la variable env va a ser igual a este archivo la propiedad app.url
    this.env = environment.APP_URL
  }

  //metodos

  regiserUser(){
    
  }
}
