import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { ReactComponent as Logo } from "../media/svg/logo.svg";
import MenuIcon from "./MenuIcon"
import Menu from "./Menu"
import "../css/Navbar.css"
import PAGES_URL from "../data/pagesURL"

export default function Navbar(props){
    const { dark } = props
    const [showMenu, setShowMenu] = useState(false)
    const history = useHistory()

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
                    items={[
                        {
                            title: "home",
                            link: PAGES_URL.HOME
                        },
                        {
                            title: "sobre mim",
                            link: PAGES_URL.ABOUT
                        },
                        {
                            title: "habilidades",
                            link: PAGES_URL.SKILLS
                        },
                        {
                            title: "trabalhos",
                            link: PAGES_URL.JOBS
                        },
                        {
                            title: "contato",
                            link: PAGES_URL.CONTACT
                        }
                    ]}
                    handleClick={handleClick}
                />
            </div>
        </div>
    )
}