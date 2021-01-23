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

import "../css/Page.css"
import "../css/About.css"

function About() {
    const { setPageInfo } = useContext(PagesContext)
    const size = useWindowSize()
    const statue = useRef()
    const graduation = useRef()
    const certificade = useRef()
    const aboutRef = useRef()
    const educationRef = useRef()
    const certificadesRef = useRef()

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
        setPageInfo({ name: "sobre mim", mainColor: "var(--sobre)", blurryText: "about" })
    }, [])

    return (
        <div className="about">
            <Presentation />
            <div className="about-me hidden" ref={aboutRef}>
                <div className="lottie-container statue" ref={statue}></div>
                <section className="text-block">
                    <p>
                        eu sempre gostei de <em>criar</em>, unindo isso a minha demasiada <em>curiosidade</em> e  
                        <em> paixão por computadores</em> (bom, na época era mais por The Sims 2, mas enfim...) 
                        eu descobri no <em>desenvolvimento</em> uma paixão que poderia levar para a vida profissional...
                    </p>
                </section>
            </div>
            
            <div className="education hidden" ref={educationRef}>
                <div className="lottie-container graduation" ref={graduation}></div>
                <section className="text-block">
                    <p>
                        ... eu, então, tornei-me <em>técnico em Informática</em> pela ETEC João Batista de Lima Figueiredo e 
                        sou, quase, um <em>bacharel em Ciência da Computação</em> pela Universidade Federal de Uberlândia...
                    </p>
                </section>
            </div>

            <div className="certificades-container hidden" ref={certificadesRef}>
                <div className="lottie-container certificade" ref={certificade}></div>
                <section className="text-block">
                    <p>
                        ... além disso, estou sempre <em>aprendendo algo novo</em>, uma fato que me 
                        rendeu alguns <em>certificados</em>...
                    </p>
                </section>
                <Certificades data={certificados}/>
            </div>
        </div>
    )
}

export default withScrollable(About)