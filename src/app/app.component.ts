import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private menuCtrl: MenuController) {}

  irA(pagina: string) {
    this.router.navigate([`/${pagina}`]);

    // Ocultar el menú solo cuando no estás en la página Home
    if (pagina !== 'home') {
      this.menuCtrl.enable(false, 'menuPrincipal');
      this.menuCtrl.close('menuPrincipal');
    }
  }
}
