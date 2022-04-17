import React, { useState } from "react"
import styles from "../../styles/widgets/Input.module.css"

interface InputProps {
    label: string,
    onInput?: (e: React.ChangeEvent<HTMLInputElement>) => any
}

export default function InputText(props: InputProps) {

    const [value, setValue] = useState("")

    return (
        <div className={styles.container}>
            <label className={styles.label}>{props.label}</label>
            <input className={styles.input} type="text" value={value} onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValue(e.target.value)
                if (props.onInput != null) {
                    props.onInput(e) // Callback
                }
            }} />
        </div>
    )
}