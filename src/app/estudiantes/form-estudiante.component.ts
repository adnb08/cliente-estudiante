import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from './estudiante';
import { EstudianteService } from './estudiante.service';

@Component({
  selector: 'app-form-estudiante',
  templateUrl: './form-estudiante.component.html',
  styleUrls: ['./form-estudiante.component.css']
})
export class FormEstudianteComponent implements OnInit {

  estudiante:Estudiante=new Estudiante();
  

  constructor(private estudianteService:EstudianteService, private router:Router, private activateRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.cargar();
  }

  create():void{
    console.log(this.estudiante)
    this.estudianteService.create(this.estudiante).subscribe(res=>this.router.navigate
      (['/estudiantes']))
    
  }

  cargar():void{
    this.activateRoute.params.subscribe(
    e=>{
        let id=e['id'];
        if(id){
          this.estudianteService.get(id).subscribe(
            es=>this.estudiante=es);
        }
    }
    )
  }


  update():void{
    this.estudianteService.update(this.estudiante).subscribe(
      res=>this.router.navigate(['/estudiantes'])
    )
  }


  

}
