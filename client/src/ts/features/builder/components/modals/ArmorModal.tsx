import { useSelector, useDispatch } from "react-redux"

import { ArmorType } from "@app/types"
import { Actions, Selectors } from "@app/state"
import { EModal, CustomSelect } from "@app/shared"

export const ArmorModal = (): JSX.Element => {

    const dispatch = useDispatch()

    const modalOpen  = useSelector(Selectors.Builder.armor.modalOpen)
    const activeType = useSelector(Selectors.Builder.armor.activeType)
    const activeName = useSelector(Selectors.Builder.armor.activeName)
    const activeOptions = useSelector(Selectors.Builder.armor.activbeOptions)

    const title = `${activeType}`

    const handleChange = (value: string) => {
        dispatch(Actions.Builder.setArmor({ name: value }))
        dispatch(Actions.Builder.closeArmorModal())
    }

    const handleRequestClose = () => {
        dispatch(Actions.Builder.closeArmorModal())
    }

    const handleRequestClear = () => {
        dispatch(Actions.Builder.removeArmor())
        dispatch(Actions.Builder.closeArmorModal())
    }

    const options = () => {
        if (!activeType) {
            return []
        }
        return activeOptions.map((opt) => ({
            value: opt.name,
            label: opt.name,
            imageUrl: opt.image_url,
        }))
    }

    const modalBody = (
        <CustomSelect
            label={title}
            onChange={handleChange}
            options={options()}
            selectedValue={activeName}
        />
    )

    const modalFooter = (
        <>
            <button type="button" className="elden-ring-button" onClick={handleRequestClose}>Close</button>
            <button type="button" className="elden-ring-button" onClick={handleRequestClear}>Clear</button>
        </>
    )

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
