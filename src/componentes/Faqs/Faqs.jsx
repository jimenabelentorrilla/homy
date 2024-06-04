import "./Faqs.css";
import Cat from "../../assets/cat.png";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const LineAcc = ( { question , answer }) => {

  return (
    <>
        <Accordion>
            <AccordionSummary
                className="card-acc"
                aria-controls="panel1-content"
                expandIcon={<ExpandMoreIcon />}
            >
                {question}
            </AccordionSummary>
                <AccordionDetails className="prg-acc">
                    {answer}
                </AccordionDetails>
        </Accordion>
    </>
  )
}

export const Faqs = () => {

  return (
        <>
        <div className="bg-fq" id="faqs">
            <div className="faqs-flex">
                <div className="accordion" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300">
                    <h2>Preguntas frecuentes</h2>
                    <div>
                        <LineAcc 
                            question="¿Cómo funciona la instalación de las cámaras PetCam?"
                            answer="La instalación es fácil y rápida. Sigue las instrucciones proporcionadas en el manual incluido o consulta nuestra guía en línea para obtener ayuda paso a paso."
                        />
                        <LineAcc 
                            question="¿Puedo ver a mi mascota desde cualquier lugar?"
                            answer="Si, podrás ver a tu mascota desde cualquier lugar con nuestra aplicación móvil, brindandote la tranquilidad de estar conectado sin importar donde te encuentres."
                        />
                        <LineAcc 
                            question="¿Hay algún costo adicional después de la compra inicial?"
                            answer="No, después de tu compra iniciar no hay costos adicionales. Ofrecemos una experiencia sin sorpresas ni cargos ocultos, para que disfrutes plenamente de nuestros servicios."
                        />
                        <LineAcc 
                            question="¿Cúanto tiempo dura la batería de los dispositivos Homy?"
                            answer="La duración de la bateria de nuestros dispositivos Homy varía segun el modelo pero puedes mantenerlos conectados a través del cable usb incluido. Para detalles específicos consulta las especificaciones de cada producto."
                        />
                    </div>
                </div>
                <div className="cat-cnt" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="300">
                    <img className="cat-img" src={Cat}/>
                </div>
            </div>
        </div>
     </>
  )
}
