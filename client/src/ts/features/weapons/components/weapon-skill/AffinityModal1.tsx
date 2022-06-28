import { useSelector, useDispatch } from "react-redux"
import { Modal, Alert, AlertTitle, SxProps, IconButton, Box } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

import { Actions, Selectors } from "@app/state"
import { WEAPON_AFFINITIES } from "@app/data"
import { getImageSrc } from "@app/util"
import { CustomSelect, SelectOption } from "@app/features/common"
import { AffinitySelect } from "."

export const AffinityModal = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    const choosingAffinity = useSelector(Selectors.Weapons.smithing.choosingAffinity)
    const affinityOptions = useSelector(Selectors.Weapons.smithing.affinityOptions)

    const handleClose = (): void => {
        dispatch(Actions.Weapons.stopChoosingAffinity)
    }

    const handleCloseClick = (): void => {
        dispatch(Actions.Weapons.stopChoosingAffinity)
    }

    const handleChange = (value: string): void => {
        dispatch(Actions.Weapons.setAffinity({ name: value }))
        // dispatch(Actions.Weapons.stopChoosingAffinity)
    }

    const modalAction = (
        <IconButton color="inherit" size="small" onClick={handleCloseClick}>
            <CloseIcon fontSize="inherit" />
        </IconButton>
    )

    const options: SelectOption[] = affinityOptions.map((name) => {
        return {
            label: name,
            value: name,
            imageUrl: getImageSrc("Weapon Affinity", name, "128"),
        }
    })

    return (
        <Modal
            open={choosingAffinity}
            onClose={handleClose}
            sx={modalStyles}
            BackdropProps={{ classes: { root: "er__affinity-modal__overlay" } }}
        >
            <Box>
                <AffinitySelect />
                {/* <CustomSelect
                    label="Affinity Granted"
                    selectedValue="Standard"
                    options={options}
                    onChange={handleChange}
                /> */}
            </Box>
        </Modal>
    )
}


// =============================================================================
// Styles
// =============================================================================

const modalStyles: SxProps = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}
