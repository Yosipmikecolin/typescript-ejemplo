import { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import Form from "./Components/Form";
import List from "./Components/List";
import {Subs} from "./types";



interface AppState {
subs: Array<Subs>
}

type PostresObject = {
sabor:string,
calorias:number
}

interface Postres {
postres: Array<PostresObject>
agregarPostre: () => void
}




const ESTADO_INICIAL = [
  {
  nick:"masterPro",
  subMonths: 4,
  avatar:"https://cdn.dribbble.com/users/2545690/screenshots/18034345/media/046ca3cab065628bc90c3978b8638451.png",
  description:"Me gusta jugar xbox"
  },


  {
  nick:"Monbos",
  subMonths:8,
  avatar:"https://cdn.dribbble.com/users/2545690/screenshots/18034345/media/046ca3cab065628bc90c3978b8638451.png",
  description:"Rapido para programar"
  }
]

function App({postres,agregarPostre } : Postres) {


  const [subs,setSubs] = useState <AppState["subs"]> ([]);



  useEffect(()=>{
  setSubs(ESTADO_INICIAL);
  },[]);

  function handleNewSub(newSub : Subs){
    setSubs([...subs,newSub]);
  }



  return (

    <Fragment>
   <List subs={subs} numero={234324}/>
   <Form onNewSubs={handleNewSub}/>
   </Fragment>

  );
}



const mapStateToProps = (estado : Postres) => {
return {postres:estado.postres}
}


const mapDispatchToProps = (dispatch : any) => {
return {
agregarPostre : () => {
dispatch({type:"AGREGAR",payload:{sabor:"Mango",calorias:3000}})
}}}




export default connect(mapStateToProps,mapDispatchToProps)(App);
