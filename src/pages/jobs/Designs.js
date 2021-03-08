import { useState, useEffect, useContext } from "react"
import ImageGrid from "../../components/ImageGrid"
import { panoramas, portraits, squares } from "../../datasets/design_imgs"
import AnimatedText from "../../components/AnimatedText"
import { loadAllImages } from "../../utils/imagesLoader"
import { join } from "path"
import { DESIGN_IMGS } from "../../data/imgPath"
import { PagesContext } from "../../context/PagesContext"
import DesignsTexts from "../../texts/jobs/Designs"

import "../../css/Designs.css"
import "../../css/StandardJobPage.css"
import "../../css/ImageGrid.css"

export default function Designs(){
    const [ isLoading, setIsLoading ] = useState(true)
    const { updateSize, language } = useContext(PagesContext)
    const path = join(process.env.PUBLIC_URL, DESIGN_IMGS)
    const texts = DesignsTexts[language]

    useEffect(() => {
        document.title = `GHS: Designs`
        loadAllImages([...squares, ...panoramas, ...portraits].map(src => join(path, src)))
            .then(() => setIsLoading(false))
            .catch(err => console.log("Error while loading design images", err))
    }, [])

    useEffect(updateSize, [isLoading])

    return (
        <div key="designs" className="designs job-page">
            <div className="design-info job-desc">
                <AnimatedText text="designs" delay={40}/>
                <p>{texts.content}</p>
            </div>

            {
                isLoading?
                    (<div className="image-grid mock spaced-items">
                        <div className="two-squares spaced-items-vertical">
                            <div className="square"></div>
                            <div className="square" style={{animationDelay: "0.1s"}}></div>
                        </div>
                        <div className="squares-panorama spaced-items-vertical">
                            <div className="squares spaced-items">
                                <div className="square" style={{animationDelay: "0.2s"}}></div>
                                <div className="square" style={{animationDelay: "0.4s"}}></div>
                            </div>
                            <div className="panorama" style={{animationDelay: "0.3s"}}></div>
                        </div>
                        <div className="portrait-container">
                            <div className="portrait" style={{animationDelay: "0.5s"}}></div>
                        </div>
                    </div>)
                :
                (
                    <ImageGrid
                        data={{ squares, panoramas, portraits }}
                        path={path}
                    />
                )
            }
        </div>
    )
}