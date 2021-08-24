import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { FooterComponent } from './home/footer/footer.component';
import { ListTaskComponent } from './board/list-task/list-task.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { RegisterUserComponent } from './admin/register-user/register-user.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { RegisterRoleComponent } from './admin/register-role/register-role.component';
import { UpdateRolComponent } from './admin/update-rol/update-rol.component';

import { UserService } from "./services/user.service";
import { RoleService } from "./services/role.service";
import { BoardService } from "./services/board.service";
import {TokenInterceptorService  } from "./services/token-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    ListTaskComponent,
    ListUserComponent,
    RegisterUserComponent,
    UpdateUserComponent,
    RegisterRoleComponent,
    UpdateRolComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService,RoleService,BoardService,TokenInterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
