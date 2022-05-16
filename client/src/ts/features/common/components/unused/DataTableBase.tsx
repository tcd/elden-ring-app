import DataTable, { TableProps } from "react-data-table-component"
import Checkbox from "@mui/material/Checkbox"
import ArrowDownward from "@mui/icons-material/ArrowDownward"

const sortIcon = <ArrowDownward />
// const selectProps = { indeterminate: (isIndeterminate: boolean) => isIndeterminate }

export const DataTableBase = <T,>(props: TableProps<T>): JSX.Element => {
    return (
        <div className="data-table-wrapper">
            <DataTable
            // className="table table-bordered border-primary"
                // highlightOnHover
                // pagination
                // selectableRowsComponent={Checkbox}
                // selectableRowsComponentProps={selectProps}
                sortIcon={sortIcon}
                // dense
                {...props}
            />
        </div>
    )
}
