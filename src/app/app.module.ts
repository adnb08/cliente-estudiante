import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Routes, RouterModule  } from '@angular/router';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { FormEstudianteComponent } from './estudiantes/form-estudiante.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [

  { path: '', redirectTo: '/estudiantes', pathMatch: 'full' },
  { path: 'estudiantes', component: EstudiantesComponent },
  { path: 'estudiantes/form', component: FormEstudianteComponent },
  { path: 'estudiantes/form/:id', component: FormEstudianteComponent }
  
  
];


@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    FormEstudianteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule 

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
