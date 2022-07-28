import {
    createRef,
    useEffect,
    Fragment,
    useRef,
    CSSProperties,
    useCallback,
    useState,
} from "react"
import { useSelector, useDispatch } from "react-redux"

import { RefMap, WEAPON_SKILL_SORT_GROUPS } from "@app/types"
import { scrollToEquipmentCell } from "@app/util"
import { Actions, Selectors } from "@app/state"
import { MouseOverPopover, ErScroll, IErScroll, useLogging } from "@app/shared"
import { AffinityModal, WeaponSkillMenuImage } from "@app/features/weapons/components"

export const WeaponSkillMenuGrid = (): JSX.Element => {

    const dispatch = useDispatch()
    const log = useLogging()

    const [offset, setOffset] = useState<number>(0)

    const activeName       = useSelector(Selectors.Weapons.smithing.activeSkillName)
    const skills           = useSelector(Selectors.Weapons.smithing.skillOptions)
    const menuHasScrolled  = useSelector(Selectors.Weapons.menuHasScrolled)
    const choosingAffinity = useSelector(Selectors.Weapons.smithing.choosingAffinity)

    const menuRef = createRef<HTMLDivElement>()
    const scrollRef = createRef<IErScroll>()

    // const boxCSS: CSSProperties = {
    //     top: scrollRef.current?.getTopOffset() ?? 0,
    // }

    const boxCSS = (): CSSProperties => {
        const top =  scrollRef?.current?.topOffset
        log.info({ top })
        return {
            top,
        }
    }

    const refs: RefMap = skills.reduce((acc, value) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        acc[value.name] = useRef<HTMLDivElement>(null)
        return acc
    }, {})

    const handleClick = (name: string) => {
        dispatch(Actions.Weapons.setWeaponSkill({ name }))
    }

    const sections = WEAPON_SKILL_SORT_GROUPS.map((sortGroup, index) => {
        const sectionSkills = skills.filter(x => x.sort_group == sortGroup)
        const skillCells = sectionSkills.map((skill) => {
            const key = `weapon-skill-${skill.name}`
            let classes = "er__equipmentMenu__gridCell inactive"
            if (skill.name === activeName) {
                classes = "er__equipmentMenu__gridCell active"
            }
            return (
                <MouseOverPopover id={key} key={key} popoverContent={skill.name}>
                    <div
                        ref={refs[skill.name]}
                        className={classes}
                        onClick={() => handleClick(skill.name)}
                    >
                        <WeaponSkillMenuImage weaponSkill={skill} />
                    </div>
                </MouseOverPopover>
            )
        })

        if (skillCells.length == 0) {
            return null
        }

        const divider = (index + 1 < WEAPON_SKILL_SORT_GROUPS.length) ? <div className="er__equipmentMenu__gridSectionBorder"></div> : null

        return (
            <Fragment key={sortGroup}>
                <section className="er__equipmentMenu__gridSection">
                    {skillCells}
                </section>
                {divider}
            </Fragment>
        )
    }).filter(x => x != null)

    useEffect(() => {
        scrollToEquipmentCell(activeName, menuHasScrolled, refs, menuRef, () => {
            scrollRef.current?.adjustScrollTrack()
            // console.log({ topOffsetInCallback: scrollRef.current?.scrollTop })
            dispatch(Actions.Weapons.scrollMenu())
        })
    }, [dispatch, menuHasScrolled, activeName, refs, menuRef, scrollRef])

    return (
        <ErScroll
            ref={scrollRef}
            contentRef={menuRef}
            disableScroll={choosingAffinity}
            contentProps={{
                id: "weapon-skill-grid-menu",
                className: "er__equipmentMenu__gridColumn",
            }}
        >
            {sections}
            <AffinityModal />
            <div id="er__target" style={boxCSS()}/>
        </ErScroll>
    )
}
