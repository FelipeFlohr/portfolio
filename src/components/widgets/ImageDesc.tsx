import Image from "next/image"
import { createRef, useEffect, useRef, useState } from "react"
import styles from "../../styles/widgets/ImageDesc.module.css"

interface ImageDescProps {
    src: string,
    children: any
}

export default function ImageDesc(props: ImageDescProps) {

    const [modal, setModalElement] = useState<JSX.Element>()
    const [modalEnabled, setModalEnabled] = useState<boolean>(false)

    const imgDivRef = useRef<HTMLDivElement>(null)

    const renderModal = () => {
        if (modalEnabled) {
            setModalElement(
                <>
                    <div className={styles.modal}>
                        <div className={styles["modal-content"]} ref={imgDivRef}>
                            <Image src={props.src} width={512} height={512} />
                        </div>
                        <span className={styles["modal-desc"]}>{props.children}</span>
                    </div>
                </>
            )
            window.onclick = e => {
                const imgElement = imgDivRef.current?.querySelector("img")

                if (imgElement && !(e.target instanceof HTMLImageElement)) {
                    setModalEnabled(false)
                }
            }
        } else {
            setModalElement(<></>)
            window.onclick = null
        }
    }

    useEffect(() => {
        renderModal()
    }, [modalEnabled])

    return (
        <>
            <div className={styles["img-wrapper"]}>
                <Image src={props.src} width={512} height={512} onClick={() => setModalEnabled(!modalEnabled)} />
                <div className={styles.desc}>{props.children}</div>
            </div>
            {modal}
        </>
    )
}