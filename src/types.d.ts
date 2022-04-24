export interface Subs {

    nick:string,
    subMonths:number,
    avatar:string
    description ? :string
  
  }

  export interface Props {

    type:"AGREGAR",
    payload:{
    sabor:string,
    calorias:number
    }

}
