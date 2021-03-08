import React, { useContext, useEffect, useState } from "react"
import Designs from "./jobs/Designs"
import Videos from "./jobs/Videos"
import Apps from "./jobs/Apps"
import { PagesContext } from "../context/PagesContext"
import Waiter from "../components/Waiter"
import withScrollable from "../HOC/withScrollable"
import JobsTexts from "../texts/Jobs"

import "../css/Page.css"
import "../css/Jobs.css"

function Jobs() {
    const { setPageInfo, updateSize, pageInfo, language } = useContext(PagesContext)
    const [ CurrentPage, setCurrentPage ] = useState(() => Apps)
    const isQuick = pageInfo.currentPage === "appDetails"? true: false
    const texts = JobsTexts[language]

    useEffect(() => {
        setPageInfo({ 
            name: texts.pageName, 
            mainColor: "var(--trabalhos)", 
            blurryText: "jobs",
            pagination: [
                {
                    name: "Apps",
                    callback: () => setCurrentPage(() => Apps)
                },
                { 
                    name: "Design",
                    callback: () => setCurrentPage(() => Designs)
                },
                { 
                    name: "Videos",
                    callback: () => setCurrentPage(() => Videos)
                }
            ],
            quick: isQuick
        })
    }, [])

    useEffect(updateSize, [CurrentPage])

    return (
        <div className="jobs">
            <Waiter wait={isQuick? 0: 2000} callback={updateSize}>
                {<CurrentPage />}
            </Waiter>
        </div>
    )
}

export default withScrollable(Jobs)