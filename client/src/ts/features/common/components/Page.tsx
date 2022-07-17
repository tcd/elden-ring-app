import { useEffect, ReactNode } from "react"
import { useDispatch } from "react-redux"
import { Box } from "@mui/material"

import { PageName } from "@app/types"
import { Actions } from "@app/state"

export interface PageProps {
    pageName: PageName
    className?: string
    children?: ReactNode
}

const DEFAULT_PROPS: Partial<PageProps> = {
    className: "",
}

export const Page = (props: PageProps): JSX.Element => {

    props = {
        ...DEFAULT_PROPS,
        ...props,
    }

    const { pageName, children, className } = props

    const correctedClassName = "er_page" + " " + className

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(Actions.Core.setPageName(pageName))
        return () => {
            dispatch(Actions.Core.clearPageName())
        }
    }, [dispatch, pageName])

    return (
        <Box className={correctedClassName}>
            <>
                {children && children}
            </>
        </Box>
    )
}
