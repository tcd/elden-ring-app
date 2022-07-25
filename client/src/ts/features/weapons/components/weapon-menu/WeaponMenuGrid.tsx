import {
    createRef,
    useEffect,
    Fragment,
    useRef,
} from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { RefMap } from "@app/types"
import { scrollToEquipmentCell } from "@app/util"
import { Actions, Selectors } from "@app/state"
import { MouseOverPopover, ErScroll } from "@app/shared"
import { WeaponMenuImage } from "@app/features/weapons/components"

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
    const scrollRef = createRef<HTMLDivElement>()

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
            const key = `weapon-${weapon.name}`
            let classes = "er__equipmentMenu__gridCell inactive"
            if (weapon.name === activeName) {
                classes = "er__equipmentMenu__gridCell active"
            }
            return (
                <MouseOverPopover id={key} key={key} popoverContent={weapon.name}>
                    <div
                        ref={refs[weapon.name]}
                        className={classes}
                        onClick={() => handleClick(weapon.name)}
                    >
                        <WeaponMenuImage weapon={weapon} attributes={stats} />
                    </div>
                </MouseOverPopover>
            )
        })

        const divider = (index + 1 < weaponTypes.length) ? <div className="er__equipmentMenu__gridSectionBorder"></div> : null

        return (
            <Fragment key={weaponType.plural_name}>
                <section
                    id={weaponType.plural_name}
                    className="er__equipmentMenu__gridSection"
                >
                    {weaponCells}
                </section>
                {divider}
            </Fragment>
        )
    })

    useEffect(() => {
        scrollToEquipmentCell(activeName, menuHasScrolled, refs, menuRef, () => {
            // @ts-ignore: next-line
            scrollRef.current.adjustScrollTrack()
            dispatch(Actions.Weapons.scrollMenu())
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
