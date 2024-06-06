import "./Footer.css";
import Logo from "../../assets/logo-footer.png";
import IconIg from "../../assets/icon-ig-00.png";
import IconWp from "../../assets/icon-wp-00.png";
import IconYt from "../../assets/icon-yt-00.png";

const iconsBl = [
    {
        "id": "1",
        "icon": IconWp
    },
    {
        "id": "2",
        "icon": IconIg
    },
    {
        "id": "3",
        "icon": IconYt    
    }
]
const footerSections = [
    {
      title: "homy",
      links: [
        { 
          href: "#productos", 
          name: "productos" 
        },
        { 
          href: "#como", 
          name: "como funciona" 
        },
        { 
          href: "#faqs", 
          name: "faqs" 
        }
      ]
    },
    {
        title: "contacto",
        links: [
          { 
            href: "#", 
            name: "soporte" 
          },
          { 
            href: "#", 
            name: "centro de ayuda" 
          }
        ]
      },
      {
        title: "ayuda",
        links: [
          { 
            href: "#", 
            name: "terminos y condiciones" 
          },
          { 
            href: "#", 
            name: "politica de privacidad" 
          }
        ]
      }
    ]

export const Footer = () => {
  return (
    <div className="ft-cont">
        <div className="ft-flex">
            <div className="cnt-logo-ft">
            <a href="#nav"><img src={Logo} /></a>
            </div>
            <div className="icon-ft-flex">
                {
                    iconsBl.map(icon => {
                        return (
                            <div key={icon.id} className="icon-ft">
                                <a href="#" target="_blank" >
                                    <img src={icon.icon} />
                                </a>
                            </div>
                    )})
                }                
            </div>
        </div>
        <div className="ft-an-flex">
            { 
              footerSections.map(section => {
                return (
                    <ul className="ft-ul" key={section.title}>
                        <a href="#" className="an-bold"><li>{section.title}</li></a>
                        { section.links.map(link => (
                            <a key={link.name} href={link.href} className="an-clr"><li>{link.name}</li></a>
                      ))}
                    </ul>
                )})
            }
        </div>
    </div>
  )
}
