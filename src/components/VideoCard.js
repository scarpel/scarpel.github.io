import "../css/VideoCard.css"
import getToolIcon from "../datasets/toolIcons"
import { join } from "path"

export default function VideoCard(props) {
    const { info, style={}, path = "" } = props

    return (
        <div className="video-card" style={style}>
            <div className="video-media">
                <a href={info.link} target="_blank" rel="noopener noreferrer">
                    <img src={ join(path, info.img) } alt="video thumb"/>
                </a>
                <div className="duration"> { info.duration } </div>
            </div>
            <div className="video-info">
                <a href={info.link} target="_blank" rel="noopener noreferrer">
                    <h1 className="video-name">{ info.name }</h1>
                </a>
                <p className="video-description">{ info.description }</p>
                <div className="video-tools spaced-items">
                {
                    info.tools.map((name, index) => {
                        const Icon = getToolIcon(name)
                        return <Icon key={index}/>
                    })
                }
                </div>
            </div>
        </div>
    )
}