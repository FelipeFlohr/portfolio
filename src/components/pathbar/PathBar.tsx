import Link from "next/link"
import { useEffect, useState } from "react"
import styles from "../../styles/navbar/Navbar.module.scss"

export default function PathBar() {
    let changingTo: string | null = null
    let changeQueue: string | null = null

    const [path, setPath] = useState("")
    useEffect(() => {
        let currentLocation = window.location.href

        const observer = new MutationObserver(() => {
            if (currentLocation !== document.location.href) {
                changePath(`C:/users/felipe/desktop/cs/portfolio/pages${document.location.pathname}.html`)
            }
        })

        observer.observe(document, { childList: true, subtree: true })

        const initialPath = window.location.pathname.charAt(window.location.pathname.length - 1) === "/" ? "/index" : window.location.pathname
        setPath(`C:/users/felipe/desktop/cs/portfolio/pages${initialPath}.html`)
    })

    const changePath = async (newPath: string) => {
        if (newPath.trim() == "") return
        console.log(newPath)
        if (changingTo == null) {
            changingTo = newPath
            const oldPath = path

            const commonString = commonStr(oldPath, newPath)
            if (commonString == null) return

            const amountToDelete = oldPath.length - commonString.length
            const charArray = diffStr(oldPath, newPath)?.split("")

            if (amountToDelete == null || charArray == null) return

            if (amountToDelete > 0) await deleteChars(amountToDelete)
            if (charArray.length > 0) await addChars(charArray)
            changingTo = null

            if (changeQueue != null) await changePath(path)
        } else {
            if (changeQueue !== newPath) changeQueue = newPath
        }
    }

    const deleteChars = (amount: number, delay = 100): Promise<void> => {
        const removeChar = () => {
            setPath(path.substring(0, path.length - 1))
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

    const addChars = (chars: string | string[], delay = 100): Promise<void> => {
        const addChar = (char: string) => {
            const thisPath = path + char.charAt(0)
            setPath(thisPath)
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

    const diffStr = (str1: string, str2: string) => {
        if (str1 === str2) return null

        const thisCommonStr = commonStr(str1, str2)
        if (thisCommonStr == null) return null

        return str2.substring(thisCommonStr.length)
    }

    const commonStr = (str1: string, str2: string) => {
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

    return (
        <div className={styles.pathbar}>
            <span className={styles.path}>{path}</span>
            <span className={`${styles["text-cursor"]} ${styles["text-cursor-anim"]}`}></span>
            <button><Link href="/">Intro</Link></button>
            <button><Link href="/legal">Legal</Link></button>
        </div>
    )
}