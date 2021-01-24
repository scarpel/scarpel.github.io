import { useState } from "react"
import { join } from "path"

import "../css/ImageGrid.css"

export default function ImageGrid(props) {
    const { squares = [], panoramas = [], portraits = [] } = props.data
    const { path = "", onClick = () => {} } = props

    const getIMGPath = (src) => join(path, src)

    const getSquare = (counters, positions, info) => {
        if(counters[0]>1){

            if(counters[1]>0 && Math.random()<0.6){
                info.panoramaReverse = !info.panoramaReverse

                return (
                    <div key={`sp-${counters[0]}`} className={`squares-panorama spaced-items-vertical " ${ info.panoramaReverse ? "" : "-reversed"}`}>
                        <div className="squares spaced-items">
                            <img className="square" key={`s-${counters[0]--}`} alt="square" onClick={onClick} src={getIMGPath(squares[positions[0]++])}/>
                            <img className="square" key={`s-${counters[0]--}`} alt="square" onClick={onClick} src={getIMGPath(squares[positions[0]++])}/>
                        </div>
                        <img className="panorama" key={`pa-${counters[1]--}`} alt="panorama" onClick={onClick} src={getIMGPath(panoramas[positions[1]++])}/>
                    </div>
                )
            }else return (
                <div key={`ts-${counters[0]}`} className="two-squares spaced-items-vertical">
                    <img className="square" key={`s-${counters[0]--}`} alt="square" onClick={onClick} src={getIMGPath(squares[positions[0]++])}/>
                    <img className="square" key={`s-${counters[0]--}`} alt="square" onClick={onClick} src={getIMGPath(squares[positions[0]++])}/>
                </div>
            )
        }else{
            return (
                <div key={`bs-${counters[0]}`} className="bigger-square">
                    <img className="square" key={`s-${counters[0]--}`} alt="square" onClick={onClick} src={getIMGPath(squares[positions[0]++])}/>
                    </div>
            )
        }
    }

    const getPanorama = (counters, positions) => {
        if(counters[1]>1){
            return (
                <div key={`tp-${counters[1]}`} className="two-panoramas spaced-items-vertical">
                    <img className="panorama" key={`pa-${counters[1]--}`} alt="panorama" onClick={onClick} src={getIMGPath(panoramas[positions[1]++])}/>
                    <img className="panorama" key={`pa-${counters[1]--}`} alt="panorama" onClick={onClick} src={getIMGPath(panoramas[positions[1]++])}/>
                </div>
            )
        }else{
            return (
                <div key={`bp-${counters[1]}`} className="bigger-panorama">
                    <img className="panorama" key={`pa-${counters[1]--}`} alt="panorama" onClick={onClick} src={getIMGPath(panoramas[positions[1]++])}/>
                </div>
            )
        }
    }

    const getPortrait = (counters, positions) => {
        return (
            <div key={`pc-${counters[2]}`} className="portrait-container">
                <img className="portrait" key={`po-${counters[2]--}`} alt="portrait" onClick={onClick} src={getIMGPath(portraits[positions[2]++])}/>
            </div>
        )
    }

    const getGrid = () => {
        const components = []
        const counters = [squares.length, panoramas.length, portraits.length]
        const positions = [0,0,0]
        const info = {
            panoramaReverse: false
        }

        let numSquaresPerRound = counters[1] ? Math.floor((counters[0]/2)/counters[1]): 1, squareFunction

        if(numSquaresPerRound>1) squareFunction = () => {for(let i=0; i<numSquaresPerRound; i++) components.push(getSquare(counters, positions, info))}
        else squareFunction = () => components.push(getSquare(counters, positions, info))

        while(counters[0]){
            squareFunction()
            if(counters[2]) components.push(getPortrait(counters, positions))
        }

        while(counters[1]){
            components.push(getPanorama(counters, positions))
            if(counters[2]) components.push(getPortrait(counters, positions))
        }
        
        while(counters[2]) components.push(getPortrait(counters, positions))

        return components
    }

    const gridComponents = useState(getGrid())[0]

    return (
        <div className="image-grid spaced-items">
            {
                [...gridComponents]
            }
        </div>
    )
}