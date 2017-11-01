import { Juego } from '../clases/juego';
export class JuegoAgilidad extends Juego{
    numeroUno : number;
    numeroDos : number;
    operadores : Array<string> = ["+","-","*","/"];
    operador : string;
    resultadoVerdadero: number;
    resultadoJugador : number;

    public generar()
    {
        this.numeroUno =  Math.floor((Math.random() * 10) + 1);
        this.numeroDos = Math.floor((Math.random() * 10) + 1);
        let randOperador = Math.floor((Math.random() * 3) + 0);
        this.operador = this.operadores[randOperador];
        switch(this.operador)
        {
            case "+":
                 this.resultadoVerdadero = this.numeroUno + this.numeroDos;
                 break;
            case "-":
                 this.resultadoVerdadero = this.numeroUno - this.numeroDos;
                 break;
            case "*":
                 this.resultadoVerdadero = this.numeroUno * this.numeroDos;
                 break;
            case "/":
                  if(this.numeroDos == 0)
                  {
                      this.numeroDos = Math.floor((Math.random() * 10) + 1);
                      this.resultadoVerdadero = this.numeroUno / this.numeroDos;
                  }
                  else
                    {
                        this.resultadoVerdadero = this.numeroUno / this.numeroDos;
                    }
                break;
        }
    }
    public verificar()
    {
       this.gano = false;
       if(this.resultadoJugador == this.resultadoVerdadero)
        {
            this.gano = true;
        }
        if(this.gano)
            {
                return true;
            }
        else
            {
                return false;
            }
    }
}
