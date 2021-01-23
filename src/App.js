import { useContext, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { PagesContext } from "./context/PagesContext"
import Home from "./pages/Home"
import About from "./pages/About"
import Jobs from "./pages/Jobs"
import PAGES_URL from "./data/pagesURL"
import AppDetails from "./pages/jobs/AppDetails"
import './App.css';
import Skills from "./pages/Skills"
import Navbar from "./components/Navbar"
import GlitchText from "./components/GlitchText"
import BlurryText from "./components/BlurryText"
import PagesSelector from "./components/PagesSelector"

import "./css/StandardGlitchText.css"
import Contact from "./pages/Contact"

function App() {
  const { currentRef, pageInfo, imageElement, setImageElement, windowSize } = useContext(PagesContext)
  const deltaX = 50

  const scrollingConfig = {
      ease: .1,
      current: 0,
      previous: 0
  }

  const handleWheel = (e) => {
    window.scrollBy(e.deltaY<0?-deltaX:deltaX,0)
  }

  useEffect(() => {
    window.addEventListener("wheel", handleWheel)
    return () => { 
        window.removeEventListener("wheel", handleWheel)
        document.body.style.height = `100%`
    }
  }, [])

  useEffect(() => {
    if(currentRef) requestAnimationFrame(scrolling)
  }, [currentRef])
  
  useEffect(() => {
    if(currentRef) document.body.style.width = `${currentRef.current.getBoundingClientRect().width}px`
    else document.body.style.width = "100%"
  }, [windowSize.width, currentRef])

  const scrolling = () => {
      if(currentRef && currentRef.current){
          scrollingConfig.current = window.scrollX;
          scrollingConfig.previous += Math.round((scrollingConfig.current - scrollingConfig.previous) * scrollingConfig.ease)
  
          currentRef.current.style.transform = `translate3d(-${scrollingConfig.previous}px,0,0)`
          requestAnimationFrame(scrolling)
      }
  }

  return (
    <div className="App">
        <div onClick={() => {setImageElement()}} className={`image-focus ${imageElement? "showing": "hidden"}`}>
          <button>&times;</button>
          { imageElement && <img 
              src={ imageElement.src }
              alt="Zoom"
              onClick={(e) => e.stopPropagation()}
              style={ imageElement.style }
            />
          }
        </div>

        <div className={`scrollable-container page ${pageInfo.dark && "dark"}`}>
          <Navbar dark={pageInfo.dark}/>
          { pageInfo.name && 
            <GlitchText
              key={pageInfo.name} 
              text={pageInfo.name} 
              repetitions={3} 
              color={pageInfo.mainColor}
              quick={pageInfo.quick}
            />
          }
          { pageInfo.pagination && <PagesSelector items={pageInfo.pagination}/> }
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path={PAGES_URL.ABOUT} component={About}/>
            <Route path={PAGES_URL.SKILLS} component={Skills}/>
            <Route exact path={PAGES_URL.JOBS} component={Jobs}/>
            <Route exact path={PAGES_URL.CONTACT} component={Contact}/>
            <Route path={`${PAGES_URL.JOBS}/:appID`} component={AppDetails}/>
            <Route path="/" component={Home} />
          </Switch>
        { pageInfo.blurryText && <BlurryText key={pageInfo.blurryText} text={pageInfo.blurryText}/> }
      </div>
    </div>
  );
}

export default App;
