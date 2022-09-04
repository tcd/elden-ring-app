import { useSelector, useDispatch } from "react-redux"

import { Spell } from "@app/types"
import { Selectors } from "@app/state"
import {
    CustomTable,
    NullableNumber,
    SpellDamageTypes,
    CustomTableColumn,
} from "@app/shared"

const renderImageCell = (spell: Spell): JSX.Element => {
    return (
        <div className="flex-center" style={{ width: "150px", textAlign: "center" }}>
            <div style={{ width: "75px" }}>
                <img
                    className="img-fluid"
                    src={spell.image_url}
                    alt="spell"
                />
            </div>
        </div>
    )
}

const columns: CustomTableColumn<Spell>[] = [
    { headerName: "Type",         field: "spell_type",            sortable: true },
    { headerName: "",             field: "id",                    sortable: false, renderFunc: renderImageCell },
    { headerName: "Name",         field: "name",                  sortable: true, width: 250 },
    { headerName: "FP Cost",      field: "fp_cost",               sortable: true, align: "right" },
    { headerName: "Slots Used",   field: "slots_required",        sortable: true, align: "right" },
    { headerName: "Int",          field: "required_intelligence", sortable: true, align: "right", renderFunc: (row) => <NullableNumber number={row.required_intelligence} /> },
    { headerName: "Fai",          field: "required_faith",        sortable: true, align: "right", renderFunc: (row) => <NullableNumber number={row.required_faith} />        },
    { headerName: "Arc",          field: "required_arcane",       sortable: true, align: "right", renderFunc: (row) => <NullableNumber number={row.required_arcane} />       },
    { headerName: "Damage Types", field: "id",                    sortable: false, renderFunc: (row) => <SpellDamageTypes spell={row} /> },
]

export const SpellsTable = (): JSX.Element => {

    // const dispatch = useDispatch()

    const spells = useSelector(Selectors.Builder.api.spells)

    return (
        <CustomTable
            rows={spells}
            columns={columns}
        />
    )
}
