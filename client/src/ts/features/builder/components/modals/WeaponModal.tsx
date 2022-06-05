import { useSelector, useDispatch } from "react-redux"

import { weaponSlotIdName } from "@app/types"
import { Actions, Selectors } from "@app/state"
import { EModal, CustomSelect } from "@app/shared"

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

    const handleRequestCustomize = () => {
        // dispatch(Actions.Builder.closeWeaponModal())
    }

    const options = weapons.map((option) => {
        return {
            value: option.name,
            label: option.name,
            imageUrl: option.image_url,
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
            <button type="button" className="elden-ring-button" onClick={handleRequestCustomize}>Customize</button>
        </>
    )

    const title = weaponSlotIdName(activeSlotId)

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
