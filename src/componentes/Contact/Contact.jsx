import "./Contact.css";
import IconIg from "../../assets/icon-ig.png";
import IconWp from "../../assets/icon-wp.png";
import IconYt from "../../assets/icon-yt.png";

const Form = () => {
  return (
    <div className="frame-86">
        <div className="flx-87">
            <h4 className="cnt-title">Contactanos</h4>
            <div className="inp">
                <input 
                    placeholder="Nombre"
                />
            </div>
            <div className="inp">
                <input 
                    placeholder="Email"
                />
            </div>
            <div className="msg-inp">
                <textarea 
                    placeholder="Mensaje"
                    
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
                    <div><img src={IconWp} /></div>
                    <div><img src={IconIg} /></div>
                    <div><img src={IconYt} /></div>
                </div>
            </div>
            
            <div>
                <span className="sp-cn">support@homy.com</span>
            </div>
        </div>             
        <div>
            <Form />
        </div>
    </div>
  )
}
