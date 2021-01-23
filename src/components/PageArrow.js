import { FiArrowRightCircle } from "react-icons/fi"
import { useHistory } from "react-router-dom"

import "../css/PageArrow.css"

export default function PageArrow(props) {
    const { goToPage = "", pageName = "", split = false } = props
    const history = useHistory()

    return (
        <div className={`page-arrow ${split && "split"}`} onClick={() => history.push(goToPage)}>
            <div>{ <FiArrowRightCircle /> }</div>
            <span>{pageName}</span>
        </div>
    )
}