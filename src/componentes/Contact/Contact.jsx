import "./Contact.css";
import IconIg from "../../assets/icon-ig.png";
import IconWp from "../../assets/icon-wp.png";
import IconYt from "../../assets/icon-yt.png";
import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";

const Form = () => {

    const { onSubmit, onInputChange, userName, email, message, errors} = useContext(AppContext);
     
  return (

    <div className="frame-86" id="contacto">
        <div className="flx-87">
            <h4 className="cnt-title">Contactanos</h4>
            <form onSubmit={onSubmit}>
                <div>
                    <div className="inp">
                        <input 
                            placeholder="Nombre"
                            type="username"
                            name="userName"
                            value={userName}
                            onChange={onInputChange}				
                        />
                    </div>
                    <div>
                        <small className="error">{errors.userName}</small>
                    </div>
                </div>
                <div>
                    <div className="inp">
                        <input 
                            placeholder="Email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={onInputChange} 
                        />
                    </div>
                    <div>
                        <small className="error">{errors.email}</small>
                    </div>
                </div>
                <div>
                    <div className="msg-inp">
                        <textarea 
                            placeholder="Mensaje"
                            type="text"
                            name="message"
                            value={message}
                            onChange={onInputChange} 					  
                        />
                    </div>
                    <div>
                        <small className="error">{errors.message}</small>
                    </div>
                </div>
                <div>
                    <button className="btn-cnt">Enviar</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export const Contact = () => {
  return (
    <div className="cnt-cnt">
        <div className="cnt-flx" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300">
            <div className="asyd">
                <div className="bloque-text">
                    <h3>Estamos aquí para ti.</h3>
                    <p>En Homy, valoramos tu feedback y estamos aquí para responder a todas tus preguntas.<br /> ¡No dudes en ponerte en contacto con nosotros!</p>
                </div>
                <div className="icons-flex">
                    <div>
                        <a href="#">
                            <img src={IconWp} />
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src={IconIg} />
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src={IconYt} />
                        </a>
                    </div>
                </div>
            </div>
            
            <div>
                <a href="#"><span className="sp-cn">support@homy.com</span></a>
            </div>
        </div>             
        <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300">
            <Form />
        </div>
    </div>
  )
}
