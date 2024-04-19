import "./Faqs.css";
import Cat from "../../assets/cat.png";
import Arrow from "../../assets/expand_more.png";
import { useState } from "react";

const LineAcc = ( { question , answer }) => {

    const [mostrar, setMostrar] = useState(false);

    const handleClick = () =>{
        setMostrar(
            prev => !prev
        );
    }

  return (
    <>
        <div className="card-acc-flex">
            <div className="card-acc">
                <p>{question}</p>
                <img src={Arrow} onClick={handleClick}/>  
            </div>    
            {
                mostrar && <div>
                                <BloqueAccordion answer={answer} />
                            </div>
            } 
        </div>
    </>
  )
}

const BloqueAccordion = ({ answer }) => {

   return (
    <>
        <div>
            <p className="prg-acc">{answer}</p>
        </div>
    </>
  )
}


export const Faqs = () => {

  return (
    <>
        <div className="bg-fq" id="faqs">
            <div className="faqs-flex">
                <div className="accordion">
                    <h2>Preguntas frecuentes</h2>
                    <div className="accordion-flex">
                        <LineAcc 
                            question="¿Cómo funciona la instalación de las cámaras PetCam?"
                            answer="La instalación es fácil y rápida. Sigue las instrucciones proporcionadas en el manual incluido o consulta nuestra guía en línea para obtener ayuda paso a paso."
                        />
                        <LineAcc 
                            question="¿Puedo ver a mi mascota desde cualquier lugar?"
                            answer="Loremasjdlkajsdlaskkdjakldjklajsdja"
                        />
                        <LineAcc 
                            question="¿Hay algún costo adicional después de la compra inicial?"
                            answer="SARASAAAA"
                        />
                        <LineAcc 
                            question="¿Cúanto tiempo dura la batería de los dispositivos Homy?"
                            answer="Hola como estas?"
                        />
                    </div>
                </div>
                <div>
                    <img className="cat-img" src={Cat}/>
                </div>
            </div>
        </div>
     </>
  )
}
