import { createRef, useEffect, useRef, Fragment } from "react"
import { useSelector, useDispatch } from "react-redux"

import { TALISMAN_SORT_GROUPS, RefMap } from "@app/types"
import { scrollToEquipmentCell } from "@app/util"
import { Actions, Selectors } from "@app/state"
import { MouseOverPopover } from "@app/shared"
import { TalismanMenuImage } from "@app/features/talismans/components"

export const TalismanMenuGrid = (): JSX.Element => {

    const dispatch = useDispatch()

    const activeName      = useSelector(Selectors.Talismans.activeName)
    const talismans       = useSelector(Selectors.Builder.api.talismans)
    const menuHasScrolled = useSelector(Selectors.Talismans.menuHasScrolled)

    const menuRef = createRef<HTMLDivElement>()

    const refs: RefMap = talismans.reduce((acc, value) => {
        acc[value.name] = useRef<HTMLDivElement>(null)
        return acc
    }, {})

    const handleClick = (name: string) => {
        dispatch(Actions.Talismans.setActiveName({ name }))
    }

    const sections = TALISMAN_SORT_GROUPS.map((sortGroup, index) => {
        const sectionTalismans = talismans.filter(x => x.sort_group == sortGroup)
        const talismanCells = sectionTalismans.map((talisman) => {
            let classes = "equipment-menu-cell inactive"
            if (talisman.name === activeName) {
                classes = "equipment-menu-cell active"
            }
            return (
                <MouseOverPopover
                    id={`talisman-${talisman.name}`}
                    key={`talisman-${talisman.name}`}
                    popoverContent={talisman.name}
                >
                    <div
                        key={`talisman-${talisman.name}`}
                        ref={refs[talisman.name]}
                        className={classes}
                        onClick={() => handleClick(talisman.name)}
                    >
                        <TalismanMenuImage talisman={talisman}/>
                    </div>
                </MouseOverPopover>
            )
        })
        const divider = (index + 1 < TALISMAN_SORT_GROUPS.length) ? <div className="equipment-menu-section-border"></div> : null

        return (
            <Fragment key={sortGroup}>
                <section id={sortGroup.toString()} className="equipment-menu-section">
                    {talismanCells}
                </section>
                {divider}
            </Fragment>
        )
    })

    useEffect(() => {
        scrollToEquipmentCell(activeName, menuHasScrolled, refs, menuRef, () => {
            dispatch(Actions.Talismans.scrollMenu())
        })
    }, [menuHasScrolled, activeName, refs, menuRef])

    return (
        <div
            ref={menuRef}
            className="equipment-menu-grid-column"
        >
            {sections}
        </div>
    )
}
