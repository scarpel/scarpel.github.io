import { useState, useEffect, useCallback } from "react"
import { debounce } from "lodash"

export default function useTest() {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    const updateSize = () => (
        setSize(
            {
                width: window.innerWidth,
                height: window.innerHeight
            }
        )
    )

    const handleResize = useCallback(debounce(updateSize, 500), [])

    useEffect( () => {
        window.addEventListener("resize", handleResize)
        return () => {
            handleResize.cancel()
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return size
}