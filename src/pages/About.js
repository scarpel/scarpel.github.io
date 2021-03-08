import { useEffect, useContext, useRef } from "react"
import Presentation from "./about/Presentation"
import { PagesContext } from "../context/PagesContext"
import Certificades from "../components/Certificades"
import withScrollable from "../HOC/withScrollable"
import lottie from "lottie-web"
import statueAnimation from "../media/lottie/sobre.json"
import graduationAnimation from "../media/lottie/cap.json"
import certificationAnimation from "../media/lottie/certificade.json"
import useWindowSize from "../hooks/useWindowSize"
import usePeekABoo from "../hooks/usePeekABoo"
import certificados from "../datasets/certificados"
import { join } from "path"
import { CERTFICADES_MINIATURE } from "../data/imgPath"
import AboutInfo from "../texts/About"

import "../css/Page.css"
import "../css/About.css"

function About() {
    const { setPageInfo, language } = useContext(PagesContext)
    const size = useWindowSize()
    const statue = useRef()
    const graduation = useRef()
    const certificade = useRef()
    const aboutRef = useRef()
    const educationRef = useRef()
    const certificadesRef = useRef()
    const texts = AboutInfo[language]

    const handlePeekABoo = (divRef, animationRef, animation) => {
        loadAnimation(animationRef, animation)
        divRef.current.classList.remove("hidden")
    }

    usePeekABoo({
        items: [
            {
                ref: aboutRef,
                callback: () => handlePeekABoo(aboutRef, statue, statueAnimation),
                percentage: 0.2
            },
            {
                ref: educationRef,
                callback: () => handlePeekABoo(educationRef, graduation, graduationAnimation),
                percentage: 0.2
            },
            {
                ref: certificadesRef,
                callback: () => handlePeekABoo(certificadesRef, certificade, certificationAnimation),
                percentage: 0.15
            }
        ],
        windowSize: size.width,
        timeout: 2500,
        triggerAtStart: true
    })

    const loadAnimation = (ref, animation) => {
        if(ref.current){
            lottie.loadAnimation({
                container: ref.current,
                autoplay: true,
                loop: false,
                animationData: animation
            })
        }
    }

    useEffect(() => {
        document.title = `GHS: Sobre Mim`
        setPageInfo({ name: texts.pageName, mainColor: "var(--sobre)", blurryText: "about" })
        
        if("ontouchstart" in window){
            const timeouts = [
                setTimeout(() => handlePeekABoo(aboutRef, statue, statueAnimation), 2500),
                setTimeout(() => handlePeekABoo(educationRef, graduation, graduationAnimation), 3000),
                setTimeout(() => handlePeekABoo(certificadesRef, certificade, certificationAnimation), 3500)
            ]

            return () => timeouts.map(timeout => window.clearTimeout(timeout))
        }
    }, [])

    return (
        <div className="about">
            <Presentation yearsLocation={texts.yearsLocation}/>
            <div className="about-me hidden" ref={aboutRef}>
                <div className="lottie-container statue" ref={statue}></div>
                <section className="text-block">
                    <p>{texts.intro()}</p>
                </section>
            </div>
            
            <div className="education hidden" ref={educationRef}>
                <div className="lottie-container graduation" ref={graduation}></div>
                <section className="text-block">
                    <p>{texts.education()}</p>
                </section>
            </div>

            <div className="certificades-container hidden" ref={certificadesRef}>
                <div className="lottie-container certificade" ref={certificade}></div>
                <section className="text-block">
                    <p>{texts.certificades()}</p>
                </section>
                <Certificades data={certificados} path={join(process.env.PUBLIC_URL, CERTFICADES_MINIATURE)}/>
            </div>
        </div>
    )
}

export default withScrollable(About)