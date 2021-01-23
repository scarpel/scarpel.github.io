import SkillCard from "./SkillCard"
import "../css/IconsCard.css"

export default function IconsCard(props){
    const { name, data } = props

    return (
        <section className="icons-card">
            <h2 className="card-name">{name}</h2>
            <div className="card-icons">
                {
                    data.map((obj, index) => (
                        <SkillCard
                            key={index}
                            {...obj}
                            style={{opacity: obj.opacity || 1}}
                        />
                    ))
                }
            </div>
        </section>
    )
}