import { Component, ReactNode } from "react"
import styles from "../../styles/navbar/Navbar.module.scss"

type PathBarState = {
    displayPath: string
}

export default class PathBar extends Component {

    state: PathBarState = {
        displayPath: "C:/users/felipe/desktop/random/portfolio/pages/home.html"
    }

    public changePath(newPath: string) {
        const commonStr = (str1: string, str2: string) => {
            const str1Chars = str1.split("")
            const str2Chars = str2.split("")
            let diffIndex = -1

            for (let i = 0; i < str1.length; i++) {
                if (diffIndex == -1 && str1Chars.at(i) !== str2Chars.at(i)) {
                    diffIndex = i
                }
            }

            const str = diffIndex == -1 ? str1 : str1.substring(0, diffIndex)
            return str
        }
        const diffStr = (str1: string, str2: string) => {
            const str1Chars = str1.split("")
            const str2Chars = str2.split("")
            let diffIndex = -1

            for (let i = 0; i < str1.length; i++) {
                if (diffIndex == -1 && str1Chars.at(i) !== str2Chars.at(i)) {
                    diffIndex = i
                }
            }

            const str = diffIndex == -1 ? null : str1.substring(diffIndex)
            return str
        }
        const previousPath = this.state.displayPath

        if (previousPath === newPath) return // Validation
        if (commonStr(previousPath, newPath).length == previousPath.length) { // Only need is chars to be added
            const newChars = newPath.substring(commonStr(previousPath, newPath).length, newPath.length).split("")

            let i = 0
            const interval = setInterval(() => {
                if (i == newChars.length) {
                    clearInterval(interval)
                } else {
                    this.addChar(newChars[i])
                    i++
                }
            }, 100)
        } else {
            const deleteChars = (amount: number, delay = 100) => {
                return new Promise<void>((res, rej) => {
                    if (amount <= 0) rej()

                    let i = 0
                    const interval = setInterval(() => {
                        if (i == amount) {
                            res()
                            clearInterval(interval)
                        } else {
                            this.removeChar()
                            i++
                        }
                    }, delay)
                })
            }
            const addChars = (charArray: string[], delay = 100) => {
                const array = charArray.map(e => e.charAt(0))
                return new Promise<void>((res, rej) => {
                    if (array.length == 0) rej()

                    let i = 0
                    const interval = setInterval(() => {
                        if (i == array.length) {
                            res()
                            clearInterval(interval)
                        } else {
                            this.addChar(array[i])
                            i++
                        }
                    }, delay)
                })
            }

            const strToAdd = diffStr(newPath, previousPath)
            if (strToAdd == null) return null
            const amountToDelete = strToAdd.length - 1

            deleteChars(amountToDelete)
                .then(() => {
                    addChars(strToAdd.split(""))
                })
        }
    }

    private addChar(char: string) {
        this.setState({ displayPath: this.state.displayPath + char.charAt(0) })
    }

    private removeChar() {
        const path = this.state.displayPath
        this.setState({ displayPath: path.substring(0, path.length - 1) })
    }

    render(): ReactNode {
        return (
            <div className={styles.pathbar}>
                <span className={styles.path}>{this.state.displayPath}</span>
                <span className={`${styles["text-cursor"]} ${styles["text-cursor-anim"]}`}></span>
                <button onClick={() => this.changePath("C:/users/felipe/desktop/random/portfolio/pages/was?")}>Teste</button>
            </div>
        )
    }
}