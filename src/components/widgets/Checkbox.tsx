import React, { useState } from "react"

interface CheckboxProps {
    children: any,
    startChecked?: boolean,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any
}

export default function Checkbox(props: CheckboxProps) {

    const [checked, setChecked] = useState(props.startChecked)

    return (
        <div style={{margin: "3px 0px"}}>
            <input type="checkbox" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setChecked(e.target.checked)
                if (props.onChange) {
                    props.onChange(e)
                }
            }} checked={checked} />
            <label style={{ marginLeft: "5px" }}>{props.children}</label>
        </div>
    )
}