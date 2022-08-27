import ReactModal from "react-modal"

import { Overlay } from "./Overlay"
import { Dialog } from "./Dialog"
import { ErDialogProps } from "./types"
import * as Styles from "./styles"

const styles = {
    overlay: Styles.overlaySx,
}

export const ErDialog = (props: ErDialogProps): JSX.Element => {

    const overlayElement = (overlayProps: React.ComponentPropsWithRef<"div">, contentEl: React.ReactElement) => {
        return <Overlay {...overlayProps}> {contentEl}</Overlay>
    }

    const contentElement = (contentProps: React.ComponentPropsWithRef<"div">, children: React.ReactNode) => {
        return <Dialog {...props} {...contentProps}>{children}</Dialog>
    }

    return (
        <ReactModal
            overlayElement={overlayElement}
            contentElement={contentElement}
            style={styles}
            isOpen={props.isOpen}
            onRequestClose={props.onClose}
            ariaHideApp={false}
        />
    )
}

