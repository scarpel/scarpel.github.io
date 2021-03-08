import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { ReactComponent as Logo } from "../media/svg/logo.svg";
import MenuIcon from "./MenuIcon"
import Menu from "./Menu"
import "../css/Navbar.css"
import NavbarTexts from "../texts/Navbar"

export default function Navbar(props){
    const { dark, language } = props
    const [showMenu, setShowMenu] = useState(false)
    const history = useHistory()
    const texts = NavbarTexts[language]

    const handleShowMenu = () => setShowMenu(!showMenu)

    const handleClick = (link) => {
        setShowMenu(false)
        history.push(link)
    }

    return (
        <div className={`navbar ${dark && "dark"}`}>
            <div className="left">
                <Link className="link" to="/"><Logo className="logo"/></Link>
            </div>
            <div className="right">
                <MenuIcon isShowing={showMenu} handleShowMenu={handleShowMenu}/>
                <Menu 
                    showing={showMenu}
                    items={ texts.items }
                    handleClick={handleClick}
                />
            </div>
        </div>
    )
}