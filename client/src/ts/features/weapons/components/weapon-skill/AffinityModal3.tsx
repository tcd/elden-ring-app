import { ReactNode } from "react"
import ReactModal from "react-modal"
import { useSelector, useDispatch } from "react-redux"
import CloseIcon from "@mui/icons-material/Close"

import { Actions, Selectors } from "@app/state"
import { getImageSrc } from "@app/util"

export const AffinityModal3 = (_props: unknown): JSX.Element => {

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

    const handleUndoEffectClick = (): void => {
        // dispatch(Actions.Weapons.setAffinity({ name: value }))
    }

    const itemElements = affinityOptions.map((name) => {
        const key = `affinity-option-${name}`
        const imgSrc = getImageSrc("Weapon Affinity", name, "72")
        const classNames = ["er__affinityModal__option"]
        if (name == activeAffinityName) {
            classNames.push("active")
        }
        return (
            <li
                key={key}
                className={classNames.join(" ")}
                onClick={() => handleClick(name)}
            >
                <img className="er__affinityModal__option__image" src={imgSrc} />
                <span>{name}</span>
            </li>
        )
    })

    itemElements.unshift(
        <li
            key="affinity-option-undo-effect"
            className="er__affinityModal__option"
            onClick={handleUndoEffectClick}
        >
            <div className="er__affinityModal__option__imagePlaceholder"></div>
            <span>Undo Enhancement</span>
        </li>,
    )

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

            <ul className="er__affinityModal__options">
                {itemElements}
            </ul>

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
