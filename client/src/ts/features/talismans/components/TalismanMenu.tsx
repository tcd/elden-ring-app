import { useSelector, useDispatch } from "react-redux"

import { Talisman, TALISMAN_SORT_GROUPS } from "@app/types"
import { Actions, Selectors } from "@app/state"
import { TalismanDetail } from "./TalismanDetail"
import { Fragment } from "react"

export const TalismanMenu = (): JSX.Element => {

    const dispatch = useDispatch()

    const activeName = useSelector(Selectors.Talismans.activeName)
    const talisman   = useSelector(Selectors.Talismans.active)
    const talismans  = useSelector(Selectors.Builder.api.talismans)

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
                <div
                    key={`talisman-${talisman.name}`}
                    className={classes}
                    onClick={() => handleClick(talisman.name)}
                >
                    {talismanImage(talisman)}
                </div>
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

    return (
        <div id="variable-menu">
            <div className="equipment-menu">
                <div className="equipment-menu-grid-column">
                    {sections}
                </div>
            </div>
            <div>
                <TalismanDetail talisman={talisman} />
            </div>
        </div>
    )
}


const talismanImage = (talisman: Talisman) => {
    return (
        <div className="equipment-menu-image-wrapper">
            <img
                className="img-fluid"
                src={talisman.image_url}
                alt={talisman.name}
            />
        </div>
    )
}
