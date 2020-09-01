import React,{useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( {setCategories} ) => {
    const [inputvalue, setInputvalue] = useState(''); //Para evitar el undefine se coloca un string vacio
    const hasndleInputChanche = (e)=>{   //para manejar el evento al presionar enter 
        setInputvalue(e.target.value);
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        if (inputvalue.trim().length>2) { //Valida que el input no este vacio 
             setCategories( catego => [ inputvalue, ...catego,] ); //Añade al arreglo el elemento ...catego es para respetar los valores que se encuentran en el arreglo 
             setInputvalue(''); //No inserta si nada 
        }
       
        //console.log('Submit hecho')
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>AddCategory</h2>
            <input type="text" value={inputvalue}  onChange={hasndleInputChanche} ></input>  
        </form>
    )
}

AddCategory.propType={
    setCategories : PropTypes.func.isRequired
}
