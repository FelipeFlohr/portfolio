import { Component, ReactNode } from "react"
import styles from "../../styles/navbar/Navbar.module.scss"

type PathBarState = {
    path: string
}

export default class PathBar extends Component {

    state: PathBarState = {
        path: "C:/users/felipe/desktop/random/portfolio/pages/home.html"
    }

    async changePath(newPath: string) {
        const oldPath = this.state.path

        const commonString = this.commonStr(oldPath, newPath)
        if (commonString == null) return
        
        const amountToDelete = oldPath.length - commonString.length
        const addChars = this.diffStr(oldPath, newPath)?.split("")
        
        if (amountToDelete == null || addChars == null) return
        
        if (amountToDelete > 0) await this.deleteChars(amountToDelete)
        if (addChars.length > 0) await this.addChars(addChars)
    }

    private deleteChars(amount: number, delay = 100): Promise<void> {
        const removeChar = () => {
            const path = this.state.path
            this.setState({ path: path.substring(0, path.length - 1) })
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
            const path = this.state.path + char.charAt(0)
            this.setState({ path: path })
        }

        let charArray: string[] = []
        if (typeof(chars) === "string") {
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

        const commonStr = this.commonStr(str1, str2)
        if (commonStr == null) return null

        return str2.substring(commonStr.length)
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
            <div className={styles.pathbar}>
                <span className={styles.path}>{this.state.path}</span>
                <span className={`${styles["text-cursor"]} ${styles["text-cursor-anim"]}`}></span>
                <button onClick={() => this.changePath("C:/users/felipe/desktop/random/portfolio/pages/index.html")}>Teste</button>
            </div>
        )
    }
}