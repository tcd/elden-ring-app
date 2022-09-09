import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Backdrop, CircularProgress } from "@mui/material"

import type { BuildData } from "@app/types"
import { isBlank } from "@app/util"
import { Actions, Selectors } from "@app/state"
import { ErPage } from "@app/features/common"

export const ImportDataPage = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const done = useSelector(Selectors.ImportExport.requests.importData.done)

    const [queryParams, setQueryParams] = useState<BuildData>({} as unknown as BuildData)
    const [dispatched, setDispatched]   = useState<boolean>(false)

    useEffect(() => {
        // const params = new Proxy(new URLSearchParams(window.location.search.replace(/^\?/, "")), {
        //     // @ts-ignore: next-line
        //     get: (searchParams, prop) => searchParams.get(prop),
        // })
        const urlSearchParams = new URLSearchParams(window.location.search)
        const params = Object.fromEntries(urlSearchParams.entries()) as unknown as BuildData
        setQueryParams(params)
    }, [])

    useEffect(() => {
        if (dispatched) { return }
        if (!isBlank(queryParams)) {
            dispatch(Actions.ImportExport.importData(queryParams))
            setDispatched(true)
        }
    }, [dispatch, dispatched, setDispatched, queryParams])

    useEffect(() => {
        if (done === true) {
            navigate("/", { replace: true })
        }
    }, [navigate, done])

    return (
        <ErPage pageName="data">
            <Backdrop sx={{ zIndex: 1_000_000 }} open={true}>
                <CircularProgress />
            </Backdrop>
        </ErPage>
    )
}
