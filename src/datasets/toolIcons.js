import { SiJavascript, SiElectron, SiFirebase, SiAdobeaftereffects, SiAdobeillustrator } from "react-icons/si"
import { FaHtml5, FaCss3Alt, FaPython, FaReact, FaJava } from "react-icons/fa"
import { DiSqllite, DiRuby, DiPhotoshop } from "react-icons/di"

const TOOL_ICONS = {
    javascript: SiJavascript,
    html: FaHtml5,
    css: FaCss3Alt,
    electron: SiElectron,
    sqlite: DiSqllite,
    ruby: DiRuby,
    python: FaPython,
    react: FaReact,
    java: FaJava,
    firebase: SiFirebase,
    afterEffects: SiAdobeaftereffects,
    photoshop: DiPhotoshop,
    illustrator: SiAdobeillustrator
}

function getToolIcon(name){
    const Icon = TOOL_ICONS[name]
    if(Icon) return Icon
    else return () => <div className="tool-icon">{name}</div>
}

export default getToolIcon