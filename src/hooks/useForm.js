import { useState } from "react";

export const useForm = ( initialState ={} ) => {
    
    const [values, setValues] = useState(initialState)

    const handleInputChange = ({target})=>{ //adentro va el evento

        setValues({
            ...values,
            [target.name]: target.value
        });

    }

    return[values, handleInputChange];
}