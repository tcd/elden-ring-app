import merge from "lodash/merge"
import type { ButtonBaseProps } from "@mui/material"
import { ButtonBase } from "@mui/material"

import { sx } from "./ErButton.styles"

const defaultProps: Partial<ErButtonProps> = {
    // className: "er__button",
    sx: sx,
}

export type ErButtonProps = Omit<ButtonBaseProps, "disableRipple">

export const ErButton = (props: ErButtonProps): JSX.Element => {

    const {
        children,
        ...rest
    } = props

    const mergedProps = merge({}, defaultProps, rest)

    return (
        <ButtonBase {...mergedProps} disableRipple={true}>
            {children && children}
        </ButtonBase>
    )
}
