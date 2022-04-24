import { useReducer } from "react";
import {Subs} from "../types";



//TIPO DE DATO DE LA ACTION
type FormReducerAction = {

    type:"change_value"
    payload:{
    name:string,
    value:string
    }
    
    }|{
    type:"clear_values"
    }


    //REDUCER
    function reducer(state : Subs,action:FormReducerAction){ 
    switch (action.type){
    case "change_value":
    const {name,value} = action.payload;
    return {
    ...state,
    [name]:value
    }
        
    case "clear_values":
    return ESTADO_INICIAL  

    
    default:
    return state;
        
    }}



    //ESTADO INICIAL
    const ESTADO_INICIAL = {

    nick:"",
    subMonths:0,
    avatar:"",
    description:""
    }
        
    

function useForm(){

    const [inputValues,dispatch] = useReducer(reducer,ESTADO_INICIAL);

    return {inputValues,dispatch};


}


export default useForm;