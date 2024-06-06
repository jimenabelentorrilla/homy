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

const icons = [
    {
        "id": "1",
        "icon": IconWp,
        "url": "https:/web.whatsapp.com/"
    },
    {
        "id": "2",
        "icon": IconIg,
        "url": "https://www.instagram.com/"
    },
    {
        "id": "3",
        "icon": IconYt,
        "url": "https://www.youtube.com/"    
    }
]

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
                    {
                        icons.map(icon => {
                            return (
                                <div key={icon.id}>
                                    <a href={icon.url} target="_blank" >
                                        <img src={icon.icon} />
                                    </a>
                                </div>
                        )})
                    }                    
                </div>
                <div>
                    <a href="https://mail.google.com/" target="_blank" className="sp-cn"><span >support@homy.com</span></a>
                </div>
            </div>
        </div>             
        <div className="w-fr" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300">
            <Form />
        </div>
    </div>
  )
}
