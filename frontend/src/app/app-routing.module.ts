import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { RegisterRoleComponent } from './admin/register-role/register-role.component';
import { UpdateRoleComponent } from './admin/update-role/update-role.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { ListTaskComponent } from './board/list-task/list-task.component';
import { SaveTaskComponent } from './board/save-task/save-task.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';

const routes: Routes = [
  {
    path: '', //en la ruta inicial de la pagina ''
    component: LoginComponent, //cargara el componente de login
    pathMatch: 'full', //debe escribir completa la url
  },
  {
    path: 'listTask',
    component: ListTaskComponent,
    pathMatch: 'full',
  },
  {
    path: 'saveTask',
    component: SaveTaskComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'signUp',
    component: RegisterComponent,
    pathMatch: 'full',
  },
  {
    path: 'listUser',
    component: ListUserComponent,
    pathMatch: 'full',
  },
  {
    path: 'registerUser',
    component: RegisterComponent,
    pathMatch: 'full',
  },
  {
    path: 'updateUser',
    component: UpdateUserComponent,
    pathMatch: 'full',
  },
  {
    path: 'registerRole',
    component: RegisterRoleComponent,
    pathMatch: 'full',
  },
  {
    path: 'listRole',
    component: ListRoleComponent,
    pathMatch: 'full',
  },
  {
    path: 'updateRole',
    component: UpdateRoleComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}