import { useSelector, useDispatch } from "react-redux"
import { isBlank, getImageSrc } from "@app/util"
import { Actions, Selectors } from "@app/state"

export const AffinitySelect = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    const affinityOptions = useSelector(Selectors.Weapons.smithing.affinityOptions)

    const handleChange = (value: string): void => {
        dispatch(Actions.Weapons.setAffinity({ name: value }))
        return null
    }

    const handleClick = (value: string): void => {
        dispatch(Actions.Weapons.setAffinity({ name: value }))
    }

    const itemElements = affinityOptions.map((name) => {
        const key = `affinity-option-${name}`
        const imgSrc = getImageSrc("Weapon Affinity", name, "128")
        return (
            <li
                key={key}
                onClick={() => handleClick(name)}
            >
                <img className="er__affinity-modal__option__image" src={imgSrc} />
                {name}
            </li>
        )
    })

    return (
        <ul>
            {itemElements}
        </ul>
    )
}
