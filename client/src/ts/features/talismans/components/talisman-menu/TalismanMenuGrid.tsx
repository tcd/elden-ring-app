import { createRef, useEffect, useRef, Fragment } from "react"
import { useSelector, useDispatch } from "react-redux"

import { TALISMAN_SORT_GROUPS, RefMap } from "@app/types"
import { scrollToEquipmentCell } from "@app/util"
import { Actions, Selectors } from "@app/state"
import { MouseOverPopover, ErScroll, IErScroll } from "@app/shared"
import { TalismanMenuImage } from "@app/features/talismans/components"

export const TalismanMenuGrid = (): JSX.Element => {

    const dispatch = useDispatch()

    const activeName      = useSelector(Selectors.Talismans.activeName)
    const talismans       = useSelector(Selectors.Builder.api.talismans)
    const menuHasScrolled = useSelector(Selectors.Talismans.menuHasScrolled)

    const scrollRef = createRef<IErScroll>()
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
            const key = `talisman-${talisman.name}`
            let classes = "er__equipmentMenu__gridCell inactive"
            if (talisman.name === activeName) {
                classes = "er__equipmentMenu__gridCell active"
            }
            return (
                <MouseOverPopover id={key} key={key} popoverContent={talisman.name} >
                    <div
                        ref={refs[talisman.name]}
                        className={classes}
                        onClick={() => handleClick(talisman.name)}
                    >
                        <TalismanMenuImage talisman={talisman}/>
                    </div>
                </MouseOverPopover>
            )
        })
        const divider = (index + 1 < TALISMAN_SORT_GROUPS.length) ? <div className="er__equipmentMenu__gridSectionBorder"></div> : null

        return (
            <Fragment key={sortGroup}>
                <section id={sortGroup.toString()} className="er__equipmentMenu__gridSection">
                    {talismanCells}
                </section>
                {divider}
            </Fragment>
        )
    })

    useEffect(() => {
        scrollToEquipmentCell(activeName, menuHasScrolled, refs, menuRef, () => {
            scrollRef.current?.adjustScrollTrack()
            dispatch(Actions.Talismans.scrollMenu())
        })
    }, [dispatch, menuHasScrolled, activeName, refs, menuRef, scrollRef])

    return (
        <ErScroll
            ref={scrollRef}
            contentRef={menuRef}
            contentProps={{
                className: "er__equipmentMenu__gridColumn",
            }}
        >
            {sections}
        </ErScroll>
    )
}
