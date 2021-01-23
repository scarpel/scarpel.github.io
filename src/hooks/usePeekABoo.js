import { useEffect, useState, useCallback, useRef } from "react"
import { throttle } from "lodash"

export default function usePeekABoo(props={}){
    const { items = {}, percentage = 0.4, orientation = "width", windowSize, timeout = 0, triggerAtStart = false } = props
    const elementSizeProperty = orientation === "width"? "offsetWidth":"offsetHeight"
    const coordinate = orientation === "width"? "x":"y"
    const [seen, setSeen] = useState(0)
    const seenRef = useRef(seen)
    const percentageRef = useRef([])

    const verify = useCallback(throttle((e) => {
        try{
            if(e.deltaY>0){
                let index = seenRef.current
                const length = items.length
                const percentages = percentageRef.current
        
                while(index<length){
                    const bounding = items[index].ref.current.getBoundingClientRect()
                    const coordinateValue = bounding[coordinate]
        
                    if(coordinateValue>0 && (windowSize-coordinateValue)<percentages[index]) break
                    else index++
                }
        
                if(index !== seenRef.current){
                    for(let i=seenRef.current; i<index; i++){
                        const item = items[i]
                        if(item.callback) item.callback()
                    }
        
                    setSeen(index)
                }
            }
        } catch (e){
            return undefined
        }
    }, 1000), [])

    useEffect(() => {
        percentageRef.current = items.map(item => item.ref.current[elementSizeProperty] * (item.percentage || percentage))
    }, [windowSize])

    useEffect(() => {
        const t = setTimeout(() => {
            window.addEventListener("wheel", verify)
            if(triggerAtStart) verify({deltaY: 3})
        }, timeout)

        return () => {
            window.clearTimeout(t)
            window.removeEventListener("wheel", verify)
        }
    }, [])

    useEffect(() => {
        seenRef.current = seen
        if(seen >= items.length) window.removeEventListener("wheel", verify)
    }, [seen])

    return [seen]
}