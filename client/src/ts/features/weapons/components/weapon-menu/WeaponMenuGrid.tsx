import {
    createRef,
    useEffect,
    Fragment,
    useRef,
} from "react"
import { useSelector, useDispatch } from "react-redux"

import { RefMap } from "@app/types"
import { Actions, Selectors } from "@app/state"
import { scrollToEquipmentCell } from "@app/util"
import { WeaponMenuImage } from "@app/features/weapons/components"

export const WeaponMenuGrid = (): JSX.Element => {

    const dispatch = useDispatch()

    const activeWeaponName = useSelector(Selectors.Weapons.active.weaponName)
    const weapons          = useSelector(Selectors.Weapons.allWeapons)
    const weaponTypes      = useSelector(Selectors.Builder.api.weaponTypes)
    const hasMenuScrolled  = useSelector(Selectors.Weapons.hasMenuScrolled)

    const vigor        = useSelector(Selectors.Builder.attribute.vigor)
    const mind         = useSelector(Selectors.Builder.attribute.mind)
    const endurance    = useSelector(Selectors.Builder.attribute.endurance)
    const strength     = useSelector(Selectors.Builder.attribute.strength)
    const dexterity    = useSelector(Selectors.Builder.attribute.dexterity)
    const intelligence = useSelector(Selectors.Builder.attribute.intelligence)
    const faith        = useSelector(Selectors.Builder.attribute.faith)
    const arcane       = useSelector(Selectors.Builder.attribute.arcane)

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
        acc[value.name] = useRef<HTMLDivElement>(null)   // React.MutableRefObject<HTMLDivElement>
        // acc[value.name] = createRef<HTMLDivElement>() // RefObject<HTMLDivElement>
        return acc
    }, {})

    const handleClick = (name: string) => {
        dispatch(Actions.Weapons.setActiveName({ name }))
    }

    const sections = weaponTypes.map((weaponType, index) => {
        const sectionWeapons = weapons.filter(x => x.weapon_type_id == weaponType.id)
        const weaponCells = sectionWeapons.map((weapon) => {
            let classes = "equipment-menu-cell inactive"
            if (weapon.name === activeWeaponName) {
                classes = "equipment-menu-cell active"
            }
            return (
                <div
                    key={`weapon-${weapon.name}`}
                    ref={refs[weapon.name]}
                    className={classes}
                    onClick={() => handleClick(weapon.name)}
                >
                    <WeaponMenuImage weapon={weapon} stats={stats} />
                </div>
            )
        })

        const divider = (index + 1 < weaponTypes.length) ? <div className="equipment-menu-section-border"></div> : null

        return (
            <Fragment key={weaponType.plural_name}>
                <section
                    id={weaponType.plural_name}
                    className="equipment-menu-section"
                >
                    {weaponCells}
                </section>
                {divider}
            </Fragment>
        )
    })

    useEffect(() => {
        scrollToEquipmentCell(activeWeaponName, hasMenuScrolled, refs, menuRef, () => {
            dispatch(Actions.Weapons.scrollMenu())
        })
    }, [hasMenuScrolled, activeWeaponName, refs, menuRef])

    return (
        <div
            className="equipment-menu-grid-column"
            ref={menuRef}
        >
            {sections}
        </div>
    )
}
