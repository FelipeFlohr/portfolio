import Link from "next/link"
import styles from "../../../styles/menu/item/Item.module.css"

interface ItemProps {
    children: any,
    href: string,
    className?: any
}

export default function Item(props: ItemProps) {
    return (
        <Link href={props.href}>
            <a className={`${styles.item} ${props.className != null ? props.className : ""}`.trim()}>{props.children}</a>
        </Link>
    )
}