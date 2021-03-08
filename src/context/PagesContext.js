import { useState, createContext } from "react";
import useWindowSize from "../hooks/useWindowSize";
import LANGUAGES from "../data/languages";

const PagesContext = createContext()

function PagesContextProvider({children}) {
    const [currentRef, setCurrentRef] = useState(undefined);
    const [ pageInfo, _setPageInfo ] = useState({});
    const [ imageElement, _setImageElement ] = useState(undefined);
    const [ lastAppIndex, setLastAppIndex ] = useState(undefined);
    const windowSize = useWindowSize();
    const isTouch = "ontouchstart" in window;
    const [ language, setLanguage ] = useState(LANGUAGES.en);

    const setRef = (ref = undefined) => setCurrentRef(ref)

    const updateSize = () => {
        if(currentRef && currentRef.current) document.body.style.width = `${currentRef.current.getBoundingClientRect().width}px`
    }

    const setPageInfo = (obj = {}) => {
        if(obj.highlightColor){
            document.documentElement.style.setProperty("--highlight-color", obj.highlightColor)
            document.documentElement.style.setProperty("--main-color", obj.mainColor)
        }else if(obj.mainColor){
            document.documentElement.style.setProperty("--main-color", obj.mainColor)
            document.documentElement.style.setProperty("--highlight-color", obj.mainColor)
        }

        _setPageInfo(obj)
    }

    const setImageElement = (element = undefined) => {
        if(element){
            const { top, left } = element.getBoundingClientRect()
            _setImageElement({
                src: element.currentSrc,
                style: {
                    width: element.width,
                    height: element.height,
                    top,
                    left
                }
            })
        }else _setImageElement(undefined)
    }

    return (
        <PagesContext.Provider value={
            { 
                currentRef, 
                setCurrentRef: setRef, 
                pageInfo, 
                setPageInfo, 
                imageElement, 
                setImageElement,
                windowSize,
                updateSize,
                lastAppIndex,
                setLastAppIndex,
                isTouch,
                language,
                setLanguage
            }
        }>
            {
                children
            }
        </PagesContext.Provider>
    )
}

export { PagesContextProvider, PagesContext }