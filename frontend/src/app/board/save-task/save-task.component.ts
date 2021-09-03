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
  selector: 'app-save-task',
  templateUrl: './save-task.component.html',
  styleUrls: ['./save-task.component.css'],
})
export class SaveTaskComponent implements OnInit {
  public registerBoard: any;
  public registerData: any;
  public message: string;
  public horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  public VerticalPosition: MatSnackBarVerticalPosition = 'top';
  public duratioInseconds: number;
  selectedFile: any;

  constructor(
    private _boardService: BoardService,
    private _router: Router,
    private _snackbar: MatSnackBar
  ) {
    this.message = '';
    this.duratioInseconds = 2;
    this.registerData = {};
    //aqui se guarda la imagen desde la pagina
    this.selectedFile = null;
    this.registerBoard= {}
  }

  ngOnInit(): void {}

  uploadImg(event: any) {
    //viene de un evento donde se hace target , en la posicion 0 por que solo va a subir 1 archivo
    this.selectedFile = <File>event.target.files[0];
  }

  saveTaskImg() {
    //validamos que lleguen los datos
    if (!this.registerData.name || !this.registerData.description) {
      console.log('Failed process:incomplete data');
      this.message = 'Failed process:imcomplete data';
      this.openSnackBarError();
      this.registerData = {};
    } else {
      const data = new FormData();
      if(this.selectedFile !=null){
        data.append('image',this.selectedFile , this.selectedFile.name);
      }
      
      data.append('name',this.registerData.name);
      data.append('description',this.registerData.description)
      //servicio de usuario el subscribe es como el trycach
      this._boardService.saveTaskImg(data).subscribe(
        (res) => {
          console.log(res);
          //guardamos en el local storage , para saber que hay un usuario registrado

          //despues los redirecciona a guardar su primera tarea
          this._router.navigate(['/listTask']);

          this.message = 'Succesfull Task Registration';

          this.openSnackBarSuccesfull();

          //despues de todo debe quedar vacio de nuevo
          this.registerData = {};
        },
        (err) => {
          console.log(err);
          this.message = err.error;
          this.openSnackBarError();
        }
      );
    }
  }

  saveBoard(){
    if(!this.registerBoard.name || !this.registerBoard.description){
      this.message = "Check the camps"
      this.openSnackBarError();
    }else{
      this._boardService.generateBoards(this.registerBoard).subscribe(
        (res)=>{
          console.log(res);
          this.message="Succes";
          this.openSnackBarSuccesfull();
        }
      )
    }
  }

  saveTask() {
    //validamos que lleguen los datos
    if (!this.registerData.name || !this.registerData.description) {
      console.log('Failed process:incomplete data');
      this.message = 'Failed process:imcomplete data';
      this.openSnackBarError();
      this.registerData = {};
    } else {
      //servicio de usuario el subscribe es como el trycach
      this._boardService.saveTask(this.registerData).subscribe(
        (res) => {
          console.log(res);
          //guardamos en el local storage , para saber que hay un usuario registrado

          //despues los redirecciona a guardar su primera tarea
          this._router.navigate(['/listTask']);

          this.message = 'Succesfull Task Registration';

          this.openSnackBarSuccesfull();

          //despues de todo debe quedar vacio de nuevo
          this.registerData = {};
        },
        (err) => {
          console.log(err);
          this.message = err.error;
          this.openSnackBarError();
        }
      );
    }
  }

  openSnackBarSuccesfull() {
    //this.messague = por que ha estado cambiando , {} = CONFIGURACIONES DE LA BARRA , propiedad de la duracion
    this._snackbar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.VerticalPosition,
      duration: this.duratioInseconds * 1000,
      panelClass: ['style-snackBarTrue'],
    });
  }

  openSnackBarError() {
    this._snackbar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.VerticalPosition,
      duration: this.duratioInseconds * 1000,
      panelClass: ['style-snackBarFalse'],
    });
  }
}
