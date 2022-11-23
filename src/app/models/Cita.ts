export class Cita{
  emit(cita: Cita) {
    throw new Error('Method not implemented.');
  }
  nombre:string;
  fecha:string;
  hora:string;
  sintomas:string;

  constructor(n: string, f: string, h: string, s: string){
    this.nombre= n;
    this.fecha= f;
    this.hora= h;
    this.sintomas= s;
  }
  }
