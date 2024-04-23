import "./Contact.css";
import IconIg from "../../assets/icon-ig.png";
import IconWp from "../../assets/icon-wp.png";
import IconYt from "../../assets/icon-yt.png";

const Form = () => {
     
  return (

    <div className="frame-86" id="contacto">
        <div className="flx-87">
            <h4 className="cnt-title">Contactanos</h4>
            <div className="inp">
                <input 
                    placeholder="Nombre"
                    type="username"
					name="userName"					
                />
            </div>
            <div className="inp">
                <input 
                    placeholder="Email"
                    type="email"
					name="email"
                />
            </div>
            <div className="msg-inp">
                <textarea 
                    placeholder="Mensaje"
                    type="mensaje"
					name="mensaje"					  
                />
            </div>
            <div>
                <button className="btn-cnt">Enviar</button>
            </div>
        </div>
    </div>
  )
}


export const Contact = () => {
  return (
    <div className="cnt-cnt">
        <div className="cnt-flx">
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
        <div>
            <Form />
        </div>
    </div>
  )
}
