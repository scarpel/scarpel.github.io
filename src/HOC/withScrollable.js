import { useEffect, useRef, useContext } from "react"
import { PagesContext } from "../context/PagesContext"

import "../css/Scrollable.css"

export default function withScrollable(Component){
    return function (props) {
        const { setCurrentRef } = useContext(PagesContext)
        const scrollRef = useRef(undefined)

        useEffect(() => {
            setCurrentRef(scrollRef)
            return () => { setCurrentRef() }
        }, [])

        return (
            <div className="scrollable" ref={scrollRef}>
                <Component {...props}/>
            </div>
        )
    }
}