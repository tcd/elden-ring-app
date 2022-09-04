import { useSelector, useDispatch } from "react-redux"
import Checkbox from "@mui/material/Checkbox"
import MapIcon from "@mui/icons-material/Map"

import type { FiniteResource } from "@app/data"
import { getImageSrcManual } from "@app/util"
import { Selectors, Actions } from "@app/state"
import {
    ErTable,
    ErTableProps,
    ErColumn,
    MuiImg,
    RawHtml,
    Anchor,
} from "@app/shared"
import {
    CustomTable,
    CustomTablePropsPlus,
    CustomTableColumn,
} from "@app/shared"

export const RdtChecklist = (_props: unknown): JSX.Element => {

    const resources = useSelector(Selectors.Checklist.resources)

    const tableProps: CustomTablePropsPlus<FiniteResource> = {
        rows: resources,
        columns: columns,
        // centerAll: true,
        // stretchAll: true,
        // hideFooterPagination: true,
    }

    return <CustomTable {...tableProps} />
}

// =============================================================================

const columns: CustomTableColumn<FiniteResource>[] = [
    // {
    //     field: "id",
    //     headerName: "ID",
    // },
    {
        field: "id",
        headerName: "",
        // width: 50,
        renderCell: (row) => <ImageColumn row={row} />,
    },
    {
        field: "obtained",
        headerName: "Obtained",
        // width: 40,
        renderCell: (row) => <CheckboxColumn row={row} />,
    },
    {
        field: "mapLink",
        headerName: "Map Link",
        renderCell: (row) => row?.mapLink ? <Anchor href={row.mapLink} content={<MapIcon/>} /> : <></>,
    },
    {
        field: "quest",
        headerName: "Quest",
        renderCell: (row) => row?.questLink ? <Anchor href={row.questLink} content={row.quest} /> : <></>,
    },
    {
        field: "location",
        headerName: "Location",
    },
    {
        field: "description",
        headerName: "Description",
        renderCell: (row) => <RawHtml content={row.description}/>,
    },
]

// =============================================================================

const CheckboxColumn = ({ row }: { row: FiniteResource }): JSX.Element => {

    const dispatch = useDispatch()

    const handleChange = (_event: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(Actions.Checklist.toggleObtained(row.id.toString()))
    }

    return (
        <Checkbox
            checked={row.obtained}
            onChange={handleChange}
        />
    )
}

// =============================================================================

const ImageColumn = ({ row }: { row: FiniteResource }): JSX.Element => {
    return (
        <MuiImg
            src={getImageSrcManual(`Upgrade Materials/${row.type}`, "public")}
            alt={row.type}
            title={row.type}
            responsive={true}
            sx={{ padding: "0.5rem" }}
        />
    )
}
