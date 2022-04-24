import {Subs} from "../types";


interface Props {
  subs:Array<Subs>

  numero:number,
  //children: string
}

function List({subs,numero} : Props){


    return (

        <ul>
        <h1>Subscritores de Yosip</h1>
          {subs.map((item,index)=>{
            return (
              <li key={index}>
              <h4>{item.nick}</h4>
              <img src={item.avatar} width="100" alt="avatar"></img>
              <p>{item.description?.substring(0,100)}</p>
              </li>
    
            )
          })}
        </ul>
   
      
    )

}


export default List;