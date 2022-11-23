import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css'],
})
export class CrearCitaComponent implements OnInit {

  nombreF: string = '';
  fechaF: string = '';
  horaF: string = '';
  sintomasF: string = '';

  formularioKO: boolean = false;
//Out 3
 @Output() nuevaCitaOh = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
  agregarCita() {
    if (
      this.nombreF == '' ||
      this.fechaF == '' ||
      this.horaF == '' ||
      this.sintomasF == ''
    ) {
      this.formularioKO = true;
      return;
    } else {
      //creo un objeto con las propiedades de los campos seteados
      const CITA = {
        n: this.nombreF,
        f: this.fechaF,
        h: this.horaF,
        s: this.sintomasF,
      };

//Out 4 le paso el objeto al padre
this.nuevaCitaOh.emit(CITA);

      this.reseteaF();

    }
  }

  reseteaF(){
    this.nombreF='';
    this.fechaF='';
    this.horaF='';
    this.sintomasF='';

  }


}
