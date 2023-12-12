import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-task-list',
  templateUrl: 'task-list.page.html',
  styleUrls: ['task-list.page.scss'],
})
export class TaskListPage {
  tareas: any[] = [];  // Agrega esta línea para inicializar tareas

  constructor(private router: Router, private menuCtrl: MenuController) {}

  verDetalles(tarea: any) {
    // Implementa la lógica para ver los detalles de la tarea
  }
}
