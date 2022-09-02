import { useEffect, ReactNode } from "react"
import { useDispatch } from "react-redux"
import { Box } from "@mui/material"
import type { BoxProps, SxProps } from "@mui/material"

import type { PageName } from "@app/types"
import { Actions } from "@app/state"
import { RouterHelper } from "@app/features/routing/components/RouterHelper"

export interface ErPageProps {
    id?: string
    pageName: PageName
    className?: string
    children?: ReactNode
    sx?: SxProps
}

const DEFAULT_PROPS: Partial<ErPageProps> = {
    id: undefined,
    className: "",
    sx: {
        boxSizing: "border-box",
        height: "100%",
        margin: "0px",
        padding: "0px",
    },
}

export const ErPage = (props: ErPageProps): JSX.Element => {

    const {
        children,
        ...otherProps
    } = props

    const {
        id,
        sx,
        pageName,
        className,
    } = {
        ...DEFAULT_PROPS,
        ...otherProps,
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(Actions.Core.setPageName(pageName))
        return () => {
            dispatch(Actions.Core.clearPageName())
        }
    }, [dispatch, pageName])

    const boxProps: BoxProps = {
        id,
        sx,
        className,
    }

    return (
        <Box {...boxProps}>
            <RouterHelper />
            {children && children}
        </Box>
    )
}
