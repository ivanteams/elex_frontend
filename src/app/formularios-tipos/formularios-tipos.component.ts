// ELEX: SpringBoot3.2 + Angular17.3 -> Paso4: Controlador componente
// Comando: ng generate component formularios-tipos

import { Component, OnInit } from '@angular/core';

// Importaciones propias
import { TiposService } from '../services/tipos.service';
import { Tipos } from '../models/tipos.model';

TiposService

@Component({
  selector: 'app-formularios-tipos',
  // standalone: false,
  templateUrl: './formularios-tipos.component.html',
  styleUrl: './formularios-tipos.component.css'
})

// OJO! Hay que implementar OnInit
export class FormulariosTiposComponent implements OnInit{
  // Atributos generales
  tipos: Tipos[] = []         // Defino array tipos para consulta
  mensaje: string = ""        // Mensaje para el alert

  // Propiedades del formulario
  materia: string = "---"

  // Constructor (inyecto el servicio)
  constructor(private servicio: TiposService) {}

  // Métodos de cargar (consulta) e insertar (inserción)
  cargarTipos(): void {
    this.servicio.consultarTipos().subscribe(datos => {
      this.tipos = datos
    })
  }

  insertarTipo(): void {
    this.servicio.insertarTipo(this.materia).subscribe(resultado => {
      if(resultado) {
        this.mensaje = "Tipo insertado"
        this.cargarTipos()
      }
    })
  }

  // Finalmente ponemos el ngOnInit
  ngOnInit(): void {
      this.cargarTipos()
  }

  // ----------------------------------------
  // NUEVO! ACTUALIZAR Y BORRAR
  // Paso2: Modificar controlador (componente)
  // ----------------------------------------

  // Atributo tipo que usamos para actualizar
  tipoParaActualizar: Tipos | null = null;
  
  actualizarTipoFormulario(): void {
    if (this.tipoParaActualizar && this.materia) {
      this.servicio.actualizarTipo(this.tipoParaActualizar.id, this.materia).subscribe(resultado => {
        this.mensaje = "Tipo actualizado";
        this.cargarTipos();
        this.tipoParaActualizar = null;
        this.materia = '---';
      });
    }
  }

  prepararActualizacion(tipo: Tipos): void {
    this.tipoParaActualizar = tipo;
    this.materia = tipo.materia;
  }

  cancelarActualizacion(): void {
    this.tipoParaActualizar = null;
    this.materia = '---'; // O el valor por defecto que prefieras
  }

  // Y el borrado...
  borrarTipo(id: number): void {
    if (confirm("¿Estás seguro de querer borrar este tipo?")) {
      this.servicio.borrarTipo(id).subscribe(() => {
        this.mensaje = "Tipo borrado";
        this.cargarTipos();
      });
    }
  }
}
