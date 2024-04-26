import { useState, createContext, useEffect } from "react";
import { useForm } from "../hooks/useForm";
import Aos from "aos";
import "aos/dist/aos.css";

export const AppContext = createContext();

export const AppProvider = ( {children} ) => {

    /**** Funcion para inicializar AOS - animaciones*** */
    const AosInit = () => {
        useEffect(() => {
            Aos.init()
          }, [])
    }

    const initialForm = {
        userName : "",
        email : "",
        password: ""
    }
    
        const {formState, onInputChange } = useForm(initialForm)

        /*desestructuramos el form state para tener estas tres
        constantes disponibles para obtenerlas por separado*/
        /*Y tambien eso será lo que pongamos en el value*/
        const { userName, email, password } = formState;

        const [errors, setErrors] = useState({
            userName: '',
            email: '',
            password: ''
        });
        
        const validateForm = () => {
            let valid = true;
            const newErrors = { userName: '', email: '', password: '' };
        
            if (userName.trim() === '') {
                newErrors.userName = 'Por favor ingresa un nombre válido';
                valid = false;
            }
        
            if (!email.includes('@')) {
                newErrors.email = 'Por favor ingresa un email válido';
                valid = false;
            }
        
            if (password.length < 6) {
                newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
                valid = false;
            }
        
            setErrors(newErrors);
            return valid;
        };

        const onSubmit = (event) => {
            event.preventDefault()  /*para que no se actualice la pag*/
        
            if (validateForm()) {
                console.log('Formulario enviado:', formState);
            }
        }
            
		const contextValue = {
            onInputChange,
            errors,
            onSubmit,
            userName, 
            email,
            password,
            AosInit
		};

	return (
		<AppContext.Provider value={contextValue}>
			{children}
		</AppContext.Provider>
	)
}