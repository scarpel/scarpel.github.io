import React, { useContext, useEffect, useState } from "react"
import Designs from "./jobs/Designs"
import Videos from "./jobs/Videos"
import Apps from "./jobs/Apps"
import { PagesContext } from "../context/PagesContext"
import Waiter from "../components/Waiter"
import withScrollable from "../HOC/withScrollable"

import "../css/Page.css"
import "../css/Jobs.css"

function Jobs() {
    const { setPageInfo, updateSize, pageInfo } = useContext(PagesContext)
    const [ CurrentPage, setCurrentPage ] = useState(() => Apps)
    const isQuick = pageInfo.currentPage === "appDetails"? true: false

    useEffect(() => {
        setPageInfo({ 
            name: "trabalhos", 
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