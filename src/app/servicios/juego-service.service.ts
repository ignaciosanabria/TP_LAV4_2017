import { Injectable } from '@angular/core';
import { Juego } from '../clases/juego';
import { JuegoAdivina } from '../clases/juego-adivina';
import { JuegoAgilidad } from '../clases/juego-agilidad';
import { JuegoAnagrama} from '../clases/juego-anagrama';
@Injectable()
export class JuegoServiceService {

  constructor() { }

  public listar(): Array<Juego> {

    let miArray: Array<Juego> = new Array<Juego>();

    miArray.push(new JuegoAdivina("Adivina El Numero",false,"administrador@outlook.com"));
    miArray.push(new JuegoAgilidad("Agilidad Aritmetica", true,"administrador@outlook.com"));
    miArray.push(new JuegoAgilidad("Agilidad Aritmetica", true,"administrador@outlook.com"));
    miArray.push(new JuegoAnagrama("Anagrama", false,"leandro_12@hotmail.com"));
    miArray.push(new JuegoAdivina("Agilidad Aritmetica", false,"leandro_12@hotmail.com"));
    miArray.push(new JuegoAnagrama("Anagrama", true,"leandro_12@hotmail.com"));
    miArray.push(new JuegoAnagrama("Anagrama",false,"administrador@outlook.com"));
    miArray.push(new JuegoAdivina("Adivina El Numero",true,"administrador@outlook.com"));
    return miArray;
  }

  public listarPromesa(): Promise<Array<Juego>> {
    let promesa: Promise<Array<Juego>> = new Promise((resolve, reject) => {
      let miArray: Array<Juego> = new Array<Juego>();
      miArray.push(new JuegoAdivina("JuegoPromesa 1", false,"promesa"));
      miArray.push(new JuegoAdivina("PepePromesa", true));
      miArray.push(new JuegoAdivina("JuegoPromesa 3", false));
      miArray.push(new JuegoAdivina("JuegoPromesa 4", false));
      miArray.push(new JuegoAdivina("JuegoPromesa 5", false));
      miArray.push(new JuegoAdivina("JuegoPromesa 6", false));
      resolve(miArray);
    });

    return promesa;
  }

}
