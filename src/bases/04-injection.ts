import axios from 'axios';
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import { PokeApiAdapter, PokeApiFetchAdapter, HttpAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        // Todo: inyectar dependencias
        private readonly http: HttpAdapter //Inyeccion de nuestra dependencia, en este caso uso la interfaz para poder cualquiera de las dos clases q lo implementan
        //>> Inyeccion de dependencia es a una clase añadirle una dependencia

    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        const { moves } = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        return moves;
    }

}

const pokeApi = new PokeApiAdapter();
const pokeApiv2 = new PokeApiFetchAdapter();
export const charmander = new Pokemon( 4, 'Charmander',pokeApi );
export const pikachu = new Pokemon( 1, 'Pikachu',pokeApiv2 );
console.log(charmander);

console.log(pikachu);

charmander.getMoves();