import { Injectable } from '@angular/core';
import { HttpInterceptor} from "@angular/common/http";
import { UserService } from "./user.service";


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private_userService:UserService) { }
  //del request interceptamos el token
  intercept(req:any, next: any){
    
  }
}
