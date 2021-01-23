import getToolIcon from "../datasets/toolIcons"
import lottie from "lottie-web"
import { BRIEF_APPS_IMGS } from "../data/imgPath"
import { join } from "path"

import "../css/AppCard.css"
import { useEffect, useRef } from "react"

export default function AppCard(props) {
    const { item, numTools = 5, style = {}, className="", handleClick = () => {} } = props
    const lottieRef = useRef()

    useEffect(() => {
        if(item.animationName){
            const animation = lottie.loadAnimation({
                container: lottieRef.current,
                autoplay: true,
                loop: true,
                path: join(BRIEF_APPS_IMGS, item.animationName)
            })
            return () => animation.stop()
        }
    }, [])

    const getToolsArray = () => {
        if(item.tools.length>numTools){
            return [...item.tools.slice(0, numTools), "+"]
        }else return item.tools
    }

    return (
        <div className={`app-card ${className}`} style={style}>
            <div className="app-img" ref={lottieRef}>
            </div>
            <section className="app-info">
                <div className={`app-tools ${item.tools.length>numTools? "full":""}`}>
                {
                    getToolsArray().map((name, index) => {
                        const Icon = getToolIcon(name)
                        return <Icon key={index}/>
                    })
                }
                </div>
                <h1 className="app-title">{item.name}</h1>
                <p className="app-desc">{item.description}</p>
                <button onClick={handleClick}>+ detalhes</button>
            </section>
        </div>
    )
}