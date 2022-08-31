import { createRef, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"

import { ARMOR_SORT_GROUPS, RefMap } from "@app/types"
import { Actions, Selectors } from "@app/state"
import { scrollToEquipmentCell, getImageSrc } from "@app/util"
import { EquipmentMenu } from "@app/shared"

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
            return (
                <EquipmentMenu.Cell
                    key={`armor-${armor.name}`}
                    title={armor.name}
                    active={armor.name === activeName}
                    onClick={handleClick}
                    img={getImageSrc("Armor", armor.name, "256")}
                    ref={refs[armor.name]}
                />
            )
        })

        return (
            <EquipmentMenu.Section
                key={sortGroup}
                id={`armor-group-${sortGroup}`}
                divider={index + 1 < ARMOR_SORT_GROUPS.length}
            >
                {armorCells}
            </EquipmentMenu.Section>
        )
    })

    useEffect(() => {
        scrollToEquipmentCell(activeName, menuHasScrolled, refs, menuRef, () => {
            dispatch(Actions.Armor.scrollMenu())
        })
    }, [dispatch, menuHasScrolled, activeName, refs, menuRef])

    return (
        <EquipmentMenu.EquipmentMenu
            title="FIXME: armor menu title"
            description={activeName}
            ref={menuRef}
        >
            {sections}
        </EquipmentMenu.EquipmentMenu>
    )
}
