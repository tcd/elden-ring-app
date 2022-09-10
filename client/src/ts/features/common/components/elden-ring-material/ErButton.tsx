import { forwardRef } from "react"
import merge from "lodash/merge"
import type { ButtonBaseProps } from "@mui/material"
import { ButtonBase } from "@mui/material"

import { ComponentSx } from "@app/theme"

const defaultProps: Partial<ErButtonProps> = {
    // className: "er__button",
    sx: ComponentSx.ErButton,
}

export type ErButtonProps = Omit<ButtonBaseProps, "disableRipple">

/**
 * @deprecated use "@mui/material/button" with variant "elden-ring"
 */
export const ErButton = forwardRef<HTMLButtonElement, ErButtonProps>(function ErButton(props, ref) {

    const {
        children,
        ...rest
    } = props

    const mergedProps = merge({}, defaultProps, rest)

    return (
        <ButtonBase {...mergedProps} disableRipple={true} ref={ref}>
            {children && children}
        </ButtonBase>
    )
})
