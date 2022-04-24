import {Subs} from "../types";
import useForm from "../Hooks/useForm";
import styled from "styled-components";



interface Props {
fondo : string;
}

const Formi = styled.form<Props>`
background-color:${props => props.fondo};
padding:30px;
border-radius:10px;
`;



//INTERFACES
interface FormProps {
onNewSubs:(newSub : Subs)=> void
}






//COMPONENTE
function Form({onNewSubs} : FormProps){


    const {inputValues,dispatch} = useForm();

    function handleChange(e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>){
    dispatch({type:"change_value",payload:{
    name:e.target.name,
    value:e.target.value
    }})}



    function handleSubmit(e : React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    onNewSubs(inputValues);
    dispatch({type:"clear_values"});
    }


  

   

    return (

        <Formi onSubmit={handleSubmit} fondo="#7387AB">
            <h2>Formulario</h2>
            <input type="text" name="nick" value={inputValues.nick} placeholder="Nick" onChange={handleChange}/>
            <input type="number" name="subMonths" value={inputValues.subMonths} placeholder="subMonths" onChange={handleChange}/>
            <input type="text" name="avatar" value={inputValues.avatar} placeholder="Avatar" onChange={handleChange}/>
            <textarea name="description" value={inputValues.description} placeholder="Description" onChange={handleChange}/>
            <button>Guardar Suscriptor</button>
        </Formi>
    );
}


export default Form;