import { useSelector, useDispatch } from "react-redux"

import { WeaponSlotId } from "@app/types"
import { Actions, Selectors } from "@app/state"
import { EModal, CustomSelect } from "@app/shared"

const nameForSlot = (slotId: WeaponSlotId): string => {
    switch (slotId) {
        case "R1":
            return "Right Hand Armament 1"
        case "R2":
            return "Right Hand Armament 2"
        case "R3":
            return "Right Hand Armament 3"
        case "L1":
            return "Left Hand Armament 1"
        case "L2":
            return "Left Hand Armament 2"
        case "L3":
            return "Left Hand Armament 3"
        default:
            return ""
    }
}

export const WeaponModal = (): JSX.Element => {

    const dispatch = useDispatch()

    const modalOpen = useSelector(Selectors.Builder.weapons.modalOpen)
    const activeSlotId = useSelector(Selectors.Builder.weapons.activeSlotId)
    const activeWeapon = useSelector(Selectors.Builder.weapons.active)
    const weapons = useSelector(Selectors.Builder.api.weapons)

    const handleChange = (value: string) => {
        dispatch(Actions.Builder.setWeapon({ name: value }))
        dispatch(Actions.Builder.closeWeaponModal())
    }

    const handleRequestClose = () => {
        dispatch(Actions.Builder.closeWeaponModal())
    }

    const handleRequestClear = () => {
        dispatch(Actions.Builder.removeWeapon())
        dispatch(Actions.Builder.closeWeaponModal())
    }

    const options = weapons.map((option) => {
        const folder = option.is_shield ? "shields" : "weapons"
        return {
            value: option.name,
            label: option.name,
            imageUrl: `/public/images/${folder}/${option.name}.png`,
        }
    })

    const modalBody = (
        <CustomSelect
            label="Weapon"
            onChange={handleChange}
            options={options}
            selectedValue={activeWeapon?.name}
        />
    )

    const modalFooter = (
        <>
            <button type="button" className="elden-ring-button" onClick={handleRequestClose}>Close</button>
            <button type="button" className="elden-ring-button" onClick={handleRequestClear}>Clear</button>
        </>
    )

    const title = nameForSlot(activeSlotId)

    return (
        <EModal
            title={title}
            isOpen={modalOpen}
            onClose={handleRequestClose}
            footerContent={modalFooter}
        >
            {modalBody}
        </EModal>
    )
}
