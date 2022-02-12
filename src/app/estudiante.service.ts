import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from './estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private url:string='http://localhost:8080/api/studiantes';

  constructor(private http:HttpClient) { }

  //obtener estudiantes
  getAll():Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(this.url);
  }

//obtener estudiante
 createE(estudiante:Estudiante):Observable<Estudiante>{
  return this.http.post<Estudiante>(this.url, estudiante);
}

//obtener un estudiante
get(id:number):Observable<Estudiante>{
  return this.http.get<Estudiante>(this.url + '/' +);
}

//actualizar estudiante
update(estudiante:Estudiante):Observable<Estudiante>{
  return this.http.put<Estudiante>(this.url, estudiante);
}

//eliminar un estudiante
delete(id:number):Observable<Estudiante>{
  return this.http.delete<Estudiante>(this.url + '/' +);
}




  
}
