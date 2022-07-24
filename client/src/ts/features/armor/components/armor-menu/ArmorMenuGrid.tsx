import { createRef, useEffect, useRef, Fragment } from "react"
import { useSelector, useDispatch } from "react-redux"

import { ARMOR_SORT_GROUPS, RefMap } from "@app/types"
import { scrollToEquipmentCell } from "@app/util"
import { Actions, Selectors } from "@app/state"
import { MouseOverPopover } from "@app/shared"
import { ArmorMenuImage } from "@app/features/armor/components"

export const ArmorMenuGrid = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    const armor           = useSelector(Selectors.Armor.options)
    const activeName      = useSelector(Selectors.Armor.activeName)
    const menuHasScrolled = useSelector(Selectors.Armor.menuHasScrolled)

    const menuRef = createRef<HTMLDivElement>()

    const refs: RefMap = armor.reduce((acc, value) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        acc[value.name] = useRef<HTMLDivElement>(null)
        return acc
    }, {})

    const handleClick = (armorName: string) => {
        dispatch(Actions.Armor.equipArmor({ name: armorName }))
    }

    const sections = ARMOR_SORT_GROUPS.map((sortGroup, index) => {
        const sectionArmor = armor.filter(x => x.sort_group == sortGroup)
        const armorCells = sectionArmor.map((armor) => {
            const key = `armor-${armor.name}`
            let classes = "er__equipmentMenu__gridCell inactive"
            if (armor.name === activeName) {
                classes = "er__equipmentMenu__gridCell active"
            }
            return (
                <MouseOverPopover id={key} key={key} popoverContent={armor.name}>
                    <div
                        key={`armor-${armor.name}`}
                        ref={refs[armor.name]}
                        className={classes}
                        onClick={() => handleClick(armor.name)}
                    >
                        <ArmorMenuImage armor={armor} />
                    </div>
                </MouseOverPopover>
            )
        })
        const divider = (index + 1 < ARMOR_SORT_GROUPS.length) ? <div className="er__equipmentMenu__gridSectionBorder"></div> : null

        return (
            <Fragment key={sortGroup}>
                <section id={sortGroup.toString()} className="er__equipmentMenu__gridSection">
                    {armorCells}
                </section>
                {divider}
            </Fragment>
        )
    })

    useEffect(() => {
        scrollToEquipmentCell(activeName, menuHasScrolled, refs, menuRef, () => {
            dispatch(Actions.Armor.scrollMenu())
        })
    }, [dispatch, menuHasScrolled, activeName, refs, menuRef])


    return (
        <div
            ref={menuRef}
            className="er__equipmentMenu__gridColumn"
        >
            {sections}
        </div>
    )
}
