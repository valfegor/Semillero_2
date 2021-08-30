import { Injectable } from '@angular/core';
import { HttpInterceptor} from "@angular/common/http";
import { UserService } from "./user.service";


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private _userService:UserService) { }
  //del request interceptamos el token
  intercept(req:any, next: any){
    //voy a clonar el request es decir en json que es lo que quiero sacar.
    //clonar solo el token
      const tokenReq = req.clone({
        setHeader:{
          Authorization:'Bearer ' + this._userService.getToken(),
        }
      });
      //siempre se coloca el handle= hande = resolver
      return next.handle(tokenReq)
  }
}
