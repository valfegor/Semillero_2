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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginData: any;
  public message: string;
  public horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  public VerticalPosition: MatSnackBarVerticalPosition = 'top';
  public duratioInseconds: number;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _snackbar: MatSnackBar
  ) { 
    this.loginData = "";
    this.message = '';
    this.duratioInseconds = 2;
  }

  ngOnInit(): void {
  }

  login(){
    if (
      !this.loginData.email ||
      !this.loginData.password
    ) {
      console.log('Failed process:imcomplete data');
      this.message = 'Failed process:imcomplete data';
      this.openSnackBarError();
      this.loginData = {};
    } else {
      //servicio de usuario el subscribe es como el trycach
      this._userService.login(this.loginData).subscribe(
        (res) => {
          console.log(res);
          //guardamos en el local storage , para saber que hay un usuario registrado
          localStorage.setItem('token', res.jwtToken);
          //despues los redirecciona a guardar su primera tarea
          this._router.navigate(['/listTask']);


          //despues de todo debe quedar vacio de nuevo
          this.loginData= {};

          
        },
        (err)=>{
          console.log(err);
          this.message=err.error;
          this.openSnackBarError();
        }
      );
    } 
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
