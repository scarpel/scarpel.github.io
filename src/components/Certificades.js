import "../css/Certificades.css"
import ImageFollowingText from "./ImageFollowingText"
import { CERTFICADES_MINIATURE } from "../data/imgPath"
import { join } from "path"

export default function Certificades(props) {
    const { data, path = CERTFICADES_MINIATURE } = props

    return (
        <section className="certificades">
            {
                data.map((obj, index) => (
                    <ImageFollowingText 
                        data={{
                            text: obj.name,
                            src: join(path, obj.img),
                            link: obj.link
                        }}
                        key={index} 
                    />
                ))
            }
        </section>
    )
}