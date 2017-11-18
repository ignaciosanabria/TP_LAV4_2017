import { Component, OnInit } from '@angular/core';
import { JugadoresService} from '../../servicios/jugadores.service'
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { MiHttpService} from '../../servicios/mi-http.service';
@Component({
  selector: 'app-listado-jugadores',
  templateUrl: './listado-jugadores.component.html',
  styleUrls: ['./listado-jugadores.component.css']
})
export class ListadoJugadoresComponent implements OnInit {
 
  miJugadoresServicio : JugadoresService;
  miServicioHttp: MiHttpService;
  jugadores : Array<any>;
  source: LocalDataSource;
  constructor(JugadoresService : JugadoresService, serviceHttp: MiHttpService) {
    this.miServicioHttp = serviceHttp;
    this.miJugadoresServicio = JugadoresService;
    this.miJugadoresServicio.TraerJugadores().then(data => {this.source = data; console.log(data);}).catch(error => {console.log(error);});
   }
   
  //  settings = {
  //   columns: {
  //     cuit: {
  //       title: 'CUIT',
  //       filter: false
  //     },
  //     usuario: {
  //       title: 'USUARIO',
  //       filter: false
  //     },
  //     email: {
  //       title: 'EMAIL',
  //       filter: false
  //     },
  //     puntaje: {
  //       title: 'PUNTAJE',
  //       filter: false
  //     },
  //     fecha: {
  //       title: 'FECHA',
  //       filter: false
  //     },
  //     sexo: {
  //       title: 'SEXO',
  //       filter: false
  //     }
  //   },    
  //   edit: {
  //     confirmSave: true,
  //   },
  //   add: {
  //     confirmCreate: true,
  //   },
  //   delete: {
  //     confirmDelete: true,
  //   }
  // };
  settings = { 
    columns: {
    titulo : {
      title: 'TITULO',
      filter: false
    },
    anio: {
     title : 'AÑO',
     filter : false
    },
    cantante: {
      title: "CANTANTE",
      filter: false
    }
    },
      edit: {
        confirmSave: true,
      },
      add: {
        confirmCreate: true,
      },
      delete: {
        confirmDelete: true,
      }
  };
   public mostrarJugadores()
   {
   //this.miJugadoresServicio.TraerJugadores().then(data => {this.jugadores = data}).catch(error => {console.log(error);});
   }

   onCreateConfirm(event) {
    if (window.confirm('Estas seguro que queres crear el CD?')) {
      event.confirm.resolve(event.newData);
     // let bodyEnvio = {datosLogin : {usuario : 'admin@admin', clave: "1234"}};
      
      // this.miServicioHttp.httpPostSuscribe(body).then(
      //   data =>
      //   {
      //     console.log(data);
      //   }
      // ).catch(error => {
      //   console.info(error);
      // });
      let body = new FormData();
      body.append("titulo",event.newData["titulo"]);
      body.append("cantante",event.newData["cantante"]);
      body.append("anio",event.newData["anio"]);
      console.log(JSON.stringify(event["newData"]));
      this.miServicioHttp.Post(JSON.stringify(event["newData"])).subscribe(data => {
        console.log(data);
        let respuesta = JSON.parse(data["_body"]).status;
        if(respuesta == 200)
          {
            alert("Usted ha ingresado correctamente un CD!");
          }
          else
            {
              alert("Error. No se pudo ingresar el CD");
            }
      },error=>{
        console.log(error);
      });
    } else {
      event.confirm.reject();
    }
  }


  onDeleteConfirm(event) {
    if (window.confirm('Estas seguro que queres borrar el CD?')) {
      event.confirm.resolve();
      console.log(event);
      //Falta cambiar index.php para que Borre
      this.miServicioHttp.Delete(event["data"].id).subscribe(data =>{
        console.log(data);
        let respuesta = JSON.parse(data["_body"]).status;
        if(respuesta == 200)
          {
            alert("Usted ha borrado un CD!");
          }
          else
            {
              alert("Error. No se pudo borrar el CD");
            }
      }, error => {
        console.log(error);
      });
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event) {
    if (window.confirm('Estas seguro que queres editar este CD?')) {
      event.confirm.resolve(event.newData);
      console.log(event["data"].id);
      console.log(event);
      this.miServicioHttp.Put(event["data"].id,JSON.stringify(event["newData"])).subscribe(data =>{
        console.log(data);
        let respuesta = JSON.parse(data["_body"]).status;
        if(respuesta == 200)
          {
            alert("Usted ha editado un CD!");
          }
          else
            {
              alert("Error. No se pudo editar el CD");
            }
      }, error => {
        console.log(error);
      });
    } else {
      event.confirm.reject();
    }
  }



  ngOnInit() {

  }

}
