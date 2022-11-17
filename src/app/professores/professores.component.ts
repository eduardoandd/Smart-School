import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  titulo = 'Professores'
  professores = [
    {nome:'Eduardo'},
    {nome:'Antonio'},
    {nome:'Gabriela'},
    {nome:'Julia'},
    {nome:'Eduarda'},
    {nome:'Vinicius'},
    {nome:'Pedro'},
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
