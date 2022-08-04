import axios from "axios";
//* Aaca almaceno dos tipos de consulta distintas (fetch y axios) con el objetivo de poder inyectarlas de manera indistinta en caso de ser necesario */
//Los adapter se usan generalmente para adaptar un paquete/clase de terceros con mi codigo


export interface HttpAdapter {
        //Cualquier clase que implemete esta interface tiene que tener el metodo get -> el http adapter sera el que se coloca como dependencia en la inyeccion
        get<T> (url: string ):Promise<T>;
}

// Fetch
export class PokeApiFetchAdapter implements HttpAdapter {
    
    async get<T> ( url : string):Promise<T> {
        const resp = await fetch(url);
        const data: T = await resp.json();
        
        return data;
    }
}


// Axios
export class PokeApiAdapter implements HttpAdapter {
    private readonly axios = axios;
        //Usamos <T> para indicar que ira tipo generico de datos en el get y asi poder asignarlo en nuestra clase
    async get<T> ( url: string){ //Tambien peuedo explicitar :Promise<T>
        const { data } = await this.axios.get<T>(url);

        return data;
    }
    async post (url: string,data: any){

    }
    async patch (url: string,data: any){
        
    }
    async delete (url: string){
        
    }
}

