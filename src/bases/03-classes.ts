//* Manera tradicional de crear la clase
// export class PokemonT {

import axios from "axios";
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";

//     public id: number;
//     public name: string;

//     //El constructor es un metodo que se ejecuta cada vez que creamos una instancia del objeto
//     constructor(id: number, name:string) {
        
//         this.id = id;
//         this.name = name;
        
//     }

// }

//* Manera corta (y comun) de crear la clase
export class Pokemon {
    //>> cuando estamos dentro de una clase, el this apunta a la instancia de la clase

    //Getter
    get imageUrl(): string{
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(
        public readonly id: number, //>> Con readonly logro que el valor no pueda ser modificado
        public name:string,
        // public imageUrl: string
        ) {}

    scream() {
        console.log(`${this.name.toUpperCase()} !!!`);
    }

    speak(){
        console.log(`${this.name}, ${this.name} !!!`);

    }

    async getMoves(): Promise<Move[]> {
        //Utilizando los <> pongo de manera explicita el tipo de dato del get del axios
        const { data } = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);   

        console.log(data.moves);
        return  data.moves;
    }

}

export const charmander = new Pokemon(4,'Charmander');
// console.log(charmander);
// console.log(charmander.imageUrl);
// charmander.scream();
// charmander.speak();
charmander.getMoves()
