export {}

const pokemonIds = [1,20,30,34,66];
//Ts detecta automaticamente que es un array de numeros

//* Interfaces se usan para explicitar y delimitar los tipos de datos de un objeto
//* La diferencia con una clase, es que la interfaz no puede ser instanciada, es decir
//* No puedo hacer charmander = new Pokemon... 
interface Pokemon {
    id: number,
    name: string,
}

const poke: Pokemon = {
    id: 10,
    name: 'Charmander'
}

console.log(poke);

// const pokemons = []; //! manera incorrecta
const pokemons: Pokemon[] = [];
pokemons.push(poke);