import { useEffect, useRef } from "react"
import "../css/AnimatedText.css"

export default function AnimatedText(props) {
    const { text, delay=30, className = "", style = {} } = props
    const ref = useRef(undefined)
    const id = new Date().getTime()

    useEffect(() => {
        const timeout = setTimeout(() => ref.current && ref.current.classList.add("done"), 700+(text.length*delay))
        return () => window.clearTimeout(timeout)
    }, [])

    return (
        <div className={`animated-text ${className}`} style={style} ref={ref}>
            {
                [...text].map((letter, index) => <div className="letter" key={`${id}${index}`} style={{animationDelay: `${index*delay}ms`}}>{letter}</div>)
            }
        </div>
    )
}