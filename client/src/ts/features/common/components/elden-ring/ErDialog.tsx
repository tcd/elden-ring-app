import { ReactNode } from "react"
import ReactModal from "react-modal"

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
            <button
                key={title}
                className="er__button"
                onClick={handler}
            >
                {title}
            </button>
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
