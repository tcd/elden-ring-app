import { useEffect, ReactNode } from "react"
import { useDispatch } from "react-redux"
import { Box, BoxProps } from "@mui/material"

import { PageName } from "@app/types"
import { Actions } from "@app/state"

export interface PageProps {
    id?: string
    pageName: PageName
    className?: string
    children?: ReactNode
}

const DEFAULT_PROPS: Partial<PageProps> = {
    id: null,
    className: "",
}

export const Page = (props: PageProps): JSX.Element => {

    props = {
        ...DEFAULT_PROPS,
        ...props,
    }

    const { id, pageName, children, className } = props

    const correctedClassName = `er_page ${className}`

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(Actions.Core.setPageName(pageName))
        return () => {
            dispatch(Actions.Core.clearPageName())
        }
    }, [dispatch, pageName])

    const boxProps: BoxProps = {
        className: correctedClassName,
    }

    if (id) {
        boxProps.id = id
    }

    return (
        <Box {...boxProps}>
            {children && children}
        </Box>
    )
}
