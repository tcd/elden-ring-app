import { createRef, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"

import { TALISMAN_SORT_GROUPS, RefMap } from "@app/types"
import { Actions, Selectors } from "@app/state"
import { scrollToEquipmentCell, getImageSrc, talismanSlotDisplayName } from "@app/util"
import { EquipmentMenu } from "@app/features/equipment-menu"

export const TalismanMenuGrid = (): JSX.Element => {

    const dispatch = useDispatch()

    const activeSlot      = useSelector(Selectors.Talismans.activeSlotId)
    const activeName      = useSelector(Selectors.Talismans.activeName)
    const talismans       = useSelector(Selectors.Builder.api.talismans)
    const menuHasScrolled = useSelector(Selectors.Talismans.menuHasScrolled)

    const menuRef = createRef<HTMLDivElement>()

    const refs: RefMap = talismans.reduce((acc, value) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        acc[value.name] = useRef<HTMLDivElement>(null)
        return acc
    }, {})

    const handleClick = (name: string) => {
        dispatch(Actions.Talismans.setActiveName({ name }))
    }

    const sections = TALISMAN_SORT_GROUPS.map((sortGroup, index) => {
        const sectionTalismans = talismans.filter(x => x.sort_group == sortGroup)
        const talismanCells = sectionTalismans.map((talisman) => {
            return (
                <EquipmentMenu.Cell
                    key={`talisman-${talisman.name}`}
                    title={talisman.name}
                    active={talisman.name === activeName}
                    onClick={handleClick}
                    img={getImageSrc("Talisman", talisman.name, "256")}
                    ref={refs[talisman.name]}
                />
            )
        })

        return (
            <EquipmentMenu.Section
                key={sortGroup}
                id={`talisman-group-${sortGroup}`}
                divider={index + 1 < TALISMAN_SORT_GROUPS.length}
            >
                {talismanCells}
            </EquipmentMenu.Section>
        )
    })

    useEffect(() => {
        scrollToEquipmentCell(activeName, menuHasScrolled, refs, menuRef, () => {
            dispatch(Actions.Talismans.scrollMenu())
        })
    }, [dispatch, menuHasScrolled, activeName, refs, menuRef])

    return (
        <EquipmentMenu.EquipmentMenu
            title={talismanSlotDisplayName(activeSlot)}
            subTitle={activeName ?? "-"}
            ref={menuRef}
        >
            {sections}
        </EquipmentMenu.EquipmentMenu>
    )
}
