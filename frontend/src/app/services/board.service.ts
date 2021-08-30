import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {    Router  } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private env :string;
  constructor(private _router: Router , private _http: HttpClient) { 
    this.env = environment.APP_URL;
  }

  saveTask(board:any){

  }

  listTask(){

  }

  updateTask(board:any){

  }

  deleteTask(board:any){
    
  }
}
