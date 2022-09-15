import type { BoxProps } from "@mui/material"
import type {
    GridColDef as MuiGridColDef,
    DataGridProps as MuiDataGridProps,
} from "@mui/x-data-grid"


export type ErColumnDef<T = any> = Omit<MuiGridColDef, "field" | "headerAlign"> & {
    field: keyof T | "actions"
};

export type ErTableProps<T = any> = Omit<MuiDataGridProps<T>,
    | "logger"
    | "apiRef"
    | "columns"
> & {
    columns: ErColumnDef<T>[]
    /** @default false */
    centerAll?: boolean
    /** @default true */
    stretchAll?: boolean
    /** @default "635px" */
    height?: string | number
    /** @default { sx: { height: props.height } } */
    BoxProps?: BoxProps
};
