import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'AdivinaMasListado':
          this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'AgilidadaMasListado':
          this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;
      case 'Anagrama':
      this.router.navigate(['/Juegos/Anagrama']);
      break;
      case 'PPT':
      this.router.navigate(['/Juegos/PiedraPapelTijera']);
      break;
      case 'AdivinaLaPeliculaSerie':
      this.router.navigate(['/Juegos/AdivinaLaPeliculaSerie']);
      break;
    }
  }

  public cerrarSesion()
  {
    let confirmar = confirm("Desea cerrar su sesion?");
    if(confirmar == true)
      {
    localStorage.removeItem("usuarioEnLinea");
    this.router.navigate(['/']);
      }
  }

}
