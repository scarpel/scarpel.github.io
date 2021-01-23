import "../css/PageTransition.css"

export default function PageTransition(props) {
    const { show = false, transitionOrientation = "left", backgroundColor } = props
    return (
        show && (
            <div className={`page-transition ${transitionOrientation}`}>
                <div className="page-slider black"></div>
                <div className="page-slider white"></div>
                <div className="page-slider color" style={{backgroundColor: backgroundColor}}></div>
            </div>
        )
    )
}