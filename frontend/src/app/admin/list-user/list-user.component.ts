import { Component, OnInit } from '@angular/core';
import {BoardService  } from "../../services/board.service";

import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  public taskData: any;
  constructor(private boardService: BoardService , private _userService: UserService) {

    this.taskData = {}
   }
   
  ngOnInit(): void {
    this._userService.getUsers().subscribe(
      (res)=>{
       
        
        this.taskData = res.users;
        console.log(this.taskData);
       
      },
      (err)=>{
        console.log(err);
        
      }
    )
  }
  }

  


function getUsers() {
  throw new Error('Function not implemented.');
}

