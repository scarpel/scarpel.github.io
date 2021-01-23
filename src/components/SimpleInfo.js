import "../css/SimpleInfo.css"

export default function SimpleInfo(props){
    const { title, children, className="" } = props

    return (
        <section className={`simple-info ${className}`}>
            <h2 className="title">{title}</h2>
            <div className="children">
                { children }
            </div>
        </section>
    )
}