import { useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { Actions, Selectors } from "@app/state"

export const RouterHelper = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const params = useParams()
    const location = useLocation()

    const previousLocation = useSelector(Selectors.Routing.previousLocation)

    useEffect(() => {
        dispatch(Actions.Routing.locationChange({
            pathParams: params,
            location: location,
            previousLocation: previousLocation,
        }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <></>
    )
}
