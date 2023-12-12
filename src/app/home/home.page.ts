import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tareasPendientes: any[] = [];
  tareasCompletadas: any[] = [];

  constructor(private router: Router, private menuCtrl: MenuController) {
    this.cargarTareasEjemplo();
  }

  private cargarTareasEjemplo() {
    // Agregar tareas de ejemplo
    this.tareasPendientes.push({
      titulo: 'Programar proyecto de curso',
      descripcion: 'Desarrollar un sistema de gestión de tareas en Ionic.',
      tipo: 'trabajo',
      completada: false,
    });

    this.tareasPendientes.push({
      titulo: 'Subir la tarea al portal de la universidad',
      descripcion: 'Enviar la tarea desarrollada al portal de la universidad antes de la fecha límite.',
      tipo: 'trabajo',
      completada: false,
    });

    this.tareasPendientes.push({
      titulo: 'Preparar presentación para la clase',
      descripcion: 'Crear una presentación sobre el proyecto de curso para la clase.',
      tipo: 'trabajo',
      completada: false,
    });

    // Tareas completadas de ejemplo
    this.tareasCompletadas.push({
      titulo: 'Entregar proyecto de curso',
      descripcion: 'Proyecto de curso programado en Ionic entregado a tiempo.',
      tipo: 'trabajo',
      completada: true,
    });

    this.tareasCompletadas.push({
      titulo: 'Subir la tarea al portal de la universidad',
      descripcion: 'Tarea enviada al portal de la universidad.',
      tipo: 'trabajo',
      completada: true,
    });

    this.tareasCompletadas.push({
      titulo: 'Presentación para la clase',
      descripcion: 'Presentación sobre el proyecto de curso preparada y presentada.',
      tipo: 'trabajo',
      completada: true,
    });
  }

  // Resto del código...
}
