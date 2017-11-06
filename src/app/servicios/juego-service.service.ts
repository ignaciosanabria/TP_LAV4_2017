import { Injectable } from '@angular/core';
import { Juego } from '../clases/juego';
import { JuegoAdivina } from '../clases/juego-adivina';
@Injectable()
export class JuegoServiceService {

  constructor() { }

  public listar(): Array<Juego> {

    let miArray: Array<Juego> = new Array<Juego>();

    miArray.push(new JuegoAdivina("leandro_12@hotmail.com", false));
    miArray.push(new JuegoAdivina("administrador@outlook.com", true));
    miArray.push(new JuegoAdivina("administrador@outlook.com", false));
    miArray.push(new JuegoAdivina("administrador@outlook.com", false));
    miArray.push(new JuegoAdivina("leandro_12@hotmail.com", false));
    miArray.push(new JuegoAdivina("leandro_12@hotmail.com", false));
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
