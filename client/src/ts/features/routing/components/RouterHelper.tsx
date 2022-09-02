import { useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Box } from "@mui/material"

import { Actions, Selectors } from "@app/state"
import { useHash } from "@app/shared"

export const RouterHelper = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const params = useParams()
    const location = useLocation()
    const hash = useHash()

    const previousLocation = useSelector(Selectors.Routing.previousLocation)

    useEffect(() => {
        dispatch(Actions.Routing.locationChange({
            // @ts-ignore: next-line
            pathParams: params,
            location: location,
            previousLocation: previousLocation,
            hash: hash,
        }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hash])

    return <Box sx={{ display: "none" }}/>
}
