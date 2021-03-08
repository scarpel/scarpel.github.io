import Waiter from "../../components/Waiter"
import "../../css/Presentation.css"
import image from "../../media/images/me.jpg"

export default function Presentation(props) {
    const { yearsLocation } = props;

    const getAge = () => {
        const current = new Date()
        const age = current.getFullYear() - 1999
        return (current.getMonth() === 0 || (current.getMonth() === 1 && current.getDate()<10)) ? age-1 : age
    }

    return (
        <div className="presentation">
            <Waiter wait={2000}>
                <section className="left-card">
                    <img src={image} className="me-img" alt="myself"/>
                    <span className="name">Guilherme<br/>H. Scarpel</span>
                    <span className="upper-name">Guilherme<br/>H. Scarpel</span>
                    <span className="additional-info">{getAge()} {yearsLocation}</span>
                </section>
            </Waiter>
        </div>
    )
}