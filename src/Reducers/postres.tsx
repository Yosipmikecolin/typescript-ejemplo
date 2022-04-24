import { Props } from "../types";

const ESTADO_INITIAL = {

    postres:[{
        sabor:"chocolate",
        calorias:1200
    }]

}



export const reducerPostre = (estado = ESTADO_INITIAL,action : Props) => {

    switch (action.type) {
        case "AGREGAR":
        return {
        ...estado,
        postres:[
        ...estado.postres,
        {sabor:action.payload.sabor,
        calorias:action.payload.calorias
        }
        ]
        }    
        
    
        default:
        return estado;
    }

}
