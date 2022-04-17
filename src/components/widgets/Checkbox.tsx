import React, { useState } from "react"

interface CheckboxProps {
    children: any,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any
}

export default function Checkbox(props: CheckboxProps) {

    const [value, setValue] = useState("")

    return (
        <div style={{margin: "3px 0px"}}>
            <input type="checkbox" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValue(e.target.value)
                if (props.onChange) {
                    props.onChange(e)
                }
            }} value={value} />
            <label style={{ marginLeft: "5px" }}>{props.children}</label>
        </div>
    )
}