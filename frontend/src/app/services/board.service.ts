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
    console.log(board);
    
    return this._http.post<any>(this.env+'board/saveTask',board);
  
  }

  listTask(){
    return this._http.get<any>(this.env+'board/listTask');
  }

  updateTask(Xd:any){
    return this._http.put<any>(this.env + 'board/updateTask', Xd); 
  }

  deleteTask(board:any){
    return this._http.delete<any>(this.env + 'board/deleteTask/'+board._id);
  }
}
