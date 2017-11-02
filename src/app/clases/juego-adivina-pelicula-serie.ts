import { Juego } from '../clases/juego';
/**
 * Juego Adivina La Pelicula o Serie
 * la Maquina te muestra una imagen que puede ser una pelicula o serie y las posibles respuestas de cuales pueden ser
 * El jugador debe seleccionar cual de ellas puede ser la opcion correcta
 * La maquina le informa si su eleccion fue incorrecta o correcta.
 */
export class JuegoAdivinaPeliculaSerie extends Juego {
    arrayPeliculasSeries = [
        {
            path: "avatar.jpeg",
            opciones : ["Avatar","La Guerra De Los Mundos","Titanic","Alien: Covenant"],
            opcionCorrecta: "Avatar"
        },
        {
           path : "bastardossingloria.jpg",
           opciones : ["Rescatando Al Soldado Ryan","Bastardos Sin Gloria","Guerra Mundial Z","La Lista De Schindler"],
           opcionCorrecta : "Bastardos Sin Gloria"
        },
        {
            path : "breakingbad.jpg",
            opciones : ["Two And A Half Men","House Of Cards","The Walking Dead","Breaking Bad"],
            opcionCorrecta : "Breaking Bad"
        },
        {
            path: "friends.jpg",
            opciones : ["The Big Bang Theory","Vikings","Friends","The Simpsons"],
            opcionCorrecta : "Friends"
        },
        {
            path : "gameofthrones.jpg",
            opciones : ["Game Of Thrones","Black Sails","Spartacus","Vikings"],
            opcionCorrecta : "Game Of Thrones"
        },
        {
            path : "ironman.jpg",
            opciones : ["Spider-Man","Hulk","Deadpool","Iron Man"],
            opcionCorrecta : "Iron Man"
        },
        {
            path : "killbill.jpg",
            opciones : ["Pulp Fiction","Kill Bill","Bastardos Sin Gloria","Perros De La Calle"],
            opcionCorrecta : "Kill Bill"
        },
        {
            path : "pulpfiction.jpg",
            opciones : ["Kill Bill","Django Sin Cadenas","Pulp Fiction","Historias Cruzadas"],
            opcionCorrecta : "Pulp Fiction"
        },
        {
            path : "rescatandosoldado.jpg",
            opciones : ["Guerra Mundial Z","La Caída Del Halcón Negro","Cartas Desde Iwo Jima","Rescatando Al Soldado Ryan"],
            opcionCorrecta : "Rescatando Al Soldado Ryan"
        },
        {
            path : "starwars.jpg",
            opciones : ["Star Wars","Alien : Covenant","La Guerra De Los Mundos","Star Trek"],
            opcionCorrecta : "Star Wars"
        },
        {
            path : "strangerthings.jpg",
            opciones : ["Fringe","The X-Files","Stranger Things","Black Mirror"],
            opcionCorrecta : "Stranger Things"
        },
        {
            path : "thebigbangtheory.jpg",
            opciones : ["Friends","Stranger Things","Modern Family","The Big Bang Theory"],
            opcionCorrecta : "The Big Bang Theory"
        },
        {
            path : "thewalkingdead.jpg",
            opciones : ["Modern Family","Resident Evil","The Walking Dead","Rec"],
            opcionCorrecta : "The Walking Dead"
        },
        {
            path : "transformers.jpg",
            opciones : ["Transformers","Black Mirror", "Terminator","Chappie"],
            opcionCorrecta : "Transformers"
        },
        {
            path : "twoandahalfmen.jpg",
            opciones : ["Modern Family","Two And A Half Men","Family Guy","How I Met Your Mother"],
            opcionCorrecta : "Two And A Half Men"
        },
        {
            path : "vikingos.jpg",
            opciones : ["Game Of Thrones","Black Sails","Gladiator","Vikings"],
            opcionCorrecta : "Vikings"
        }
    ];

    opcionCorrecta : string;
    opcionIngresada : string;
    opcionesMostradas : Array<string>;
    elementoAdivinar : any; //VA A SER UN ELEMENTO CUALQUIERA DEL ELEMENTO DEL ARRAY DE PELICULAS O SERIES
    
    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Adivina la película o serie",gano,jugador);  
      }
    public verificar()
    {
        if(this.opcionCorrecta == this.opcionIngresada)
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

    public generar()
    {
        console.log(this.arrayPeliculasSeries);
        let index = Math.floor((Math.random() * 15) +0);
        this.elementoAdivinar = this.arrayPeliculasSeries[index];
        this.opcionCorrecta = this.elementoAdivinar["opcionCorrecta"];
        this.opcionesMostradas = this.elementoAdivinar["opciones"];
        console.log(this.elementoAdivinar);
        console.log(this.elementoAdivinar["path"]);
        console.log(this.opcionesMostradas);
    }
}
