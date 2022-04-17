import { useState } from "react"
import styles from "../../styles/widgets/Dropdown.module.css"

interface DropdownProps {
    label: string
    children: any
}

export default function Dropdown(props: DropdownProps) {
    const [content, setContent] = useState<JSX.Element>(<></>)
    const [isRendering, setRendering] = useState<boolean>(false)

    const setDropdownContent = () => {
        if (isRendering) {
            setRendering(false)
            setContent(
                <div className={styles.content}>
                    {props.children}
                </div>
            )
        } else {
            setRendering(true)
            setContent(<></>)
        }
    }

    return (
        <div className={styles.dropdown}>
            <button onClick={() => setDropdownContent()}>{props.label} &#9660;</button>
            {content}
        </div>
    )
}