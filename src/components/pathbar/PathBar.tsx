import Router from "next/router"
import { Component, ReactNode } from "react"
import styles from "../../styles/pathbar/Pathbar.module.css"

type PathBarState = {
    path: string
}

export default class PathBar extends Component {

    private isChanging = false

    state: PathBarState = { path: "" }

    componentDidMount() {
        let currentLocation = () => {
            const pathnameShowing = this.state.path.substring(42)
            const finalPathname = pathnameShowing
                .replace("/index", "/")
                .replace(".html", "")
            return finalPathname
        }

        setInterval(async () => {
            if (Router.route != currentLocation()) {
                const pathToShow = window.location.pathname.charAt(window.location.pathname.length - 1) === "/" ? "/index" : window.location.pathname
                await this.changePath(`C:/users/felipe/desktop/cs/portfolio/pages${pathToShow}.html`)
            }
        }, 1000)

        const initialPath = window.location.pathname.charAt(window.location.pathname.length - 1) === "/" ? "/index" : window.location.pathname
        this.setState({ path: `C:/users/felipe/desktop/cs/portfolio/pages${initialPath}.html` })
    }

    private async changePath(newPath: string) {
        if (newPath == null) return
        if (newPath.trim() == "") return

        if (!this.isChanging) {
            const oldPath = this.state.path

            const commonString = this.commonStr(oldPath, newPath)
            if (commonString == null) return

            const amountToDelete = oldPath.length - commonString.length
            const charArray = this.diffStr(oldPath, newPath)?.split("")

            if (amountToDelete == null || charArray == null) return

            this.isChanging = true
            if (amountToDelete > 0) await this.deleteChars(amountToDelete)
            if (charArray.length > 0) await this.addChars(charArray)
            this.isChanging = false
        }
    }

    private deleteChars(amount: number, delay = 100): Promise<void> {
        const removeChar = () => {
            this.setState({ path: this.state.path.substring(0, this.state.path.length - 1) })
        }

        amount = parseInt(`${amount}`)
        return new Promise((res, rej) => {
            if (amount < 1) rej("Value needs to be greater than 0")

            let i = 0
            const interval = setInterval(() => {
                if (i == amount) {
                    res()
                    clearInterval(interval)
                } else {
                    removeChar()
                    i++
                }
            }, delay)
        })
    }

    private addChars(chars: string | string[], delay = 100): Promise<void> {
        const addChar = (char: string) => {
            const thisPath = this.state.path + char.charAt(0)
            this.setState({ path: thisPath })
        }

        let charArray: string[] = []
        if (typeof (chars) === "string") {
            charArray = chars.split("")
        } else {
            charArray = chars.map(v => v.charAt(0))
        }

        return new Promise((res, rej) => {
            const amount = charArray.length
            if (amount < 1) rej("Value needs to be greater than 0")

            let i = 0
            const interval = setInterval(() => {
                if (i == amount) {
                    res()
                    clearInterval(interval)
                } else {
                    addChar(charArray[i])
                    i++
                }
            }, delay)
        })
    }

    private diffStr(str1: string, str2: string) {
        if (str1 === str2) return null

        const thisCommonStr = this.commonStr(str1, str2)
        if (thisCommonStr == null) return null

        return str2.substring(thisCommonStr.length)
    }

    private commonStr(str1: string, str2: string) {
        if (str1 === str2) return null
        const length = str1.length > str2.length ? str1.length : str2.length

        let endIndex = -1
        for (let i = 0; i < length; i++) {
            if (endIndex == -1 && str1.charAt(i) !== str2.charAt(i)) {
                endIndex = i
            }
        }

        return str1.substring(0, endIndex)
    }

    render(): ReactNode {
        return (
            <div className={`${styles.pathbar} pathbar`}>
                <span className={styles.path}>{this.state.path}</span>
                <span className={`${styles["text-cursor"]} ${styles["text-cursor-anim"]}`}></span>
            </div>
        )
    }
}