import { useContext, useEffect, useRef } from "react"
import { PagesContext } from "../context/PagesContext"
import AnimatedText from "../components/AnimatedText"
import withScrollable from "../HOC/withScrollable"
import Waiter from "../components/Waiter"
import PERSONAL_INFO from "../datasets/personalInfo"
import contactAnimation from "../media/lottie/contact.json"
import lottie from "lottie-web"
import SimpleInfo from "../components/SimpleInfo"
import getSocialIcon from "../datasets/socialIcons"
import ContactTexts from "../texts/Contact"

import "../css/Contact.css"

function Contact() {
    const { setPageInfo, language } = useContext(PagesContext)
    const lottieRef = useRef(undefined)
    const texts = ContactTexts[language]

    useEffect(() => {
        document.title = `GHS: Contato`
        setPageInfo({ name: texts.pageName, mainColor: "var(--contato)", blurryText: "contact" })
    }, [])

    const loadAnimation = () => {
        if(lottieRef.current){
            lottie.loadAnimation({
                container: lottieRef.current,
                autoplay: true,
                loop: false,
                animationData: contactAnimation,
                rendererSettings : {
                    filterSize: {
                      width: '200%',
                      height: '200%',
                      x: '-50%',
                      y: '-50%',
                    }
                  }
            })
        }
    }

    return (
        <div className="contact">
            <Waiter wait={2000} callback={loadAnimation}>
                <div className="lottie" ref={lottieRef}></div>
            </Waiter>
            <Waiter wait={2000}>
                <div className="left-container">
                    <div className="top">
                        <div className="headline">
                            <AnimatedText text={texts.lets}/>
                            <Waiter wait={500}>
                                <AnimatedText text={texts.together}/>
                            </Waiter>
                        </div>
                    </div>
                    <div className="bottom">
                        <SimpleInfo className="email" title="E-mail">
                            { PERSONAL_INFO.email }
                        </SimpleInfo>
                        <SimpleInfo  className="phone" title={texts.phone}>
                            { PERSONAL_INFO.phone }
                        </SimpleInfo>
                        <SimpleInfo className="social-container" title="Social">
                            <div className="social spaced-items">
                            {
                                PERSONAL_INFO.social.map(([name, link], index) => {
                                    const Icon = getSocialIcon(name)
                                    return (
                                        <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                                            <Icon />
                                        </a>
                                    )
                                })
                            }
                            </div> 
                        </SimpleInfo>
                        <SimpleInfo className="resume" title={texts.resume}>
                            <a href={PERSONAL_INFO.resume} target="_blank" rel="noopener noreferrer">
                                <button className="resume-btn">
                                        {texts.resume}.pdf
                                </button>
                            </a>
                        </SimpleInfo>
                    </div>
                </div>
            </Waiter>
        </div>
    )
}

export default withScrollable(Contact)