import ReactModal from "react-modal"
import { useSelector, useDispatch } from "react-redux"

import { ComponentSx } from "@app/theme"
import { Actions, Selectors } from "@app/state"

import { contentElement } from "./Content"

export interface AffinityModalProps {
    top?: number
    parentId?: string
}

export const AffinityModal = (props: AffinityModalProps): JSX.Element => {

    const dispatch = useDispatch()

    const choosingAffinity = useSelector(Selectors.Weapons.smithing.choosingAffinity)

    if (!choosingAffinity) {
        return null
    }

    const {
        top = 0,
        parentId = "weapon-skill-grid-menu",
    } = props

    const styles: ReactModal.Styles = {
        content: {},
        overlay: {
            ...ComponentSx.AffinityModal.overlay,
            top: top,
        },
    }

    // const handleClose = (): void => {
    //     dispatch(Actions.Weapons.stopChoosingAffinity)
    // }

    const handleCloseClick = (): void => {
        dispatch(Actions.Weapons.stopChoosingAffinity)
    }

    const parentSelector = (): HTMLElement => {
        return document.getElementById(parentId)
    }

    return (
        <ReactModal
            contentElement={contentElement}
            isOpen={choosingAffinity}
            onRequestClose={handleCloseClick}
            ariaHideApp={false}
            shouldCloseOnOverlayClick={true}
            parentSelector={parentSelector}
            style={styles}
        />
    )
}
