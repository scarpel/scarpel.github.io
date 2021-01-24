import { CERTFICADES_FULL } from "../data/imgPath"
import { join } from "path"

const certificados = [
    {
        name:"The JavaScript Bootcamp meu cu Mauie",
        description:"Curso de 12 horas feito no site Scrimba, o certificado está abaixo. ",
        link:"https://scrimba.com/certificate/uakVqahB/gjavascript",
        img: "js.jpg"
    },
    {
        name:"The React Bootcamp",
        description:"Curso de 12 horas feito no site Scrimba, o certificado está abaixo. ",
        link:"https://scrimba.com/certificate/uakVqahB/greact",
        img: "react.jpg"
    },
    {
        name:"Proficiência Inglês",
        link:"https://www.efset.org/cert/6HURJx",
        img: "efset.jpg"
    },
    {
        name:"Fisk: Have Fun 1",
        description:"Antigo, mas enfim.",
        link: join(CERTFICADES_FULL, "fisk.png"),
        img: "fisk.jpg"
    }
]

export default certificados