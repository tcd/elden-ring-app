import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import { Actions, Selectors } from "@app/state"
import { ErPage, ErCard } from "@app/features/common"

import { TestTable, QrExportCard, ExportModal } from "../misc"

export const DataPage = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    const [queryParams, setQueryParams] = useState<any>({})

    useEffect(() => {
        // const params = new Proxy(new URLSearchParams(window.location.search.replace(/^\?/, "")), {
        //     // @ts-ignore: next-line
        //     get: (searchParams, prop) => searchParams.get(prop),
        // })
        const urlSearchParams = new URLSearchParams(window.location.search)
        const params = Object.fromEntries(urlSearchParams.entries())
        setQueryParams(params)
    }, [])

    return (
        <ErPage pageName="data">
            <ExportModal />
            <Container>
                <Grid container direction="row">

                    <Grid xs={12}>
                        <ErCard title="Query Params">
                            {JSON.stringify(queryParams)}
                        </ErCard>
                    </Grid>

                    <Grid xs={12}>
                        <QrExportCard />
                    </Grid>

                    <Grid xs={12}>
                        <TestTable />
                    </Grid>

                </Grid>
            </Container>
        </ErPage>
    )
}
