import { Component, OnInit } from '@angular/core';
import { BoardService } from "../../services/board.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
@Component({
  selector: 'app-shared-boards',
  templateUrl: './shared-boards.component.html',
  styleUrls: ['./shared-boards.component.css']
})
export class SharedBoardsComponent implements OnInit {
  public user:any;
  public ruta:any;
  public id:any;
  public ids:any;
  public SharedBoards:any;
  constructor(public boardService: BoardService , private route: ActivatedRoute,) { 
    this.user = {};
    this.ruta = {};
    this.id={};
    this.ids="";
    this.SharedBoards={}
  }

  ngOnInit(): void {
    console.log(this.route.params);
    this.ruta = this.route.params;
    this.id=this.ruta._value;
    console.log(this.id._id)
    this.ids=this.id._id
    console.log(this.ids)
    
   this.boardService.listSharedTask(this.ids).subscribe(
     (res)=>{
       console.log(res)
        this.SharedBoards = res.board;
        console.log(this.SharedBoards)  
     }
   )
    
  }

  

}
