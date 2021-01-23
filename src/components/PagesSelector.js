import { useState } from "react"

import "../css/PagesSelector.css"

export default function PagesSelector(props) {
    const { items = [], initialIndex = 0 } = props
    const [ currentIndex, setCurrentIndex ] = useState(initialIndex)

    return (
        <div className="pages-selector">
        {
            items.map(({name, callback = () => {}}, index) => (
                <label key={index}>
                    <input 
                        type="radio"
                        name={name}
                        value={index}
                        checked={index === currentIndex}
                        onChange={() => { 
                            if(index !== currentIndex){
                                setCurrentIndex(index)
                                callback(index)
                            }
                        }}
                    />
                    <span className="page-bubble"></span>
                    <span className="page-name">{name}</span>
                </label>
            ))
        }
        </div>
    )
}