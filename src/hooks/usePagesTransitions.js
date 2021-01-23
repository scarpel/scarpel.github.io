import "../css/PagesTransitions.css"

export default function usePagesTransitions(){
    const PagesComponent = (
        <div className="pages-transitions">
            <div className="page-slider"></div>
        </div>
    )

    const goTo = (pageIndex, currentIndex=-1) => {}

    return [ PagesComponent, goTo ]
}