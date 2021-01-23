import { useContext, useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { PagesContext } from "../../context/PagesContext"
import getToolIcon from "../../datasets/toolIcons"
import APPS from "../../datasets/jobs/apps"
import { APPS_IMGS } from "../../data/imgPath"
import { join } from "path"
import ImageGrid from "../../components/ImageGrid"

import withScrollable from "../../HOC/withScrollable"

import "../../css/AppDetails.css"
import "../../css/ImageGrid.css"
import { loadAllImages } from "../../utils/imagesLoader"

function AppDetails(){
    const { appID } = useParams()
    const { setPageInfo, updateSize, windowSize } = useContext(PagesContext)
    const [ app, setApp ] = useState(undefined)
    const [ isLoading, setIsLoading ] = useState(true)
    const [ isImgLoaded, setIsImgLoaded ] = useState(false)
    const mediaPath = join(APPS_IMGS, appID)
    const mainRef = useRef(undefined)
    const contentRef = useRef(undefined)

    const calculateNumColumns = (children, height) => {
        let numColumns = 0, numElements = 0, total = height

        for(let i=0, length=children.length; i<length;i++){
            const offsetHeight = children[i].offsetHeight

            if(offsetHeight>total){
                numColumns++

                if(numElements === 0) total = height
                else{
                    numElements = 1
                    total = height-offsetHeight 
                }
            }else{
                total -= offsetHeight
                numElements++
            }
        }

        return numElements>0? numColumns+1 : numColumns
    }

    const handleTopicWidths = () => {
        const topics = document.querySelectorAll(".topic")

        if(topics){
            const width = document.querySelector(".topic-content").offsetWidth
            const mainHeight = contentRef.current.offsetHeight
            
            for(let i=0, length=topics.length; i<length; i++){
                const topic = topics[i]
                const numColumns = calculateNumColumns(topic.childNodes, mainHeight)
                topic.style.width = `${(numColumns)*width + (numColumns-1)*40}px`
            }

            updateSize()
        }
    }

    const getTopicContentElements = (topicIndex, content) => {
        return content.map(([title, description], index) => (
            <section key={`t${topicIndex}c${index}`} className="topic-content" style={{animationDelay: `${index*200}ms`}}>
                <h2 className="question">{title}</h2>
                <p>{description}</p>
            </section>
        ))
    }

    const getTopicElement = (index, topics) => {
        return (
            <div className="topic" key={`t${index}`}>
            {
                [...getTopicContentElements(index, topics)]
            }
            </div>
        )
    }

    const getHighlightElement = (index, highlight) => (
        <div key={`h-${index}`} className="highlight" style={{animationDelay: `${(index+1)*400}ms`}}>
            <img alt="highlight" src={join(mediaPath, highlight.url)}/>
        </div>
    )

    const getContentElements = () => {
        const contents = []
        const { highlights, topics } = app
        let highlightsIndex = 0

        for(let i=0, length=topics.length; i<length; i++){
            if(highlights[highlightsIndex]){
                contents.push(getHighlightElement(highlightsIndex, highlights[highlightsIndex]))
                highlightsIndex++
            }
            contents.push(getTopicElement(i, topics[i]))
        }

        return contents
    }

    useEffect(() => {
        if(app){
            document.title = `GHS: ${app.name}`
            const { squares = [], portraits  = [], panoramas = [] } = app.images

            handleTopicWidths()
            updateSize()

            loadAllImages([...squares, ...portraits, ...panoramas].map(src => join(mediaPath, src)))
                .then(() => setIsImgLoaded(true))
                .catch(err => console.log("Error while loading app's images", err))
        }
    }, [app])

    useEffect(() => { if(app) handleTopicWidths() }, [windowSize])

    useEffect(updateSize, [isImgLoaded])

    useEffect(() => {
        setPageInfo({ 
            name: "trabalhos", 
            mainColor: "var(--black)", 
            highlightColor: "var(--app-details)",
            blurryText: "",
            quick: true,
            dark: true,
            currentPage: "appDetails"
        })

        setApp(APPS[appID])
        setIsLoading(false)
    }, [])

    return (
        <div className="app-details" ref={mainRef}>
        {
            !isLoading && (
                <>
                <section className="info">
                    <div className="tools">
                    {
                        app.tools.map((name, index) => {
                            const Icon = getToolIcon(name)
                            return <Icon key={index}/>
                        })
                    }
                    </div>
                    <h1 className="name">{app.name}</h1>
                    <p className="desc">{app.description}</p>
                    { app.links && (
                        <div className="links">
                        {
                            app.links.map(([name, link], index) => (
                                <a 
                                    key={`l-${index}`} 
                                    className="btn" 
                                    role="button"
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {name}
                                </a>
                            ))
                        }
                        </div>
                    )}
                </section>
                <div className="content" ref={contentRef}>
                {
                    [...getContentElements()]
                }
                </div>
                <div className="galery">
                    <h2 className="title">galery</h2>
                    <h2 className="hollow-title">galery</h2>
                    {
                        isImgLoaded?
                            <ImageGrid 
                                data={app.images}
                                path={mediaPath}
                            />
                        :
                            <div className="image-grid mock">
                                <div className="squares-panorama">
                                    <div className="squares">
                                        <div className="square" style={{animationDelay: "0.2s"}}></div>
                                        <div className="square" style={{animationDelay: "0.4s"}}></div>
                                    </div>
                                    <div className="panorama" style={{animationDelay: "0.3s"}}></div>
                                </div>
                            </div>
                    }
                </div>
                </>
            )
        }
        </div>
    )
}

export default withScrollable(AppDetails)