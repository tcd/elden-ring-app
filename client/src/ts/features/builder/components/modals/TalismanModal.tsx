import { useSelector, useDispatch } from "react-redux"

import { Actions, Selectors } from "@app/state"
import { EModal, CustomSelect } from "@app/shared"

export const TalismanModal = (): JSX.Element => {

    const dispatch = useDispatch()

    const talismanOptions = useSelector(Selectors.Builder.talismanOptions)
    const talismanModalOpen = useSelector(Selectors.Builder.talismanModalOpen)
    const activeTalismanNumber = useSelector(Selectors.Builder.talisman.activeNumber)
    const activeTalismanName = useSelector(Selectors.Builder.talisman.activeName)

    const handleChange = (value: string) => {
        dispatch(Actions.Builder.setTalisman({ name: value }))
        dispatch(Actions.Builder.closeTalismanModal())
    }

    const handleRequestClose = () => {
        dispatch(Actions.Builder.closeTalismanModal())
    }

    const handleRequestClear = () => {
        dispatch(Actions.Builder.removeTalisman())
        dispatch(Actions.Builder.closeTalismanModal())
    }

    const options = talismanOptions.map(opt => {
        const option: any = {
            value: opt.name,
            label: opt.name,
        }
        const imageName = opt.name.replace(/\s*\+\d$/, "")
        option.imageUrl = `/public/images/talismans/${imageName}.png`
        return option
    })

    const title = `Talisman ${activeTalismanNumber}`

    const modalBody = (
        <CustomSelect
            label="Talisman"
            onChange={handleChange}
            options={options}
            selectedValue={activeTalismanName}
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
            isOpen={talismanModalOpen}
            onClose={handleRequestClose}
            footerContent={modalFooter}
        >
            {modalBody}
        </EModal>
    )
}
