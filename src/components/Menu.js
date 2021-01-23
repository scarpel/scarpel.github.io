import "../css/Menu.css"

export default function Menu(props) {
    const { showing = false, items, handleClick = () => {} } = props

    return (
        <div className={`menu ${showing && "showing"}`}>
            <nav>
                <ul>
                    {
                        items.map((item, index) => 
                            <li 
                                key={index} 
                                onClick={() => handleClick(item.link)}
                            >
                                {item.title}
                            </li>
                        )
                    }
                </ul>
            </nav>
        </div>
    )
}