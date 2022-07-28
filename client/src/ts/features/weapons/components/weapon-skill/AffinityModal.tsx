import { CSSProperties } from "react"
import ReactModal from "react-modal"
import { useSelector, useDispatch } from "react-redux"

import { Actions, Selectors } from "@app/state"
import { AffinitySelect } from "."
import { mergeProps } from "@app/util"

export interface AffinityModalProps {
    top?: number
}

const defaultProps: Partial<AffinityModalProps> = {
    top: 0,
}

export const AffinityModal = (props: AffinityModalProps): JSX.Element => {

    props = mergeProps(defaultProps, props)
    // console.log(props)

    const overlayStyles: CSSProperties = {
        top: props.top,
    }

    const dispatch = useDispatch()

    const choosingAffinity = useSelector(Selectors.Weapons.smithing.choosingAffinity)

    if (!choosingAffinity) { return null }

    // const handleClose = (): void => {
    //     dispatch(Actions.Weapons.stopChoosingAffinity)
    // }

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
            style={{ overlay: overlayStyles }}
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
