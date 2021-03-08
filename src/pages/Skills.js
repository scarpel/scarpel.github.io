import { useContext, useEffect, useState } from "react"
import Waiter from "../components/Waiter"
import { front, back, others } from "../datasets/skills"
import { PagesContext } from "../context/PagesContext"
import IconsCard from "../components/IconsCard"
import withScrollable from "../HOC/withScrollable"
import SkillsTexts from "../texts/Skills"

import "../css/Page.css"
import "../css/Skills.css"

function Skills(){
    const { setPageInfo, updateSize, language } = useContext(PagesContext)
    const [ isShowing, setIsShowing ] = useState(false)
    const texts = SkillsTexts[language]

    useEffect(() => {
        document.title = "GHS: Habilidades"
        setPageInfo({ name: texts.pageName, mainColor: "var(--habilidades)", blurryText: "skills" })
    }, [])

    useEffect(updateSize, [isShowing])
    
    return (
        <div className="skills">
            <Waiter wait={2000} callback={() => setIsShowing(true)}>
                <div className="time-information">
                    <div className="circle"></div>
                    <span>{texts.disclaimer}</span>
                </div>
                <div className="cards">
                    <div className="card-placeholder">
                        <IconsCard name="front-end" data={front}/>
                    </div>
                    <div className="card-placeholder">
                        <IconsCard name="back-end" data={back}/>
                    </div>

                    <div className="card-placeholder">
                        <IconsCard name={texts.others} data={others}/>
                    </div>
                </div>
            </Waiter>
        </div>
    )
}

export default withScrollable(Skills)