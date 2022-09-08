/* eslint-disable comma-dangle */
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Box, Container } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { QRCode, IProps } from "react-qrcode-logo"

import { ThemeVars } from "@app/theme"
import { Selectors } from "@app/state"
import {
    ErCard,
    MuiImg,
    ErColumnDef,
    ErTable,
    Anchor,
    CustomTable,
    CustomTableColumn,
} from "@app/features/common"

export const TestTable = (_props: unknown): JSX.Element => {

    const buildData       = useSelector(Selectors.ImportExport.buildData.raw)
    const compact         = useSelector(Selectors.ImportExport.buildData.compact)
    const minified        = useSelector(Selectors.ImportExport.buildData.minified)
    const minifiedCompact = useSelector(Selectors.ImportExport.buildData.minifiedCompact)

    const jsurl = useSelector(Selectors.ImportExport.wip.jsurl)
    const json = useSelector(Selectors.ImportExport.wip.json)
    const minifiedUrl = useSelector(Selectors.ImportExport.wip.minifiedCompact)
    const btoa = useSelector(Selectors.ImportExport.wip.btoa)
    const jsonCrush = useSelector(Selectors.ImportExport.wip.jsonCrush)

    const rows: ColumnData[] = [
        { type: "json", data: JSON.stringify(buildData),       name: "JSON.stringify(buildData)" },
        { type: "json", data: JSON.stringify(compact),         name: "compact(JSON.stringify(buildData))" },
        { type: "json", data: JSON.stringify(minified),        name: "minify(buildData)" },
        { type: "json", data: JSON.stringify(minifiedCompact), name: "compact(minify(JSON.stringify(buildData)))" },
        { type: "url",  data: "localhost:8080/data",           name: "test" },
        { type: "url",  data: json,                            name: "JSON.stringify()" },
        { type: "url",  data: btoa,                            name: "btoa()" },
        { type: "url",  data: jsurl,                           name: "JsUrl.stringify()" },
        { type: "url",  data: jsonCrush,                       name: "JSONCrush.crush()" },
        { type: "url",  data: minifiedUrl,                     name: "minified url" },
    ]

    return (
        <ErCard title="Build Data">
            <CustomTable
                rows={rows}
                columns={columns}
                // getRowId={(row) => row.name}
                expandableRows={true}
                expandableRowsComponent={RowDetail}
            />
        </ErCard>
    )
}

// =============================================================================

const qrCodeProps: Partial<IProps> = {
    ecLevel: "M",
    size: 200,
    qrStyle: "squares",
    quietZone: 10, // default
    // fgColor: ThemeVars.colors.blue,
    // logoWidth: (150 * 0.2),
    // removeQrCodeBehindLogo: true,
    // logoImage: "",
}

type ColumnData = {
    type: "json" | "url"
    name: string
    data: string
}

const columns: CustomTableColumn<ColumnData>[] = [
    { field: "type",    headerName: "type",   sortable: true, width: 100 },
    { field: "name",    headerName: "name",   sortable: true, width: 350 },
    { field: "actions", headerName: "length", sortable: true, width: 100, renderCell: (row) => <LengthColumn row={row}/> },
    { field: "image",   headerName: "length", sortable: false, width: 100, renderCell: (row) => <LinkColumn row={row}/> },
]

export const LengthColumn = ({ row }: { row: ColumnData }): JSX.Element => {
    return (
        <>{row.data.length.toLocaleString("en-US")}</>
    )
}

export const LinkColumn = ({ row }: { row: ColumnData }): JSX.Element => {
    if (row.type !== "url") { return null }
    return (
        <a href={row.data}>link</a>
    )
}

export const RowDetail = ({ data }: { data: ColumnData }): JSX.Element => {
    return (
        <Box sx={{ whitespace: "nowrap", color: "#d3d3d3" }}>
            {data.data}
        </Box>
    )
}
