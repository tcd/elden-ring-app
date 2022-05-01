import { useSelector, useDispatch } from "react-redux"
import { MenuItem, TextField } from "@mui/material"

import { Armor, ArmorType } from "@app/types"
import {
    Heading,
    CustomTable,
    CustomTableColumn,
} from "@app/shared"
import { Actions, Selectors } from "@app/state"

const renderImageCell = (armor: Armor) => {
    const imagePath = `/public/images/armor/${armor.name}.png`
    return (
        <div style={{ width: "75px" }}>
            <img
                className="img-fluid my-2"
                src={imagePath}
                alt="armor image"
            />
        </div>
    )
}

const columns: CustomTableColumn<Armor>[] = [
    // { field: "type",   header: "Type",   sortable: true,  width: 100 },
    { field: "id",     header: "",       sortable: false, width: 200, align: "center", renderFunc: renderImageCell },
    { field: "name",   header: "Name",   sortable: true,  width: 250                 },
    { field: "weight", header: "Weight", sortable: true,  width: 100, align: "right" },
    { field: "poise",  header: "Poise",  sortable: true,  width:  90, align: "right" },

    { field: "physical",  header: "Physical",  sortable: true, align: "right" },
    // { field: "strike",    header: "VS Strike", sortable: true, align: "right" },
    // { field: "slash",     header: "VS Slash",  sortable: true, align: "right" },
    // { field: "pierce",    header: "VS Pierce", sortable: true, align: "right" },
    { field: "magic",     header: "Magic",     sortable: true, align: "right" },
    { field: "fire",      header: "Fire",      sortable: true, align: "right" },
    { field: "lightning", header: "Lightning", sortable: true, align: "right" },
    { field: "holy",      header: "Holy",      sortable: true, align: "right" },

    // { field: "immunity",   header: "Immunity",   sortable: true, align: "right" },
    // { field: "robustness", header: "Robustness", sortable: true, align: "right" },
    // { field: "focus",      header: "Focus",      sortable: true, align: "right" },
    // { field: "vitality",   header: "Vitality",   sortable: true, align: "right" },
]

export const ArmorPage = (): JSX.Element => {

    const dispatch = useDispatch()

    const armor = useSelector(Selectors.Armor.allFiltered)
    const activeType = useSelector(Selectors.Armor.activeType)

    const handleActiveTypeChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = event.target.value as "all" | ArmorType
        dispatch(Actions.Armor.setActiveType({ type: value }))
    }

    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">
                    <Heading title="Armor">
                        <div>
                            <TextField
                                select
                                fullWidth
                                style={{ width: "100px" }}
                                label="Type"
                                size="small"
                                value={activeType}
                                onChange={handleActiveTypeChange}
                                SelectProps={{}}
                            >
                                <MenuItem value="all">All</MenuItem>
                                <MenuItem value={ArmorType.Head}>{ArmorType.Head}</MenuItem>
                                <MenuItem value={ArmorType.Chest}>{ArmorType.Chest}</MenuItem>
                                <MenuItem value={ArmorType.Arms}>{ArmorType.Arms}</MenuItem>
                                <MenuItem value={ArmorType.Legs}>{ArmorType.Legs}</MenuItem>
                            </TextField>
                        </div>
                    </Heading>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <CustomTable
                        rows={armor}
                        columns={columns}
                        pagination
                        paginationPerPage={100}
                        paginationRowsPerPageOptions={[50, 100]}
                    />
                </div>
            </div>
        </div>
    )
}
