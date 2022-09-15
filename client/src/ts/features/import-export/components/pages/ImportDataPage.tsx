import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Backdrop, CircularProgress } from "@mui/material"

import type { BuildData } from "@app/types"
import { isBlank } from "@app/util"
import { Actions, Selectors } from "@app/state"
import { ErPage, YouDied } from "@app/features/common"

export const ImportDataPage = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const done = useSelector(Selectors.ImportExport.requests.importData.done)
    const failed = useSelector(Selectors.ImportExport.requests.importData.failed)

    const [queryParams, setQueryParams] = useState<any>({})
    const [dispatched, setDispatched]   = useState<boolean>(false)
    const [paramsSet, setParamsSet]     = useState<boolean>(false)

    useEffect(() => {
        if (paramsSet) { return }
        if (dispatched) { return }
        // const params = new Proxy(new URLSearchParams(window.location.search.replace(/^\?/, "")), {
        //     // @ts-ignore: next-line
        //     get: (searchParams, prop) => searchParams.get(prop),
        // })
        const urlSearchParams = new URLSearchParams(window.location.search)
        const params = Object.fromEntries(urlSearchParams.entries()) as unknown as BuildData
        setQueryParams(params)
        setParamsSet(true)
    }, [dispatched, paramsSet, setParamsSet])

    useEffect(() => {
        if (dispatched) { return }
        if (!isBlank(queryParams)) {
            dispatch(Actions.ImportExport.importData(queryParams))
            setDispatched(true)
        }
    }, [dispatch, dispatched, setDispatched, queryParams])

    useEffect(() => {
        if (done === true) {
            dispatch(Actions.Notifications.addNotification({
                message: "Build Data Imported",
                variant: "success",
            }))
            navigate("/", { replace: true })
        }
    }, [dispatch, navigate, done])

    if (failed) {
        return (
            <ErPage pageName="data">
                <YouDied
                    to="/"
                    title="Import Failed"
                />
            </ErPage>
        )
    }

    return (
        <ErPage pageName="data">
            <Backdrop sx={{ zIndex: 1_000_000 }} open={!failed}>
                <CircularProgress />
            </Backdrop>
        </ErPage>
    )
}
