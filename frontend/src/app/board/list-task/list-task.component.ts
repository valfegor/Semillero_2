import { Component, OnInit } from '@angular/core';
//import del servicio del usuario.
import { BoardService } from '../../services/board.service';
//se importa el router por que se va a comunicar por medio de rutas.
import { Router } from '@angular/router';
//traemos el snapbar por que este nos va a mostrar ciertos mensajes
//es una barra de mensajes
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  public taskData: any;
  public message: string;
  public horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  public VerticalPosition: MatSnackBarVerticalPosition = 'top';
  public duratioInseconds: number;


  constructor(private _boardService: BoardService,
    private _router: Router,
    private _snackbar: MatSnackBar) {

      this.message = "";
    this.duratioInseconds = 2;
    this.taskData = {}
    
   }

  ngOnInit(): void {
    this._boardService.listTask().subscribe(
      (res)=>{
        console.log(res);
        this.taskData = res.board;
      },
      (err)=>{
        console.log(err);
        this.message = err.error;
        this.openSnackBarError();
      }
    )
  }

  updateTask(board:any,status:string){}

  deleteTask(board:any){}


  openSnackBarSuccesfull() {
    //this.messague = por que ha estado cambiando , {} = CONFIGURACIONES DE LA BARRA , propiedad de la duracion 
    this._snackbar.open(this.message,'X',{
      horizontalPosition:this.horizontalPosition,
      verticalPosition:this.VerticalPosition,
      duration:this.duratioInseconds*1000,
      panelClass:['style-snackBarTrue']
    });
  }

  openSnackBarError() {
    this._snackbar.open(this.message,'X',{
      horizontalPosition:this.horizontalPosition,
      verticalPosition:this.VerticalPosition,
      duration:this.duratioInseconds*1000,
      panelClass:['style-snackBarFalse']
    });
  }
}
