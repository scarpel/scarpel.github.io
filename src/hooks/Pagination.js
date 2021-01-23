import { useState } from "react"

import "../css/Pagination.css"

export default function Pagination(props) {
    const goToPosition = (id) => {
        window.scrollBy(document.getElementById(id).getBoundingClientRect().left, 0)
    }

    const { ids = [], name="pagination", initial = 0, onCheck = goToPosition } = props
    const [current, setCurrent] = useState(initial)

    const handleCheck = (e, id) => {
        const value = parseInt(e.target.value)
        if(value !== current){
            setCurrent(value)
            onCheck(id)
        }
    }

    return (
        <div className="pagination">
            {
                ids.map((id, index) => (
                    <label key={id}>
                        <input 
                            type="radio"
                            name={name} 
                            value={index} 
                            checked={index === current}
                            onChange={(e) => handleCheck(e, id)}
                        />
                        <span></span>
                    </label>
                ))
            }
        </div>
    )
}