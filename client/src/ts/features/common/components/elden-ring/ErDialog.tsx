import { ReactNode } from "react"
import ReactModal from "react-modal"

import { ErButton } from "@app/shared"

export interface ErDialogOption {
    title: string
    handler: () => any
}

export interface ErDialogProps {
    title: string | JSX.Element
    isOpen: boolean
    options: ErDialogOption[]
    onClose?: () => any
}

export const ErDialog = (props: ErDialogProps): JSX.Element => {

    const options = props.options.map(({ title, handler }) => {
        return (
            <ErButton key={title} onClick={handler}>
                {title}
            </ErButton>
        )
    })

    return (
        <ReactModal
            className="er__dialog"
            overlayClassName="er__dialog__overlay"
            isOpen={props.isOpen}
            onRequestClose={props.onClose}
            ariaHideApp={false}
        >
            <div className="top-border"></div>

            <header>
                {props.title}
            </header>

            <main className="er__dialog__content">
                {options}
            </main>

            <div className="bottom-border"></div>
        </ReactModal>
    )
}
