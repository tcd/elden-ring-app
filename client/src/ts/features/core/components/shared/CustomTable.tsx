import DataTable, { TableProps } from "react-data-table-component"
import ArrowDownward from "@mui/icons-material/ArrowDownward"
import { TableColumn } from "react-data-table-component"

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
    field: Field<T>
    header: string
    align?: ColumnAlignment
    sortable?: boolean
    width?: number
    renderFunc?: (t: T) => JSX.Element
}

interface CustomTableProps<T> {
    rows: T[]
    columns: CustomTableColumn<T>[]
}

type TablePropsMinus<T> = Omit<
    TableProps<T>,
    "columns" | "data"
>

export type CustomTablePropsPlus<T,> = CustomTableProps<T> & TablePropsMinus<T>

// =============================================================================
// Component
// =============================================================================

// const selectProps = { indeterminate: (isIndeterminate: boolean) => isIndeterminate }

export const CustomTable = <T,>(props: CustomTablePropsPlus<T>): JSX.Element => {
    const {
        rows,
        columns,
        ...otherProps
    } = props
    const validColumns = convertColumns(columns)
    return (
        <div className="data-table-wrapper">
            <DataTable
            // className="table table-bordered border-primary"
                // highlightOnHover
                // pagination
                // selectableRowsComponent={Checkbox}
                // selectableRowsComponentProps={selectProps}
                sortIcon={<ArrowDownward/>}
                // dense
                data={rows}
                columns={validColumns}
                {...otherProps}
            />
        </div>
    )
}

const convertColumns = <T,>(customColumns: CustomTableColumn<T>[]): TableColumn<T>[] => {
    const newColumns: TableColumn<T>[] = []
    for (const customColumn of customColumns) {
        const newColumn: TableColumn<T> = {}
        newColumn.sortable = customColumn.sortable ?? false
        newColumn.name = customColumn.header
        if (typeof(customColumn.field) == "string") {
            // @ts-ignore:next-line
            newColumn.selector = (row) => { return row[customColumn.field] }
        } else {
            // @ts-ignore:next-line
            newColumn.selector = customColumn.field
        }
        if (customColumn.renderFunc) {
            newColumn.cell = (row) => customColumn.renderFunc(row)
        }
        if (customColumn.width) {
            newColumn.width = customColumn.width + "px"
        }
        if (customColumn.align == "center") {
            newColumn.center = true
        } else if (customColumn.align == "right") {
            newColumn.right = true
        }
        newColumns.push(newColumn)
    }
    return newColumns
}
