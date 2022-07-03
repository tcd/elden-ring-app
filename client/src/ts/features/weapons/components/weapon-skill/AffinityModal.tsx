import ReactModal from "react-modal"
import { useSelector, useDispatch } from "react-redux"

import { Actions, Selectors } from "@app/state"
import { AffinitySelect } from "."

export const AffinityModal = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    const choosingAffinity   = useSelector(Selectors.Weapons.smithing.choosingAffinity)

    if (!choosingAffinity) {
        return null
    }

    const handleClose = (): void => {
        dispatch(Actions.Weapons.stopChoosingAffinity)
    }

    const handleCloseClick = (): void => {
        dispatch(Actions.Weapons.stopChoosingAffinity)
    }

    return (
        <ReactModal
            className="er__affinityModal"
            overlayClassName="er__affinityModal__overlay"
            isOpen={choosingAffinity}
            onRequestClose={handleCloseClick}
            ariaHideApp={false}
            shouldCloseOnOverlayClick={true}
            parentSelector={() => document.getElementById("weapon-skill-grid-menu")}
        >
            <div className="top-border"></div>

            <header>
                <span>Affinity Granted</span>
            </header>

            <div className="inner-border-wrapper">
                <div className="inner-border"></div>
            </div>

            <AffinitySelect />

            <div className="bottom-border"></div>

            <div className="left-border-wrapper">
                <div className="left-border"></div>
            </div>
            <div className="right-border-wrapper">
                <div className="right-border"></div>
            </div>
        </ReactModal>
    )
}
