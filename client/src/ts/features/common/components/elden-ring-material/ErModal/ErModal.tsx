import ReactModal from "react-modal"

import { ComponentSx } from "@app/theme"

import type { ErModalProps } from "./types"
import { Content } from "./Content"

const styles = {
    overlay: ComponentSx.ErDialog.overlayStyles,
}

export const ErModal = (props: ErModalProps): JSX.Element => {

    const contentElement = (contentProps: React.ComponentPropsWithRef<"div">, _children: React.ReactNode) => {
        return <Content {...props} {...contentProps}>{props?.children && props.children}</Content>
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
