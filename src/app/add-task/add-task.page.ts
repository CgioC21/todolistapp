import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-add-task',
  templateUrl: 'add-task.page.html',
  styleUrls: ['add-task.page.scss'],
})
export class AddTaskPage {
  nuevaTarea: any = {};  // Agrega esta línea para inicializar nuevaTarea

  constructor(private router: Router, private menuCtrl: MenuController) {}

  agregarTarea() {
    // Implementa la lógica para agregar la tarea
  }
}
