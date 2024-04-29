import { useState, createContext, useEffect } from "react";
import { useForm } from "../hooks/useForm";
import Aos from "aos";
import "aos/dist/aos.css";

export const AppContext = createContext();

export const AppProvider = ( { children } ) => {
   
      /*Modal Sign In*/
      const [openSignIn, setOpenSignIn] = useState(false);
      const handleOpenSignIn = () => setOpenSignIn(true);
      const handleCloseSignIn = () => setOpenSignIn(false);
      
      const onSignUp = () =>{
          handleCloseSignIn()
          handleOpenSignUp()
      }
      /*Modal Sign Up*/
      const [openSignUp, setOpenSignUp] = useState(false);
      const handleOpenSignUp = () => setOpenSignUp(true);
      const handleCloseSignUp = () => setOpenSignUp(false);
  
      const onSignIn = () =>{
          handleCloseSignUp()
          handleOpenSignIn()
      }


    /**** Funcion para inicializar AOS - animaciones*** */
    const AosInit = () => {
        useEffect(() => {
            Aos.init()
          }, [])
    }

    const initialForm = {
        userName : "",
        email : "",
        password: "",
        message: ""
    }
    
        const {formState, onInputChange } = useForm(initialForm)

        /*desestructuramos el form state para tener estas tres
        constantes disponibles para obtenerlas por separado*/
        /*Y tambien eso será lo que pongamos en el value*/
        const { userName, email, password , message } = formState;

        const [errors, setErrors] = useState({
            userName: '',
            email: '',
            password: '',
            message: ''
        });
        
        const validateForm = () => {
            let valid = true;
            const newErrors = { userName: '', email: '', password: '' , message: ''};
        
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
            if (userName.trim() === '') {
                newErrors.message = 'Por favor ingresa tu mensaje';
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
            message,
            AosInit,
            openSignIn,
            handleOpenSignIn,
            handleCloseSignIn,
            onSignUp,
            openSignUp,
            handleOpenSignUp,
            handleCloseSignUp,
            onSignIn
		};

	return (
		<AppContext.Provider value={contextValue}>
			{children}
		</AppContext.Provider>
	)
}