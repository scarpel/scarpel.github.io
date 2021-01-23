import {useEffect, useState} from "react"

function Waiter(props){
    const { wait = 0, callback = () => {} } = props
    const [show, setShow] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {setShow(true); callback()}, wait)
        return () => window.clearTimeout(timeout)
    }, [])

    return(
        show && props.children
    )
}

export default Waiter