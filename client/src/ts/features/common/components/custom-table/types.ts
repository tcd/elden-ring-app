import type {
    TableProps as RdtTableProps,
} from "react-data-table-component"

// These aren't exported from "react-data-table-component", but that's where they're from
export declare type Primitive = string | number | boolean | bigint;
export declare type Selector<T> = (row: T, rowIndex?: number) => Primitive;

// =============================================================================
// Types
// =============================================================================

export type Field<T> = keyof(T) | Selector<T>

export type ColumnAlignment =
    | "left"
    | "center"
    | "right"

export interface CustomTableColumn<T> {
    field: Field<T> // | "actions" | "image"
    headerName: string
    align?: ColumnAlignment
    sortable?: boolean
    width?: number
    renderCell?: (t: T) => JSX.Element
}

interface CustomTableProps<T> {
    rows: T[]
    columns: CustomTableColumn<T>[]
}

type TablePropsMinus<T> = Omit<
    RdtTableProps<T>,
    "columns" | "data"
>

export type CustomTablePropsPlus<T,> = CustomTableProps<T> & TablePropsMinus<T>
