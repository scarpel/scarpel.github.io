import {SiJavascript, SiElectron, SiFirebase, SiAdobeaftereffects, SiAdobeillustrator, SiAdobephotoshop} from "react-icons/si"
import {FaHtml5, FaCss3Alt, FaPython, FaReact, FaJava} from "react-icons/fa"
import {DiSqllite, DiRuby} from "react-icons/di"

const toolsIcons = {
    javascript: <SiJavascript />,
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    electron: <SiElectron />,
    sqlite: <DiSqllite />,
    ruby: <DiRuby />,
    python: <FaPython />,
    react: <FaReact />,
    java: <FaJava />,
    c: <div className="tool-icon">C</div>,
    cSharp: <div className="tool-icon">C#</div>,
    cPlusPlis: <div className="tool-icon">C++</div>,
    firebase: <SiFirebase />,
    delphi: <div className="tool-icon">Delphi</div>,
    afterEffects: <SiAdobeaftereffects />,
    photoshop: <SiAdobephotoshop />,
    illustrator: <SiAdobeillustrator />,
    express: <div className="tool-icon">Express</div>
}

export default toolsIcons