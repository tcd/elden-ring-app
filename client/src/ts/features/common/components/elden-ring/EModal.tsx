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
            className="er__modal"
            overlayClassName="er__modal__overlay"
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

            <section className="er__modal__main flex-center">
                <>{props?.children}</>
            </section>

            <div className="inner-border-wrapper">
                <div className="inner-border">&nbsp;</div>
            </div>

            <footer className="er__modal__footer flex-around">
                {footerContent()}
            </footer>

            <div className="bottom-border"></div>
        </ReactModal>
    )
}
