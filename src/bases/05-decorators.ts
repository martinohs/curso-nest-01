//* Los decoradores son funciones que se invocan usando el @
//Un decorador de clase, tendra acceso a la definicion de la clase y por lo cual podra expandir, abstraer, modificar ,remover funcionalidades, etc


class NewPokemon {
    constructor(
        public readonly id: number,
        public name: string,
    ){}

    scream() {
        console.log(`ESTA ES LA NEW POKEMON !!`);
    }
 
    speak() {
        console.log('ATIENDO BOLUDOS');
    }


}

const MyDecorator = () => {
    
    return ( target: Function) => {
        // console.log(target);
        return NewPokemon;
    }
}

@MyDecorator() //CON ESTE decorador a la hora de crear la clase, no la instancia, sino que la sobre escribe con la clase NewPokemon
export class Pokemon {

    constructor(
        public readonly id: number,
        public name: string,
    ){}

    scream() {
        console.log(`${this.name.toLocaleUpperCase()} !!`);
    }
 
    speak() {
        console.log(`${this.name} ${this.name} !!!!!`);
    }

}

export const charmander = new Pokemon(4,'charmander');
charmander.speak();