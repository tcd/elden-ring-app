import ReactDataTable, {
    TableColumn as RdtTableColumn,
    createTheme,
} from "react-data-table-component"
import ArrowDownward from "@mui/icons-material/ArrowDownward"

import { ComponentSx } from "@app/theme"

import {
    CustomTableColumn,
    CustomTablePropsPlus,
} from "./types"

// const selectProps = { indeterminate: (isIndeterminate: boolean) => isIndeterminate }

export const CustomTable = <T,>(props: CustomTablePropsPlus<T>): JSX.Element => {
    const {
        rows,
        columns,
        centerAll,
        ...otherProps
    } = props
    const validColumns = convertColumns(columns, centerAll)
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
                theme="er-data-table"
                {...otherProps}
            />
        </div>
    )
}

// =============================================================================

createTheme("er-data-table", ComponentSx.Rdtc.theme)

const convertColumns = <T,>(customColumns: CustomTableColumn<T>[], centerAll = false): RdtTableColumn<T>[] => {
    const newColumns: RdtTableColumn<T>[] = []
    for (const customColumn of customColumns) {
        const newColumn: RdtTableColumn<T> = {}
        newColumn.sortable = customColumn.sortable ?? false
        newColumn.name = customColumn.headerName
        if (typeof(customColumn.field) == "string") {
            // @ts-ignore:next-line
            newColumn.selector = (row) => { return row[customColumn.field] }
        } else {
            // @ts-ignore:next-line
            newColumn.selector = customColumn.field
        }
        if (customColumn.renderCell) {
            newColumn.cell = (row) => customColumn.renderCell(row)
        }
        if (customColumn.width) {
            newColumn.width = customColumn.width + "px"
        }
        if (centerAll) {
            newColumn.center = true
        } else {
            if (customColumn.align == "center") {
                newColumn.center = true
            } else if (customColumn.align == "right") {
                newColumn.right = true
            }
        }
        newColumns.push(newColumn)
    }
    return newColumns
}
