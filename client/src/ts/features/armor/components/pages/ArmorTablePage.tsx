import { useSelector, useDispatch } from "react-redux"
import { MenuItem, TextField } from "@mui/material"

import { ArmorTypes, ArmorType } from "@app/constants"
import { Armor } from "@app/types"
import {
    Heading,
    CustomTable,
    CustomTableColumn,
    MuiImg,
} from "@app/shared"
import { getImageSrc } from "@app/util"
import { Actions, Selectors } from "@app/state"

const renderImageCell = (armor: Armor) => {
    const imagePath = getImageSrc("Armor", armor.name, "256")
    return (
        <div style={{ width: "75px" }}>
            <MuiImg
                src={imagePath}
                alt="armor image"
                responsive={true}
                sx={{ my: 2 }}
            />
        </div>
    )
}

const columns: CustomTableColumn<Armor>[] = [
    // { field: "type",   headerName: "Type",   sortable: true,  width: 100 },
    { field: "id",     headerName: "",       sortable: false, width: 200, align: "center", renderCell: renderImageCell },
    { field: "name",   headerName: "Name",   sortable: true,  width: 250                 },
    { field: "weight", headerName: "Weight", sortable: true,  width: 100, align: "right" },
    { field: "poise",  headerName: "Poise",  sortable: true,  width:  90, align: "right" },

    { field: "physical",  headerName: "Physical",  sortable: true, align: "right" },
    // { field: "strike",    headerName: "VS Strike", sortable: true, align: "right" },
    // { field: "slash",     headerName: "VS Slash",  sortable: true, align: "right" },
    // { field: "pierce",    headerName: "VS Pierce", sortable: true, align: "right" },
    { field: "magic",     headerName: "Magic",     sortable: true, align: "right" },
    { field: "fire",      headerName: "Fire",      sortable: true, align: "right" },
    { field: "lightning", headerName: "Lightning", sortable: true, align: "right" },
    { field: "holy",      headerName: "Holy",      sortable: true, align: "right" },

    // { field: "immunity",   headerName: "Immunity",   sortable: true, align: "right" },
    // { field: "robustness", headerName: "Robustness", sortable: true, align: "right" },
    // { field: "focus",      headerName: "Focus",      sortable: true, align: "right" },
    // { field: "vitality",   headerName: "Vitality",   sortable: true, align: "right" },
]

export const ArmorTablePage = (): JSX.Element => {

    const dispatch = useDispatch()

    const armor = useSelector(Selectors.Armor.allFiltered)
    const activeType = useSelector(Selectors.Armor.activeType)

    const handleActiveTypeChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = event.target.value as "all" | ArmorType
        dispatch(Actions.Armor.setActiveType({ type: value }))
    }

    // FIXME: bootstrap
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
                                <MenuItem value={ArmorTypes.Head}>{ArmorTypes.Head}</MenuItem>
                                <MenuItem value={ArmorTypes.Chest}>{ArmorTypes.Chest}</MenuItem>
                                <MenuItem value={ArmorTypes.Arms}>{ArmorTypes.Arms}</MenuItem>
                                <MenuItem value={ArmorTypes.Legs}>{ArmorTypes.Legs}</MenuItem>
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
