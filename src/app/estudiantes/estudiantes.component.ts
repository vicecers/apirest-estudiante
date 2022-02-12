import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  titulo:string="Lista de estudiantes";
  prueba:string="Esto es una prueba de mi componente estudiante";

  constructor() { }

  ngOnInit(): void {
  }

}
