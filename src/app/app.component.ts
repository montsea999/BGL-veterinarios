import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //Out 1
  listCitas: any[] = [];
  //Out 2
  agregarCita(cita: any) {
    console.log('soy el padre');
    console.log(cita);

    this.listCitas.push(cita);
    //Out 6
    console.log(this.listCitas);
  }

  eliminarcitadelArray(index: number) {
    this.listCitas.splice(index, 1);
  }
}
