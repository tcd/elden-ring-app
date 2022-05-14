import { ReactNode } from "react"
import ReactModal from "react-modal"

export interface EModalProps {
    title: string
    isOpen: boolean
    onClose?: () => any
    children?: ReactNode
    footerContent?: ReactNode
}

export const EModal = (props: EModalProps): JSX.Element => {

    const footerContent = () => {
        if (props?.footerContent) {
            return props?.footerContent
        } else {
            return (
                <>
                </>
            )
        }
    }

    return (
        <ReactModal
            className="elden-ring-modal"
            overlayClassName="elden-ring-modal-overlay"
            isOpen={props.isOpen}
            onRequestClose={props.onClose}
            ariaHideApp={false}
        >
            <div className="top-border"></div>

            <header>
                {props.title}
            </header>

            <div className="inner-border-wrapper">
                <div className="inner-border"></div>
            </div>

            <section className="elden-ring-modal-main flex-center">
                <>{props?.children}</>
            </section>

            <div className="inner-border-wrapper">
                <div className="inner-border">&nbsp;</div>
            </div>

            <footer className="elden-ring-modal-footer flex-around">
                {footerContent()}
            </footer>

            <div className="bottom-border"></div>
        </ReactModal>
    )
}
