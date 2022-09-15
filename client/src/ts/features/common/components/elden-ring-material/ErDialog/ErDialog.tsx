import ReactModal from "react-modal"

import { ComponentSx } from "@app/theme"

import type { ErDialogProps } from "./types"
import { Dialog } from "./Dialog"

const styles = {
    overlay: ComponentSx.ErDialog.overlayStyles,
}

export const ErDialog = (props: ErDialogProps): JSX.Element => {

    const contentElement = (contentProps: React.ComponentPropsWithRef<"div">, children: React.ReactNode) => {
        return <Dialog {...props} {...contentProps}>{children}</Dialog>
    }

    return (
        <ReactModal
            contentElement={contentElement}
            style={styles}
            isOpen={props.isOpen}
            onRequestClose={props.onClose}
            ariaHideApp={false}
        />
    )
}

