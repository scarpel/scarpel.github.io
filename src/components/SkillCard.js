import React from "react"
import "../css/SkillCard.css"

function SkillCard(props){
    const {size, strokeWidth, progress, strokeColor, insideStrokeColor, style={}} = props
    let center = size/2
    let radius = center - (strokeWidth/2)
    let circumference = 2 * Math.PI * radius
    let offset = ((100-progress)/100)*circumference

    return (
        <div className="skill-card" style={{fontSize: props.contentSize, width:size, height:size, ...style}}>
            <div className={props.icon?"skill-icon":"skill-text"}>
                {props.icon || props.text}
            </div>
            <div className="skill-percentage">
                {progress}%
            </div>

            <svg
                className="skill-svg"
                width={size}
                height={size}
            >

                <circle
                    className="skill-undercircle"
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                />

                {progress>0 && <>
                    <circle
                        className="skill-circle"
                        stroke={strokeColor}
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                    />
                    <circle
                        className="skill-circle-inside"
                        stroke={insideStrokeColor}
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth-1}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                    />
                </>}
            </svg>
        </div>
    )
}

SkillCard.defaultProps = {
    size: 75,
    strokeWidth: 7,
    progress: 0,
    contentSize: "2.25em",
    strokeColor: "transparent",
    insideStrokeColor: "var(--habilidades)"
}

export default SkillCard