import {
    createRef,
    useEffect,
    useRef,
} from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import type { RefMap } from "@app/types"
import { Actions, Selectors } from "@app/state"
import {
    scrollToEquipmentCell,
    meetsRequirements,
    getImageSrc,
} from "@app/util"
import {
    EquipmentMenu,
} from "@app/shared"

export const WeaponMenuGrid = (): JSX.Element => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const activeName       = useSelector(Selectors.Weapons.active.weaponName)
    const weapons          = useSelector(Selectors.Weapons.allWeapons)
    const weaponTypes      = useSelector(Selectors.Builder.api.weaponTypes)
    const menuHasScrolled  = useSelector(Selectors.Weapons.menuHasScrolled)

    const vigor        = useSelector(Selectors.Meta.Levels.corrected.vigor)
    const mind         = useSelector(Selectors.Meta.Levels.corrected.mind)
    const endurance    = useSelector(Selectors.Meta.Levels.corrected.endurance)
    const strength     = useSelector(Selectors.Meta.Levels.corrected.strength)
    const dexterity    = useSelector(Selectors.Meta.Levels.corrected.dexterity)
    const intelligence = useSelector(Selectors.Meta.Levels.corrected.intelligence)
    const faith        = useSelector(Selectors.Meta.Levels.corrected.faith)
    const arcane       = useSelector(Selectors.Meta.Levels.corrected.arcane)

    const stats = {
        vigor,
        mind,
        endurance,
        strength,
        dexterity,
        intelligence,
        faith,
        arcane,
    }

    const menuRef = createRef<HTMLDivElement>()

    const refs: RefMap = weapons.reduce((acc, value) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        acc[value.name] = useRef<HTMLDivElement>(null)   // React.MutableRefObject<HTMLDivElement>
        // acc[value.name] = createRef<HTMLDivElement>() // RefObject<HTMLDivElement>
        return acc
    }, {})

    const handleClick = (name: string) => {
        dispatch(Actions.Weapons.setActiveName({ name }))
        navigate("#detail")
    }

    const sections = weaponTypes.map((weaponType, index) => {
        const sectionWeapons = weapons.filter(x => x.weapon_type_id == weaponType.id)
        const weaponCells = sectionWeapons.map((weapon) => {
            return (
                <EquipmentMenu.Cell
                    key={`weapon-${weapon.name}`}
                    title={weapon.name}
                    active={weapon.name === activeName}
                    onClick={handleClick}
                    img={getImageSrc("Weapon", weapon.name, "256")}
                    ref={refs[weapon.name]}
                    redX={!meetsRequirements(stats, weapon)}
                />
            )
        })

        return (
            <EquipmentMenu.Section
                key={weaponType.plural_name}
                id={weaponType.plural_name}
                divider={index + 1 < weaponTypes.length}
            >
                {weaponCells}
            </EquipmentMenu.Section>
        )
    })

    useEffect(() => {
        scrollToEquipmentCell(activeName, menuHasScrolled, refs, menuRef, () => {
            dispatch(Actions.Weapons.scrollMenu())
        })
    }, [dispatch, menuHasScrolled, activeName, refs, menuRef])

    return (
        <EquipmentMenu.EquipmentMenu
            title="FIXME: weapon menu title"
            description={activeName}
        >
            {sections}
        </EquipmentMenu.EquipmentMenu>
    )
}
