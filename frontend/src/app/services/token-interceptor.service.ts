import { Injectable } from '@angular/core';
import { HttpInterceptor  } from "@angular/common/http";
import { UserService } from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor() { }
}
