import { useContext, useEffect, useRef } from "react"
import VideoCard from "../../components/VideoCard"
import videos from "../../datasets/videos"
import AnimatedText from "../../components/AnimatedText"
import { PagesContext } from "../../context/PagesContext"

import "../../css/StandardJobPage.css"
import "../../css/Videos.css"
import { join } from "path"
import { VIDEOS_IMGS } from "../../data/imgPath"

export default function Videos() {
    const { updateSize, windowSize } = useContext(PagesContext)
    const mainRef = useRef(undefined)
    const infoRef = useRef(undefined)
    const containerRef = useRef(undefined)
    const path = join(process.env.PUBLIC_URL, VIDEOS_IMGS)

    const handleGridRows = () => {
        if(windowSize.width>999){
            const children = containerRef.current.childNodes
            if(children.length>0){
                const child = children[0]
                const height = containerRef.current.offsetHeight
                const itemsPerColumn = Math.trunc(height/child.offsetHeight)
                const numColumns = Math.ceil(children.length/itemsPerColumn)
                containerRef.current.style.gridTemplateRows = `repeat(${itemsPerColumn}, ${child.offsetHeight}px)`
                containerRef.current.style.width = `${((numColumns+0.75)*child.offsetWidth) + ((numColumns-1)*50)}px`
            }
        }else containerRef.current.style.width = `${containerRef.current.offsetWidth*5}px`

        updateSize()
    }

    useEffect(() => {
        handleGridRows()
    }, [windowSize])

    useEffect(() => {
        document.title = `GHS: Vídeos`
    }, [])

    return (
        <div className="videos job-page" ref={mainRef}>
            <div className="videos-info job-desc" ref={infoRef}>
                <AnimatedText text="vídeos" delay={40}/>
                <p>
                    alguns poucos vídeos que fiz e/ou editei.
                </p>
            </div>
            <div className="videos-container" ref={containerRef}>
                {
                    videos.map((video, index) => (
                        <VideoCard 
                            style={{animationDelay: `${150*(index+1)}ms`}} 
                            info={video} 
                            key={index}
                            path={path}
                        />
                    ))
                }
            </div>
        </div>
    )
}