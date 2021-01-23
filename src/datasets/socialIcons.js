import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

const SOCIAL_ICONS = {
    "github": FaGithub,
    "linkedin": FaLinkedin,
    "insta": FaInstagram
}

function getSocialIcon(name){
    const Icon = SOCIAL_ICONS[name]
    if(Icon) return () => <div className="social-icon"><Icon /></div>
    else return () => <div className="social-icon">{name}</div>
}

export default getSocialIcon