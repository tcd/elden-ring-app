import { useEffect, ReactNode } from "react"
import { useDispatch } from "react-redux"
import { Box } from "@mui/material"
import type { BoxProps, SxProps } from "@mui/material"

import type { PageName } from "@app/types"
import { Actions } from "@app/state"

export interface PageProps {
    id?: string
    pageName: PageName
    className?: string
    children?: ReactNode
    sx?: SxProps
}

const DEFAULT_PROPS: Partial<PageProps> = {
    id: undefined,
    className: "",
    sx: {
        boxSizing: "border-box",
        height: "100%",
        margin: "0px",
        padding: "0px",
    },
}

export const Page = (props: PageProps): JSX.Element => {

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
            {children && children}
        </Box>
    )
}
