import { Juego } from '../clases/juego'
export class JuegoAnagrama extends Juego
{
  arrayAnagrama : Array<any> = [
   {
    "palabra": "ADERABN",
    "correcta" : "BANDERA"
   },
   {
    "palabra": "LANOBI",
    "correcta" : "ALBINO"
   },

   {
    "palabra": "RESAP",
    "correcta" : "PERAS"
   },

   {
    "palabra": "NTRE",
    "correcta" : "TREN"
   },
   {
    "palabra": "BUFÓLT",
    "correcta" : "FUTBÓL"
   },
   {
    "palabra": "TENMA",
    "correcta" : "MENTA"
   },
   {
    "palabra": "APLEOT",
    "correcta" : "PELOTA"
   },
   {
    "palabra": "ZECVREA",
    "correcta" : "CERVEZA"
   },
   {
    "palabra": "SÚCIMA",
    "correcta" : "MÚSICA"
   },

   {
    "palabra": "UPERTA",
    "correcta" : "PUERTA"
   },

   {
    "palabra": "MJANO",
    "correcta" : "JAMON"
   },

   {
    "palabra": "SEUQO",
    "correcta" : "QUESO"
   }];
  palabraDesorganizada : string;
  palabraCorrecta : string;
  palabraIngresada : string;

  constructor(nombre?: string, gano?: boolean, jugador?:string) {
    super("Anagrama",gano,jugador);  
  }

  public verificar()
  {
   if(this.palabraIngresada == this.palabraCorrecta)
    {
        this.gano = true;
    }
    if (this.gano) {
        return true;
      } else {
        return false;
      }
  }

  public generarPalabra()
  {
    let index = Math.floor((Math.random() * 12) + 1);
    this.palabraDesorganizada = this.arrayAnagrama[index]["palabra"];
    this.palabraCorrecta = this.arrayAnagrama[index]["correcta"];
  }
}
