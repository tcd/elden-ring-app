import { useSelector, useDispatch } from "react-redux"

import { Armor } from "@app/types"
import { Actions, Selectors } from "@app/state"
import { ArmorDetail } from "./ArmorDetail"

export const ArmorMenu = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    const filteredArmor  = useSelector(Selectors.Armor.allFiltered)
    const activeName  = useSelector(Selectors.Armor.activeName)
    const activeArmor = useSelector(Selectors.Armor.active)

    const handleClick = (armorName: string) => {
        dispatch(Actions.Armor.setActiveName({ name: armorName }))
    }

    const cells = filteredArmor.map((armor) => {
        let classes = "equipment-menu-cell inactive"
        if (armor.name === activeName) {
            classes = "equipment-menu-cell active"
        }
        return (
            <div
                key={`armor-${armor.display_name}`}
                className={classes}
                onClick={() => handleClick(armor.name)}
            >
                <ArmorImage armor={armor} />
            </div>
        )
    })

    return (
        <div id="variable-menu">
            <div className="equipment-menu">
                <div className="equipment-menu-grid-column">
                    <section className="equipment-menu-section">
                        {cells}
                    </section>
                </div>
            </div>
            <div>
                <ArmorDetail armor={activeArmor} />
            </div>
        </div>
    )
}

interface ArmorImageProps {
    armor: Armor
}

const ArmorImage = ({ armor }: ArmorImageProps) => {
    return (
        <div className="equipment-menu-image-wrapper">
            <img
                className="img-fluid"
                src={armor.image_url}
                alt={armor.display_name}
            />
        </div>
    )
}
