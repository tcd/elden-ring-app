import { useSelector, useDispatch } from "react-redux"
import { Modal, Alert, AlertTitle, SxProps, IconButton, Box } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

import { Actions, Selectors } from "@app/state"
import { WEAPON_AFFINITIES } from "@app/data"
import { getImageSrc } from "@app/util"
import { CustomSelect, SelectOption } from "@app/features/common"
import { AffinitySelect } from "."

export const AffinityModal2 = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    const choosingAffinity   = useSelector(Selectors.Weapons.smithing.choosingAffinity)
    const activeAffinityName = useSelector(Selectors.Weapons.smithing.activeAffinityName)
    const affinityOptions    = useSelector(Selectors.Weapons.smithing.affinityOptions)

    if (!choosingAffinity) {
        return null
    }

    const handleClose = (): void => {
        dispatch(Actions.Weapons.stopChoosingAffinity)
    }

    const handleCloseClick = (): void => {
        dispatch(Actions.Weapons.stopChoosingAffinity)
    }

    const handleClick = (value: string): void => {
        dispatch(Actions.Weapons.setAffinity({ name: value }))
    }

    const itemElements = affinityOptions.map((name) => {
        const key = `affinity-option-${name}`
        const imgSrc = getImageSrc("Weapon Affinity", name, "72")
        const classNames = ["er__affinity-modal__option__image"]
        if (name == activeAffinityName) {
            classNames.push("active")
        }
        return (
            <li
                key={key}
                className="er__affinity-modal__option"
                onClick={() => handleClick(name)}
            >
                <img className={classNames.join(" ")} src={imgSrc} />
                <span>{name}</span>
            </li>
        )
    })

    return (
        <>
            {/* <div className="er__affinity-modal__root"> */}
            <div className="er__affinity-modal__overlay">
                <div className="er__affinity-modal__content">
                    <header className="er__affinity-modal__content__header">
                        Affinity Granted
                    </header>
                    <ul className="er__affinity-modal__options">
                        {itemElements}
                    </ul>
                </div>
            </div>
            {/* </div> */}
        </>
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
