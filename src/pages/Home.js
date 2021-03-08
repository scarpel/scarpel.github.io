import React, { useContext, useEffect } from "react"
import Waiter from "../components/Waiter"
import AnimatedText from "../components/AnimatedText"
import TextCarousel from "../components/TextCarousel"
import handImg from "../media/images/hand.png"
import PAGE_COLORS from "../data/pageColors"
import { PagesContext } from "../context/PagesContext"
import Bubbles from "../components/Bubbles"
import PAGES_URL from "../data/pagesURL"
import PageArrow from "../components/PageArrow"
import HomeInfo from "../texts/Home"
import { IoChevronDown } from "react-icons/io5"

import "../css/Page.css"
import "../css/Home.css"
import "../css/Bubbles.css"

export default function Home(){
    const { setPageInfo, language, setLanguage } = useContext(PagesContext)
    const colors = PAGE_COLORS.PINK
    const texts = HomeInfo[language];

    useEffect(() => {
        document.title = `GHS`
        setPageInfo({ name: "", mainColor: "var(--sobre)", blurryText: "home" })
    }, [])

    const handleSelect = (event) => {
        setLanguage(event.target.value)
    }

    return (
        <div className="home">
            <div className="languages-container">
                <select value={language} className="languages" onChange={handleSelect}>
                    <option value="en">English</option>
                    <option value="br">Português</option>
                </select>
                <IoChevronDown className="drop-arrow"/>
            </div>
            <PageArrow goToPage={PAGES_URL.ABOUT} pageName={texts.aboutMe} split={true}/>
            <section className="card">
                <div className="hi">
                    <AnimatedText delay={30} text={texts.salute}/>
                    <Waiter wait={1200}>
                        <AnimatedText className="my-name-is" delay={30} text={texts.myName}/>
                    </Waiter>
                </div>
                <Waiter wait={1700}>
                    <AnimatedText className="name" delay={30} text="GUILHERME H. SCARPEL" style={{color: colors[0]}}/>
                </Waiter>
                <div className="i-am">
                    <Waiter wait={2500}>
                        <AnimatedText delay={30} text={texts.iAm}/>
                    </Waiter>
                    <Waiter wait={2900}>
                        <TextCarousel className="adjectives" delay={30} words={texts.adjectives}/>
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