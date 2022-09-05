import { createRef, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"

import { RefMap, WEAPON_SKILL_SORT_GROUPS } from "@app/types"
import { scrollToEquipmentCell, getImageSrc } from "@app/util"
import { Actions, Selectors } from "@app/state"
import { EquipmentMenu } from "@app/features/equipment-menu"

import { AffinityModal } from "../affinity-modal"

export const WeaponSkillMenuGrid = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    const activeName       = useSelector(Selectors.Weapons.smithing.activeSkillName)
    const skills           = useSelector(Selectors.Weapons.smithing.skillOptions)
    const menuHasScrolled  = useSelector(Selectors.Weapons.menuHasScrolled)
    // const choosingAffinity = useSelector(Selectors.Weapons.smithing.choosingAffinity)

    const menuRef = createRef<HTMLDivElement>()

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
            return (
                <EquipmentMenu.Cell
                    key={`weapon-skills-${skill.name}`}
                    title={skill.name}
                    active={skill.name === activeName}
                    onClick={handleClick}
                    img={getImageSrc("Weapon Skill", skill.name, "256")}
                    ref={refs[skill.name]}
                />
            )
        })

        if (skillCells.length == 0) {
            return null
        }

        return (
            <EquipmentMenu.Section
                key={sortGroup}
                id={`weapon-skill-group-${sortGroup}`}
                divider={index + 1 < WEAPON_SKILL_SORT_GROUPS.length}
            >
                {skillCells}
            </EquipmentMenu.Section>
        )
    }).filter(x => x != null)

    useEffect(() => {
        scrollToEquipmentCell(activeName, menuHasScrolled, refs, menuRef, () => {
            dispatch(Actions.Weapons.scrollMenu())
        })
    }, [dispatch, menuHasScrolled, activeName, refs, menuRef])

    return (
        <EquipmentMenu.EquipmentMenu
            id="weapon-skill-grid-menu"
            title="Melee Armaments"
            subTitle={activeName}
            ref={menuRef}
        >
            {sections}
            <AffinityModal />
        </EquipmentMenu.EquipmentMenu>
    )
}
