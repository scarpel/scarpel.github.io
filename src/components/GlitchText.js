import React, { useEffect, useRef } from "react"
import "../css/GlitchText.css"

export default function GlitchText(props) {
    const { text, repetitions=0, delay = 200, color = undefined, quick } = props
    const extra = useRef(undefined)

    useEffect(() => {
        if(extra.current){
            if(repetitions) setTimeout(() => { if(extra.current) extra.current.style.display = "none" }, (delay*repetitions)+1500)
            else extra.current.style.display = "none"
        }
    }, [])

    const getRepetitions = () => {
        let rows = []

        for(let i=0; i<repetitions; i++){
            rows.push(
                <span className="auxiliar-text" key={i} style={{animationDelay: `${i*delay}ms`, WebkitTextStrokeColor: color}}>
                    {text}
                </span>
            )
        }

        return rows
    }

    return (
        <div className={`glitch-text ${quick && "quick"}`}>
            <span className="main-text" style={{color}}>{text}</span>
            <div className="repetitions" ref={extra}>
                {
                    [...getRepetitions()]
                }
            </div>
        </div>
    )
}