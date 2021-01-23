import "../css/useArrows.css"

export default function useArrows(handleLeftClick = () => {}, handleRightClick = () => {}) {
    const LeftArrow = () => <div className="left-arrow" onClick={handleLeftClick}></div>
    const RightArrow = () => <div className="right-arrow" onClick={handleRightClick}></div>

    return [ LeftArrow, RightArrow ]
}