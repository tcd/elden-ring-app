import {
    mdiScript,
    mdiFileCode,
} from "@mdi/js"

import { Talisman } from "@app/types"
import { equipmentEffectDescription, getImageSrc, isBlank } from "@app/util"
import { ErCard, StatRow } from "@app/shared"

export interface TalismanDetailProps {
    talisman: Talisman
}

export const TalismanDetail = ({ talisman }: TalismanDetailProps): JSX.Element => {

    if (isBlank(talisman)) {
        return null
    }

    const imageSrc = getImageSrc("Talisman", talisman.name, "256")

    const effects = talisman.effects.map((effect, i) => {
        return (
            <li key={i}>{equipmentEffectDescription(effect)}</li>
        )
    })

    return (
        <div className="equipment-detail">
            <div className="row">
                <div className="col">
                    <ErCard title={talisman.name}>
                        <div className="row">
                            <div className="col">
                                <ul className="h-100 flex-between-column">
                                    <br />
                                    <StatRow title="Weight" value={talisman.weight.toFixed(1)}/>
                                </ul>
                            </div>
                            <div className="col-1"></div>
                            <div className="col equipment-image-column">
                                <div className="equipment-image-wrapper">
                                    <img className="img-fluid" src={imageSrc} alt="talisman image" />
                                </div>
                            </div>
                        </div>
                    </ErCard>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ErCard title="Description" smallTitle={true} iconPath={mdiScript}>
                        <p>{talisman.description}</p>
                    </ErCard>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ErCard title="Item Effect" smallTitle={true} iconPath={mdiFileCode}>
                        <ul className="normal">
                            {effects}
                        </ul>
                    </ErCard>
                </div>
            </div>
        </div>
    )
}
