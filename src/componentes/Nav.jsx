import Logo from "..//assets/logo.png";

export const Nav = () => {
  return (
    <>
        <div className="cnt-nav">
            <div>
                <img src={Logo}/>
            </div>
            <ul className="ul-flex">
                <li>Home</li>
                <li>Productos</li>
                <li>¿Como funciona?</li>
                <li>Faqs</li>
                <li>Contact</li>
            </ul>
            <div className="cnt-flex">
                <p>Ingresar</p>
                <button>Comenzar</button>
            </div>
        </div>
    </>
  )
}
