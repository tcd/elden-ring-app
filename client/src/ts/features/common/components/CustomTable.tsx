import ReactDataTable, {
    TableProps as RdtTableProps,
    TableColumn as RdtTableColumn,
} from "react-data-table-component"
import ArrowDownward from "@mui/icons-material/ArrowDownward"

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
    RdtTableProps<T>,
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
            <ReactDataTable
            // className="table table-bordered border-primary"
                // highlightOnHover
                // pagination
                // selectableRowsComponent={Checkbox}
                // selectableRowsComponentProps={selectProps}
                // dense
                // fixedHeaderScrollHeight="200px"
                fixedHeader={true}
                sortIcon={<ArrowDownward/>}
                data={rows}
                columns={validColumns}
                {...otherProps}
            />
        </div>
    )
}

const convertColumns = <T,>(customColumns: CustomTableColumn<T>[]): RdtTableColumn<T>[] => {
    const newColumns: RdtTableColumn<T>[] = []
    for (const customColumn of customColumns) {
        const newColumn: RdtTableColumn<T> = {}
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
