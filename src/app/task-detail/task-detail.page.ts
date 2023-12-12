import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-task-detail',
  templateUrl: 'task-detail.page.html',
  styleUrls: ['task-detail.page.scss'],
})
export class TaskDetailPage {
  tareaSeleccionada: any = {};  // Agrega esta línea para inicializar tareaSeleccionada

  constructor(private router: Router, private menuCtrl: MenuController) {}
}
