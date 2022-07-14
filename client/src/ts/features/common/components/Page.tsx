import { useEffect, ReactNode } from "react"
import { useDispatch } from "react-redux"
import { Box } from "@mui/material"

import { PageName } from "@app/types"
import { Actions, Selectors } from "@app/state"


export interface PageProps {
    pageName: PageName
    children?: ReactNode
}

export const Page = (props: PageProps): JSX.Element => {

    const { pageName, children } = props

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(Actions.Core.setPageName(pageName))
        return () => {
            dispatch(Actions.Core.clearPageName())
        }
    }, [dispatch, pageName])

    return (
        <Box className="er__page">
            <>
                {children && children}
            </>
        </Box>
    )
}
