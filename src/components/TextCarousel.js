import { useState, useEffect } from "react"
import AnimatedText from "./AnimatedText"

import "../css/TextCarousel.css"

export default function TextCarousel(props) {
    const { words=[""], className, delay=30 } = props
    const [currentIndex, setCurrentIndex] = useState(0)
    const currentWord = words[currentIndex]
    const wordDelay = currentWord.length*delay

    useEffect(() => {
        const timeout = setTimeout(() => {
            const newCurrentIndex = currentIndex + 1
            setCurrentIndex(newCurrentIndex === words.length? 0 : newCurrentIndex)
        }, 3000 + wordDelay)

        return () => window.clearTimeout(timeout)
    }, [currentIndex])

    return (
        <div className={`text-carousel ${className}`}>
            <AnimatedText key={currentIndex} delay={delay} text={words[currentIndex]}/>
            <div key={currentWord+currentIndex} className="underline" style={{animationDelay: `${wordDelay}ms`}}></div>
        </div>
    )
}