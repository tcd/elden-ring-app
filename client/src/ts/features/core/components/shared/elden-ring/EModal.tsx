import { ReactNode } from "react"

import ReactModal from "react-modal"

import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"

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

    // return (
    //     <Modal
    //         open={props.isOpen}
    //         onClose={props.onClose}
    //     >
    //         <Box className="elden-ring-modal-content">
    //             <div className="top-border"></div>
    //             <header>{props.title}</header>
    //             <div className="inner-border"></div>
    //             <section>
    //                 <>{props?.children}</>
    //             </section>
    //             <div className="inner-border"></div>
    //             <footer></footer>
    //             <div className="bottom-border"></div>
    //         </Box>
    //     </Modal>
    // )
}
