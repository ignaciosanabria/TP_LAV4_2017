import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  usuarioEnLinea : any = JSON.parse(localStorage.getItem("usuarioEnLinea"));
  ocultarLogin : boolean = true;
  constructor(private route: ActivatedRoute,
    private router: Router) { 
    if(this.usuarioEnLinea != null)
      {
        this.ocultarLogin = false;
      }
  }

  public cerrarSesion()
  {
    localStorage.removeItem("usuarioEnLinea");
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
