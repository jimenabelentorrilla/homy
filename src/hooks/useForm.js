import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
	
    const [formState, setFormState] = useState(initialForm);
    
    
    const onInputChange = ({target}) => {
        const {name, value } = target /*desestructuramos*/
        setFormState({
            ...formState, /*usamos el operador spread para que guarde los otros dos valores (password e email)*/
            [name] : value /*para poder hacer que el name se vaya modificando hay que ponerlo entre [] */
        })
    }
        
        return {
            formState,
            onInputChange
        }
    }