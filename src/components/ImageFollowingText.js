import { useRef } from "react"

import "../css/ImageFollowingText.css"

export default function ImageFollowingText(props) {
    const { data } = props
    const imgRef = useRef()
    const aRef = useRef()

    const handleMouseMove = e => {
        if(e.target.nodeName !== "IMG"){
            const { offsetX, offsetY } = e.nativeEvent
            imgRef.current.style.transform = `translate3d(${offsetX-20}px, ${offsetY}px, 0)`
        }
    }

    return (
        <div 
            className ="img-following-text"
            onMouseMove = {handleMouseMove}
            onClick={() => aRef.current.click()}
        >
            <a ref={aRef} href={data.link} target="_blank" rel="noopener noreferrer"></a>
            <span>{ data.text }</span>
            <img ref={imgRef} src={ data.src } alt={"Following Text"} />
        </div>
    )
}