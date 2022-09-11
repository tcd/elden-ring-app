import { useEffect, ReactNode } from "react"
import { useDispatch } from "react-redux"
import { Box } from "@mui/material"
import type { BoxProps, SxProps } from "@mui/material"

import type { HeaderIconId, PageName } from "@app/types"
import { Actions } from "@app/state"
import { RouterHelper } from "@app/features/routing/components/RouterHelper"

export interface ErPageProps {
    // FIXME: builder is the only thing using this. Need to remove it.
    id?: string
    pageName: PageName
    title?: string
    icon?: HeaderIconId
    children?: ReactNode
    sx?: SxProps
}

const DEFAULT_PROPS: Partial<ErPageProps> = {
    id: undefined,
    title: null,
    icon: null,
    sx: {
        boxSizing: "border-box",
        height: "100%",
        m: "0px",
        p: "0px",
    },
}

export const ErPage = (props: ErPageProps): JSX.Element => {

    const {
        children,
        ...otherProps
    } = props

    const {
        id,
        title,
        icon,
        sx,
        pageName,
    } = {
        ...DEFAULT_PROPS,
        ...otherProps,
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(Actions.Core.setPageName(pageName))
        dispatch(Actions.Core.setPageTitle(title))
        dispatch(Actions.Core.setPageIcon(icon))
        return () => {
            dispatch(Actions.Core.clearPageName())
            dispatch(Actions.Core.clearPageTitle())
            dispatch(Actions.Core.clearPageIcon())
        }
    }, [dispatch, pageName, title, icon])

    const boxProps: BoxProps = {
        id,
        sx,
    }

    return (
        <Box {...boxProps}>
            <RouterHelper />
            {children && children}
        </Box>
    )
}
