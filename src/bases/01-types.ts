export {}

//>> Typescript obliga a mantener siempre el mismo tipo de variable
//>> Para asignar mas de un tipo 

let edad: string | number;
edad = 'veinte';
edad = 20;

let numero: number;
numero = 40;
//! numero = 'cuarenta'; 
