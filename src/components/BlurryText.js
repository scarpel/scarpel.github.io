import { useState } from "react"
import "../css/BlurryText.css"

export default function BlurryText(props) {
    const { text = "", delay = 50 } = props
    const positions = [
        ["0", "2", "2", "0", "5", "2", "5"],
        ["5", "0", "0", "2", "4", "1", "2"],
        ["1", "2", "3", "1", "2", "3", "1"],
        ["0", "3", "2", "4", "0", "3", "2"]
    ]
    
    const getTextComponents = () => {
        const length = text.length
        const portion = 100 / length
        const components = []
        const position = positions[Math.trunc(Math.random()*positions.length)]

        for(let i=0, padding=0, up=false; i<length; i++, padding += portion, up = !up){
            const displacement = position[i]
            const style = {animationDelay: `${delay*i}ms`}
            
            if(up){
                style.alignSelf = "flex-start"
                style.marginTop = `${displacement}%`
                style.animationName = "drop-letter"
            }else{
                style.alignSelf = "flex-end"
                style.marginBottom = `${displacement}%`
                style.animationName = "slide-letter"
            }

            components.push(
                <div 
                    className="letter" 
                    key={i} 
                    style={style}
                >
                    { text[i] }
                </div>
            )
        }

        return components
    }

    const components = useState(getTextComponents())[0]

    return (
        <section className="blurry-text">
            {
                [...components]
            }
        </section>
    )
}