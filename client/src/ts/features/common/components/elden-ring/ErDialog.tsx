import type { ReactNode } from "react"
import ReactModal from "react-modal"

import { ErButton } from "@app/shared"

export interface ErDialogOption {
    title: string
    handler: () => any
}

export interface ErDialogProps {
    title: string | ReactNode
    isOpen: boolean
    options: ErDialogOption[]
    onClose?: () => any
}

export const ErDialog = (props: ErDialogProps): JSX.Element => {

    const $options = props.options.map(({ title, handler }) => {
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
            <div className="er__dialog__topBorder" />

            <header>
                {props.title}
            </header>

            <main className="er__dialog__content">
                {$options}
            </main>

            <div className="er__dialog__bottomBorder" />
        </ReactModal>
    )
}
