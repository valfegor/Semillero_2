import { Component, OnInit } from '@angular/core';
//import del servicio del usuario.
import { UserService } from '../../services/user.service';
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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  //aqui van las variables globales
  /*
  public = cualquier archivo que invoque
  private = solo este archivo va a utilizar esta variable o este metodo
  si no se agrega nada las variables deben ser publicas
  */
  public message: string;
  public horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  public VerticalPosition: MatSnackBarVerticalPosition = 'top';
  //son items que necesito que se construyan antes de que se arme el archivo , el constuctor amrama ,
  constructor(
    private _userService: UserService,
    private _router: Router,
    private _snackbar: MatSnackBar
  ) {
    //antes de que se construya el archivo la inicializo
    this.message = '';
    //mensajehorizontal
  }

  //significa que cuando se ejecute el archivo y las propiedades del archivo el codigo que este adentro se va a ejecutar cuando cargue el archivo , ejemplo que las tareas se listen apenas inicie sesion
  ngOnInit(): void {}

  registerUser(){

  }

  openSnackBarSuccesfull(){

  }

  openSnackBarError(){
    
  }
}
