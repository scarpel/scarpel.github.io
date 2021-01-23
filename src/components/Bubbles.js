export default function Bubbles(props) {
    const { colors } = props
    const lighter = colors[1], darker = colors[2]

    return (
        <div className="bubbles">
            <div className="b-1" style={{background: `radial-gradient(circle at 20vw 8vw, ${lighter}, ${darker})`}}></div>
            <div className="b-2" style={{background: `radial-gradient(circle at 4.5vw 2vw, ${lighter}, ${darker})`}}></div>
            <div className="b-3" style={{background: `radial-gradient(circle at 3vw 2vw, ${lighter}, ${darker})`}}></div>
            <div className="b-4" style={{background: `radial-gradient(circle at 5vw 3vw, ${lighter}, ${darker})`}}></div>
        </div>
    )
}