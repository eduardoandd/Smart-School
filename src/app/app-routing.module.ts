import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProfessoresComponent } from './professores/professores.component';

const routes: Routes = [
  {path:'',redirectTo:'dashBoard', pathMatch:'full'},
  {path: 'professores', component: ProfessoresComponent},
  {path: 'alunos', component:AlunosComponent},
  {path: 'perfil', component:PerfilComponent},
  {path: 'dashBoard', component:DashBoardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
