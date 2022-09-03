import { useSelector, useDispatch } from "react-redux"

import { Actions, Selectors } from "@app/state"
import { getImageSrc } from "@app/util"

export const AffinitySelect = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    const activeAffinityName = useSelector(Selectors.Weapons.smithing.activeAffinityName)
    const affinityOptions    = useSelector(Selectors.Weapons.smithing.affinityOptions)

    const handleClick = (value: string): void => {
        dispatch(Actions.Weapons.setAffinity({ name: value }))
    }

    const handleUndoEffectClick = (): void => {
        dispatch(Actions.Weapons.removeAffinity())
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
        <ul className="er__affinityModal__options">
            {itemElements}
        </ul>
    )
}

