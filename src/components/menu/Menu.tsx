import Image from "next/image"
import styles from "../../styles/menu/Menu.module.css"
import { MenuIcon } from "../icons/Icons"
import Item from "./item/Item"

export default function Menu() {

    const hideMenu = () => {
        console.log("hiding")
        document.querySelector("#__next")?.classList.add("menu-hidden")
    }

    const showMenu = () => {
        console.log("showing")
        document.querySelector("#__next")?.classList.remove("menu-hidden")
    }

    const isMenuVisible = () => {
        console.log(`status: ${document.querySelectorAll(".menu-hidden#__next").length == 0}\n${document.querySelectorAll(".menu.menu-hide").length}`)
        return document.querySelectorAll(".menu-hidden#__next").length == 0
    }

    return (
        <aside className={`${styles.menu} menu`}>
            <div className={`${styles["hide-button"]} hide-btn`} onClick={() => isMenuVisible() ? hideMenu() : showMenu()}>
                <MenuIcon />
            </div>
            <h4>Felipe Matheus Flohr</h4>
            <Image src="/felipe-384.jpg" width={256} height={256} className={styles["portfolio-img"]} />
            <Item href="/legal" className={styles["items-margin"]}>Aa</Item>
        </aside>
    )
}