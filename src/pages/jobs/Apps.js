import { useContext, useEffect, useRef, useState } from "react"
import AppCard from "../../components/AppCard"
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi"
import { PagesContext } from "../../context/PagesContext"
import { useHistory } from "react-router-dom"
import PAGES_URL from "../../data/pagesURL"
import { join } from "path"
import { BRIEF_APPS_IMGS } from "../../data/imgPath"
import BRIEF_APPS from "../../datasets/jobs/briefApps"

import "../../css/Apps.css"

export default function Apps() {
    const { lastAppIndex, setLastAppIndex, pageInfo } = useContext(PagesContext)
    const [currentIndex, setCurrentIndex] = useState(0)
    const history = useHistory()
    const currentApp = BRIEF_APPS[currentIndex]
    const appsLastIndex = BRIEF_APPS.length-1
    const path = join(process.env.PUBLIC_URL, BRIEF_APPS_IMGS)

    const currentTouchStart = useRef(0)
    const currentIndexRef = useRef(currentIndex)
    const currentDirectionRef = useRef("right")

    const next = () => {
        const n = currentIndexRef.current+1
        if(n<BRIEF_APPS.length){
            currentIndexRef.current = n
            currentDirectionRef.current = "right"
            setCurrentIndex(n)
        }
    }

    const previous = () => {
        const n = currentIndexRef.current-1
        if(n>=0){
            currentIndexRef.current = n
            currentDirectionRef.current = "left"
            setCurrentIndex(n)
        }
    }

    const handleWheel = (e) => {
        const { deltaY } = e

        if(deltaY>0) next()
        else previous()
    }

    const handleTouchStart = (e) => currentTouchStart.current = e.touches[0].clientX

    const handleTouchEnd = (e) => {
        const delta = currentTouchStart.current - e.changedTouches[0].clientX

        if(delta){
            if(delta>0) next()
            else previous()
        }
    }

    useEffect(() => {
        document.title = `GHS: Apps`
        const isMobile = "ontouchstart" in window

        if(lastAppIndex){
            if(pageInfo.quick){
                setCurrentIndex(lastAppIndex)
                currentIndexRef.current = lastAppIndex
            }
            setLastAppIndex(undefined)
        }

        if(isMobile){
            window.addEventListener("touchstart", handleTouchStart)
            window.addEventListener("touchend", handleTouchEnd)
        }

        window.addEventListener("wheel", handleWheel)
        return () => {
            window.removeEventListener("wheel", handleWheel)
            if(isMobile){
                window.removeEventListener("touchstart", handleTouchStart)
                window.removeEventListener("touchend", handleTouchEnd)
            }
        }
    }, [])

    return (
        <div className="apps">
            <button className="arrow-btn left" onClick={previous} disabled={currentIndex === 0} >
                <FiArrowLeftCircle />
            </button>
            <AppCard 
                key={currentIndex} 
                item={currentApp} 
                style={{animationName: `swipe-${currentDirectionRef.current}`}}
                className={currentDirectionRef.current}
                handleClick={() => {
                    setLastAppIndex(currentIndex)
                    history.push(`${PAGES_URL.JOBS}/${currentApp.id}`)
                }}
                path={path}
            />
            <div className="apps-index">
                <span className="current-index">{`${currentIndex+1}`.padStart(2, "0")}</span>
                <span className="total-indexes">{`${BRIEF_APPS.length}`.padStart(2, "0")}</span>
            </div>
            <button className="arrow-btn right" onClick={next} disabled={currentIndex === appsLastIndex}>
                <FiArrowRightCircle />
            </button>
        </div>
    )
}