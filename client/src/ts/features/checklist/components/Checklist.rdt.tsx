import { useSelector, useDispatch } from "react-redux"
import { Box, Checkbox } from "@mui/material"
import MapIcon from "@mui/icons-material/Map"

import type { FiniteResource } from "@app/data"
import { getImageSrcManual } from "@app/util"
import { Selectors, Actions } from "@app/state"
import {
    CustomTable,
    CustomTablePropsPlus,
    CustomTableColumn,
    MuiImg,
    RawHtml,
    Anchor,
} from "@app/shared"

export const RdtChecklist = (_props: unknown): JSX.Element => {

    const resources = useSelector(Selectors.Checklist.resources)

    const tableProps: CustomTablePropsPlus<FiniteResource> = {
        rows: resources,
        columns: columns,
        centerAll: true,
        // stretchAll: true,
        // hideFooterPagination: true,
        expandableRows: true,
        expandableRowsComponent: Expanded,
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
        width: 100,
        renderCell: (row) => <ImageColumn row={row} />,
    },
    {
        field: "obtained",
        headerName: "Obtained",
        width: 100,
        renderCell: (row) => <CheckboxColumn row={row} />,
    },
    {
        field: "mapLink",
        headerName: "Map Link",
        width: 100,
        renderCell: (row) => row?.mapLink ? <Anchor href={row.mapLink} content={<MapIcon/>} /> : null,
    },
    {
        field: "quest",
        headerName: "Quest",
        renderCell: (row) => row?.questLink ? <Anchor href={row.questLink} content={row.quest} /> : null,
    },
    {
        field: "location",
        headerName: "Location",
    },
    // {
    //     field: "description",
    //     headerName: "Description",
    //     renderCell: (row) => <DescriptionColumn row={row} />,
    // },
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
            // responsive={true}
            sx={{ width: "50px", padding: "0.5rem" }}
        />
    )
}

// =============================================================================

const DescriptionColumn = ({ row }: { row: FiniteResource }): JSX.Element => {
    return (
        <Box sx={{
            whiteSpace: "nowrap",
            height: "50px",
            overflow: "hidden",
            textOverflow: "ellipsis",
        }}>
            <RawHtml content={row.description}/>
        </Box>
    )
}

// =============================================================================

const Expanded = ({ data }: { data: FiniteResource }): JSX.Element => {
    return (
        <Box sx={{ whiteSpace: "nowrap" }}>
            <RawHtml content={data.description}/>
        </Box>
    )
}
