import React, { useContext, useEffect } from "react"
import Waiter from "../components/Waiter"
import AnimatedText from "../components/AnimatedText"
import TextCarousel from "../components/TextCarousel"
import handImg from "../media/images/hand.png"
import PAGE_COLORS from "../data/pageColors"
import { PagesContext } from "../context/PagesContext"
import Bubbles from "../components/Bubbles"
import PAGES_URL from "../data/pagesURL"

import "../css/Page.css"
import "../css/Home.css"
import "../css/Bubbles.css"
import PageArrow from "../components/PageArrow"

export default function Home(){
    const { setPageInfo } = useContext(PagesContext)
    const colors = PAGE_COLORS.PINK
    const adjectives = [
        "desenvolvedor",
        '"designer"',
        "pouco muito míope",
        "amante de música",
        "pouco desastrado",
        "péssimo cantor",
        "blink",
        '"leitor"'
    ]

    useEffect(() => {
        document.title = `GHS`
        setPageInfo({ name: "", mainColor: "var(--sobre)", blurryText: "home" })
    }, [])

    return (
        <div className="home">
            <PageArrow goToPage={PAGES_URL.ABOUT} pageName="Sobre Mim" split={true}/>
            <section className="card">
                <div className="hi">
                    <AnimatedText delay={30} text="oi!"/>
                    <Waiter wait={1200}>
                        <AnimatedText className="my-name-is" delay={30} text="meu nome é"/>
                    </Waiter>
                </div>
                <Waiter wait={1700}>
                    <AnimatedText className="name" delay={30} text="GUILHERME H. SCARPEL" style={{color: colors[0]}}/>
                </Waiter>
                <div className="i-am">
                    <Waiter wait={2500}>
                        <AnimatedText delay={30} text="eu sou um "/>
                    </Waiter>
                    <Waiter wait={2900}>
                        <TextCarousel className="adjectives" delay={30} words={adjectives}/>
                    </Waiter>
                </div>
            </section>
            <img className="hand-emoji" alt="Hand emoji" src={handImg}/>
            <Waiter wait={3100}>
                <Bubbles colors={colors}/>
            </Waiter>
        </div>
    )
}