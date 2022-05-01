import { useSelector, useDispatch } from "react-redux"
import DataTable, { TableColumn } from "react-data-table-component"

import { Spell } from "@app/types"
import { Selectors } from "@app/state"
import { Heading, DataTableBase, renderNullableNumberCell, SpellDamageTypes } from "@app/shared"
import { spellImageFileName } from "../util"

const renderImageCell = (spell: Spell): JSX.Element => {
    const fileName = spellImageFileName(spell.name)
    const imagePath = `/public/images/spells/${fileName}.png`
    return (
        <div className="flex-center" style={{ width: "150px", textAlign: "center" }}>
            <div style={{ width: "75px" }}>
                <img
                    className="img-fluid"
                    src={imagePath}
                    alt="spell"
                />
            </div>
        </div>
    )
}

const _columns: TableColumn<Spell>[] = [
    { name: "Type", sortable: true, selector: (row) => row.spell_type },
    { name: "",     sortable: false, selector: row => row.name, cell: row => renderImageCell(row) },
    { name: "Name", sortable: true, selector: (row) => row.name, minWidth: "250px" },

    { name: "FP Cost",    sortable: true, selector: (row) => row.fp_cost },
    { name: "Slots Used", sortable: true, selector: (row) => row.slots_required },

    { name: "Int", sortable: true, selector: (row) => row.required_intelligence, cell: (row) => renderNullableNumberCell(row.required_intelligence) },
    { name: "Fai", sortable: true, selector: (row) => row.required_faith,        cell: (row) => renderNullableNumberCell(row.required_faith)        },
    { name: "Arc", sortable: true, selector: (row) => row.required_arcane,       cell: (row) => renderNullableNumberCell(row.required_arcane)       },

    { name: "Damage Types", sortable: false, selector: (row) => row.id, cell: (row) => <SpellDamageTypes spell={row} /> },
]

export const SpellsPage = (): JSX.Element => {

    const spells = useSelector(Selectors.Builder.api.spells)

    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">
                    <Heading title="Spells" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <DataTableBase
                        columns={_columns}
                        data={spells}
                    />
                </div>
            </div>
        </div>
    )
}
