import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importo del module principal
import { RouterModule, Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from '../componentes/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from '../componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from '../componentes/login/login.component';
import { ErrorComponent } from '../componentes/error/error.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from '../componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from '../componentes/menu/menu.component';
import { AdivinaMasListadoComponent } from '../componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from '../componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { ListadoComponent } from'../componentes/listado/listado.component'
import { ListadosComponent } from '../componentes/listados/listados.component';
import { JuegosComponent } from '../componentes/juegos/juegos.component';
import { RegistroComponent } from '../componentes/registro/registro.component';
import { MenuCardComponent } from '../componentes/menu-card/menu-card.component';
import { CabeceraComponent } from '../componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from '../componentes/quien-soy/quien-soy.component';
import { AnagramaComponent } from '../componentes/anagrama/anagrama.component';
import { ListadoJugadoresComponent } from '../componentes/listado-jugadores/listado-jugadores.component';
import { PiedraPapelTijeraComponent } from '../componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { AdivinaLaSeriePeliculaComponent } from '../componentes/adivina-la-serie-pelicula/adivina-la-serie-pelicula.component';
import { EjemploDirectivasComponent } from '../componentes/ejemplo-directivas/ejemplo-directivas.component';
// declaro donde quiero que se dirija
const MiRuteo = [
//{path: '' , component: PrincipalComponent},
{path: '' , component: LoginComponent},
{path: 'QuienSoy' , component: QuienSoyComponent},
{path: 'Registro' , component: RegistroComponent},
{path: 'Principal' , component: PrincipalComponent},
{path: 'Listado' , component: ListadoComponent},
{path: 'Listados', component : ListadosComponent},
{path: 'EjemploDirectivas', component : EjemploDirectivasComponent},
{ path: 'Juegos' ,
component: JuegosComponent ,
children:
     [{path: '' , component: MenuCardComponent},
     {path: 'Adivina' , component: AdivinaElNumeroComponent},
      {path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
      {path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
      {path: 'Agilidad' , component: AgilidadAritmeticaComponent},
      {path: 'Anagrama', component: AnagramaComponent},
      {path: 'Jugadores', component: ListadoJugadoresComponent},
      {path: 'PiedraPapelTijera', component : PiedraPapelTijeraComponent},
      {path : 'AdivinaLaPeliculaSerie', component : AdivinaLaSeriePeliculaComponent}
      ]
},
{path: '**' , component: ErrorComponent},
{path: 'error' , component: ErrorComponent}];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }
