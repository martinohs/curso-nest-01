
const Deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
      // console.log({target})
      return {
        //Lo que hago en este caso es recibir un metodo y ejecutarlo, pero lanzar un warnin, si comento la linea 11, no se ejecuta. Pero podria darle muchas utilidades que yo quiera
        get() {
          const wrapperFn = (...args: any[]) => {
            console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
            //! Llamar la función propiamente con sus argumentos
            propertyDescriptor.value.apply(this, args); 
          }
        
          return wrapperFn;
        }

      }
    }   
}

export class Pokemon {

    constructor(
        public readonly id: number,
        public name: string,
    ){}

    scream() {
        console.log(`${this.name.toUpperCase()} !!`);
    }
 
    @Deprecated('Most use speak2 method instead')
    speak() {
        console.log(`${this.name} ${this.name} !!!!!`);
    }

    speak2() {
        console.log(`${this.name} ${this.name.toUpperCase()} !!!!!`);
    }

}

export const charmander = new Pokemon(4,'charmander');
charmander.speak();