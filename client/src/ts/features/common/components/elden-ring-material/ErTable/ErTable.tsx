import merge from "lodash/merge"
import Box from "@mui/material/Box"
import {
    DataGrid as MuiDataGrid,
    DataGridProps as MuiDataGridProps,
} from "@mui/x-data-grid"

import { useLogging } from "@app/util"

import { ErTableProps } from "./types"

const defaultProps: Partial<ErTableProps> = {
    height: "635px",
    centerAll: false,
    stretchAll: true,
    BoxProps: {},
    disableSelectionOnClick: true,
}

export const ErTable = <T,>(props: ErTableProps<T>): JSX.Element => {

    const logger = useLogging()

    const {
        columns: rawColumns,

        centerAll,
        stretchAll,
        height,
        BoxProps,
        ...rest
    } = merge({}, defaultProps, props)

    const boxProps = merge(
        { sx: { height: height } },
        BoxProps,
    )

    // @ts-ignore: next-line
    const columns = rawColumns.map(col => ({
        ...(centerAll ? {
            align:       col?.align ?? "center",
            headerAlign: col?.align ?? "center",
        } : {}),
        ...(stretchAll && !col?.width ? {
            flex: 1,
        } : {}),
        ...col,
    }))

    const dataGridProps: MuiDataGridProps = {
        ...rest,
        // @ts-ignore: next-line
        columns: columns,
        // apiRef: apiRef,
        logger: logger,
    }

    return (
        <Box {...boxProps}>
            <MuiDataGrid {...dataGridProps} />
        </Box>
    )
}
