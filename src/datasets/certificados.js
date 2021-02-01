import { CERTFICADES_FULL } from "../data/imgPath"
import { join } from "path"

const certificados = [
    {
        name:"The Web Developer Bootcamp",
        description:"Curso de 36 horas feito no site Udemy, o certificado está abaixo. ",
        link:"https://www.udemy.com/certificate/UC-88b4f1a0-2b05-4f27-aa9b-4e8f3314e5bc/",
        img: "webdevelopment.jpg"
    },
    {
        name:"Advanced CSS and Sass",
        description:"Curso de 28 horas feito no site Udemy, o certificado está abaixo. ",
        link:"https://www.udemy.com/certificate/UC-ce589208-346a-4c37-8bba-269998115945/",
        img: "advancedcss.jpg"
    },
    {
        name:"Creative CSS Animations Transitions And Transforms Course",
        description:"Curso de 8 horas feito no site Udemy, o certificado está abaixo. ",
        link:"https://www.udemy.com/certificate/UC-d57c7df4-fc96-4e08-926e-570e3c0b5159/",
        img: "cssanimation.jpg"
    },
    {
        name:"The Responsive Web Design Bootcamp",
        description:"Curso de 12 horas feito no site Scrimba, o certificado está abaixo. ",
        link:"https://scrimba.com/certificate/uakVqahB/gresponsive",
        img: "responsive.jpg"
    },
    {
        name:"The UI Design Bootcamp",
        description:"Curso de 12 horas feito no site Scrimba, o certificado está abaixo. ",
        link:"https://scrimba.com/learn/designbootcamp",
        img: "ui.jpg"
    },
    {
        name:"The JavaScript Bootcamp",
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
        link: join(process.env.PUBLIC_URL, CERTFICADES_FULL, "fisk.png"),
        img: "fisk.jpg"
    }
]

export default certificados