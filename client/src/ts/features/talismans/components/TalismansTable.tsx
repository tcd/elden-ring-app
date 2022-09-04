import { useSelector, useDispatch } from "react-redux"

import { Talisman } from "@app/types"
import { getImageSrc } from "@app/util"
import { Selectors } from "@app/state"
import {
    CustomTable,
    CustomTableColumn,
    MuiImg,
} from "@app/shared"

const renderImageCell = (talisman: Talisman) => {
    const imageSrc = getImageSrc("Talisman", talisman.name, "256")
    return (
        <div style={{ width: "75px" }}>
            <MuiImg
                src={imageSrc}
                alt="talisman"
                responsive={true}
            />
        </div>
    )
}

const columns: CustomTableColumn<Talisman>[] = [
    { field: "id",          headerName: "",             sortable: false, width: 200, align: "center", renderCell: renderImageCell },
    { field: "name",        headerName: "Name",         sortable: true,  width: 250 },
    { field: "weight",      headerName: "Weight",       sortable: false, width: 150, align: "right" },
    { field: "description", headerName: "Description",  sortable: false, width: null },
]

export const TalismansTable = (): JSX.Element => {

    // const dispatch = useDispatch()

    const talismans = useSelector(Selectors.Talismans.all)

    return (
        <CustomTable
            rows={talismans}
            columns={columns}
        />
    )
}
