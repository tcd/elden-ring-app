import {
    createRef,
    useEffect,
    Fragment,
    useRef,
} from "react"
import { useSelector, useDispatch } from "react-redux"

import { RefMap, WEAPON_SKILL_SORT_GROUPS } from "@app/types"
import { scrollToEquipmentCell } from "@app/util"
import { Actions, Selectors } from "@app/state"
import { WeaponSkillMenuImage, AffinityModal } from "@app/features/weapons/components"

export const WeaponSkillMenuGrid = (): JSX.Element => {

    const dispatch = useDispatch()

    const activeName       = useSelector(Selectors.Weapons.smithing.activeSkillName)
    const skills           = useSelector(Selectors.Weapons.smithing.skillOptions)
    const menuHasScrolled  = useSelector(Selectors.Weapons.menuHasScrolled)
    // const choosingAffinity = useSelector(Selectors.Weapons.smithing.choosingAffinity)

    const classNames = ["er__equipmentMenu__gridColumn"]

    // if (choosingAffinity) {
    //     classNames.push("no-vertical-overflow")
    // }

    const menuRef = createRef<HTMLDivElement>()

    const refs: RefMap = skills.reduce((acc, value) => {
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
                <div
                    key={key}
                    ref={refs[skill.name]}
                    className={classes}
                    onClick={() => handleClick(skill.name)}
                >
                    <WeaponSkillMenuImage weaponSkill={skill} />
                </div>
            )
        })

        const divider = (index + 1 < WEAPON_SKILL_SORT_GROUPS.length) ? <div className="er__equipmentMenu__gridSectionBorder"></div> : null

        return (
            <Fragment key={sortGroup}>
                <section className="er__equipmentMenu__gridSection">
                    {skillCells}
                </section>
                {divider}
            </Fragment>
        )
    })

    useEffect(() => {
        scrollToEquipmentCell(activeName, menuHasScrolled, refs, menuRef, () => {
            dispatch(Actions.Weapons.scrollMenu())
        })
    }, [menuHasScrolled, activeName, refs, menuRef])

    return (
        <div
            id="weapon-skill-grid-menu"
            // className={classNames.join(" ")}
            className="er__equipmentMenu__gridColumn"
            ref={menuRef}
        >
            <AffinityModal />
            {sections}
        </div>
    )
}
