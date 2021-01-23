import "../css/MenuIcon.css"

export default function MenuIcon(props) {
    const  { isShowing, handleShowMenu } = props

    return (
        <div className={`menu-icon ${isShowing && "clicked"}`} onClick={handleShowMenu}>
            <div className="top"></div>
            <div className="middle"></div>
            <div className="bottom"></div>
        </div>
    )
}