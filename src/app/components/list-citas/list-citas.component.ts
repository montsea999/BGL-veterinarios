import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent implements OnInit {
  //Inp 2
@Input() listadoCitasI:any;
@Output() citaaeliminar = new EventEmitter<number>();


  constructor() {   }
  ngOnInit(): void {    }

  eliminaCita(index:number){
this.citaaeliminar.emit(index);
  }
}
