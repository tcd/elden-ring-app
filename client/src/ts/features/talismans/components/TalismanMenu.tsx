import { useSelector, useDispatch } from "react-redux"

import { Talisman } from "@app/types"
import { Actions, Selectors } from "@app/state"
import { CharacterStatus } from "@app/features/builder/components/right-side-panels"
import { TalismanDetail } from "./TalismanDetail"

export const TalismanMenu = (): JSX.Element => {

    const dispatch = useDispatch()

    const activeName = useSelector(Selectors.Talismans.activeName)
    const talisman = useSelector(Selectors.Talismans.active)
    const talismans = useSelector(Selectors.Builder.api.talismans)

    const handleClick = (name: string) => {
        dispatch(Actions.Talismans.setActiveName({ name }))
    }

    const cells = talismans.map((talisman) => {
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

    return (
        <div id="variable-menu">
            <div className="equipment-menu">
                <div className="equipment-menu-grid-column">
                    <section className="equipment-menu-section">
                        {cells}
                    </section>
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
                alt={talisman.display_name}
            />
        </div>
    )
}
