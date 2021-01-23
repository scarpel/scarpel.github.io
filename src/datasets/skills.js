import { FaCss3Alt, FaHtml5, FaPython, FaReact, FaNodeJs } from "react-icons/fa"
import { DiJava, DiRuby, DiSqllite, DiPostgresql, DiPhotoshop } from "react-icons/di"
import { SiJavascript, SiAdobeaftereffects } from "react-icons/si"

const front = [
    {
        icon: <SiJavascript />,
        progress: 70
    },
    {
        icon: <FaNodeJs />,
        progress: 50
    },
    {
        icon: <FaCss3Alt />,
        progress: 70
    },
    {
        icon: <FaHtml5 />,
        progress: 70
    },
    {
        icon: <FaReact />,
        progress: 60
    }
]

const back = [
    {
        text: "C",
        progress: 40,
        opacity: 0.2
    },
    {
        text: "C#",
        progress: 50,
        opacity: 0.5
    },
    {
        icon: <DiJava />,
        progress: 60,
        opacity: 0.6
    },
    {
        icon: <FaPython />,
        progress: 60
    },
    {
        icon: <DiRuby />,
        progress: 40,
        opacity: 0.5
    },
    {
        text: "sql",
        progress: 50
    }
]

const others = [
    {
        icon: <SiAdobeaftereffects />,
        progress: 50
    },
    {
        icon: <DiPhotoshop />,
        progress: 50
    },
    {
        icon: <DiSqllite />,
        progress: 40
    },
    {
        icon: <DiPostgresql />,
        progress: 30,
        opacity: 0.5
    },
]

export { front, back, others }