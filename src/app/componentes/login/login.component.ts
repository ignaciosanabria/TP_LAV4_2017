import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  usuario = '';
  clave= '';
  progreso: number;
  progresoMensaje="esperando..."; 
  logeando=true;
  ProgresoDeAncho:string;
  arrayUsuarios : Array<any> = new Array<any>();
  arrayResultados: Array<any> = new Array<any>();

  usuarioJugador : any;
  usuarioEncontrado : boolean;

  clase="progress-bar progress-bar-info progress-bar-striped ";

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
      this.progreso=0;
      this.ProgresoDeAncho="0%";
      this.arrayUsuarios = JSON.parse(localStorage.getItem("Usuarios"));
      console.log(this.arrayUsuarios);
      if(this.arrayUsuarios == null)//Si no hay jugadores Nuevos, el array de Jugadores se reinicia con dos jugadores predeterminados
      {
      this.arrayUsuarios = new Array<any>();
      this.arrayUsuarios.push({mail:"administrador@outlook.com", clave:"1234"});
      this.arrayUsuarios.push({mail:"leandro_12@hotmail.com",clave:"boca1234"});
      }
      let usuarioRegistrado = JSON.parse(localStorage.getItem("usuarioRegistrado"));
      if(usuarioRegistrado != null) //Si un usuario se registra este se almacena en el LocalStorage y luego se lo agrega al arraydeUsuarios
        {
          this.arrayUsuarios.push(usuarioRegistrado);
        }
        let resultadosPrevios = JSON.parse(localStorage.getItem("Resultados"));
        if(resultadosPrevios == null)//Si no hay resultados previos de otros jugadores, el arrayDeResultados se reinicia
          {
        localStorage.setItem("Resultados",JSON.stringify(this.arrayResultados));
          }
        localStorage.setItem("Usuarios",JSON.stringify(this.arrayUsuarios));
  }

  ngOnInit() {
  }

  Entrar() {
    // if (this.usuario === 'admin' && this.clave === 'admin') {
    //   this.router.navigate(['/Principal']);
    // }
    this.usuarioEncontrado = false;
    this.arrayUsuarios = JSON.parse(localStorage.getItem("Usuarios"));
    console.log(this.arrayUsuarios);
    for(let i = 0; i < this.arrayUsuarios.length; i++)
      {
        if(this.arrayUsuarios[i]["mail"] == this.usuario && this.arrayUsuarios[i]["clave"] == this.clave)
          {
            this.usuarioEncontrado = true;
            this.usuarioJugador = this.arrayUsuarios[i];
            break;
          }
      }
      if(this.usuarioEncontrado)
        {
          localStorage.setItem("usuarioEnLinea",JSON.stringify(this.usuarioJugador));
          this.router.navigate(['/Principal']);
        }
        else
          {
            alert("ERROR. No existe el usuario con el que quiere ingresar!");
            //location.reload();
            this.progreso=0;
            this.ProgresoDeAncho="0%";
            this.usuario = null;
            this.clave = null;
          }
  }
  MoverBarraDeProgreso() {
    
    this.logeando=false;
    this.clase="progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje="NSA spy..."; 
    let timer = TimerObservable.create(200, 50);
    this.subscription = timer.subscribe(t => {
      console.log("inicio");
      this.progreso=this.progreso+1;
      this.ProgresoDeAncho=this.progreso+20+"%";
      switch (this.progreso) {
        case 15:
        this.clase="progress-bar progress-bar-warning progress-bar-striped active";
        this.progresoMensaje="Verificando ADN..."; 
          break;
        case 30:
          this.clase="progress-bar progress-bar-Info progress-bar-striped active";
          this.progresoMensaje="Adjustando encriptación.."; 
          break;
          case 60:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando Info del dispositivo..";
          break;
          case 75:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando claves facebook, gmail, chats..";
          break;
          case 85:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Instalando KeyLogger..";
          break;
          
        case 100:
          console.log("final");
          this.subscription.unsubscribe();
          this.Entrar();
          break;
      }     
    });
    //this.logeando=true;
  }

}
