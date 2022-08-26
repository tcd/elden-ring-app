import merge from "lodash/merge"
import type { ButtonBaseProps } from "@mui/material"
import { ButtonBase } from "@mui/material"

export type ErButtonProps = ButtonBaseProps

const defaultProps: Partial<ErButtonProps> = {
    className: "er__button",
    sx: {

    },
}

export const ErButton = (props: ErButtonProps): JSX.Element => {

    const {
        children,
        ...rest
    } = props

    const mergedProps = merge({}, defaultProps, rest)

    return (
        <ButtonBase {...mergedProps}>
            {children && children}
        </ButtonBase>
    )
}
