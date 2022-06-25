import { Fragment } from "react"
import { useSelector, useDispatch } from "react-redux"

import { Armor, ARMOR_SORT_GROUPS } from "@app/types"
import { Actions, Selectors } from "@app/state"
import { ArmorDetail } from "./ArmorDetail"

export const ArmorMenu = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    const armor       = useSelector(Selectors.Armor.options)
    const activeName  = useSelector(Selectors.Armor.activeName)
    const activeArmor = useSelector(Selectors.Armor.active)

    const handleClick = (armorName: string) => {
        dispatch(Actions.Armor.equipArmor({ name: armorName }))
    }

    const sections = ARMOR_SORT_GROUPS.map((sortGroup, index) => {
        const sectionArmor = armor.filter(x => x.sort_group == sortGroup)
        const armorCells = sectionArmor.map((armor) => {
            let classes = "equipment-menu-cell inactive"
            if (armor.name === activeName) {
                classes = "equipment-menu-cell active"
            }
            return (
                <div
                    key={`armor-${armor.name}`}
                    className={classes}
                    onClick={() => handleClick(armor.name)}
                >
                    <ArmorImage armor={armor} />
                </div>
            )
        })
        const divider = (index + 1 < ARMOR_SORT_GROUPS.length) ? <div className="equipment-menu-section-border"></div> : null

        return (
            <Fragment key={sortGroup}>
                <section id={sortGroup.toString()} className="equipment-menu-section">
                    {armorCells}
                </section>
                {divider}
            </Fragment>
        )
    })

    return (
        <div id="variable-menu">
            <div className="equipment-menu">
                <div className="equipment-menu-grid-column">
                    {sections}
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
