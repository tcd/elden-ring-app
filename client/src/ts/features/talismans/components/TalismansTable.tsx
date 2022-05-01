import { useSelector, useDispatch } from "react-redux"

import { Talisman } from "@app/types"
import {
    CustomTable,
    CustomTableColumn,
} from "@app/shared"
import { Selectors } from "@app/state"

const renderImageCell = (talisman: Talisman) => {
    return (
        <div style={{ width: "75px" }}>
            <img
                className="img-fluid"
                src={talisman.image_url}
                alt="talisman"
            />
        </div>
    )
}

const columns: CustomTableColumn<Talisman>[] = [
    { field: "id",          header: "",             sortable: false, width: 200, align: "center", renderFunc: renderImageCell },
    { field: "name",        header: "Name",         sortable: true,  width: 250 },
    { field: "weight",      header: "Weight",       sortable: false, width: 150, align: "right" },
    { field: "description", header: "Description",  sortable: false, width: null },
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
