import { useContext, useEffect, useState } from "react"
import Waiter from "../components/Waiter"
import { front, back, others } from "../datasets/skills"
import { PagesContext } from "../context/PagesContext"
import IconsCard from "../components/IconsCard"
import withScrollable from "../HOC/withScrollable"

import "../css/Page.css"
import "../css/Skills.css"

function Skills(){
    const { setPageInfo, updateSize } = useContext(PagesContext)
    const [ isShowing, setIsShowing ] = useState(false)

    useEffect(() => {
        document.title = "GHS: Habilidades"
        setPageInfo({ name: "habilidades", mainColor: "var(--habilidades)", blurryText: "skills" })
    }, [])

    useEffect(updateSize, [isShowing])
    
    return (
        <div className="skills">
            <Waiter wait={2000} callback={() => setIsShowing(true)}>
                <div className="time-information">
                    <div className="circle"></div>
                    <span>Quanto mais opaca, mais tempo faz desde a última vez que a utilizei</span>
                </div>
                <div className="cards">
                    <div className="card-placeholder">
                        <IconsCard name="front-end" data={front}/>
                    </div>
                    <div className="card-placeholder">
                        <IconsCard name="back-end" data={back}/>
                    </div>

                    <div className="card-placeholder">
                        <IconsCard name="outros" data={others}/>
                    </div>
                </div>
            </Waiter>
        </div>
    )
}

export default withScrollable(Skills)