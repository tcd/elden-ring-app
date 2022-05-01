import {
    mdiScript,
    mdiFileCode,
} from "@mdi/js"

import { Talisman } from "@app/types"
import { equipmentEffectDescription, isBlank } from "@app/util"
import { ECard } from "@app/shared"

export interface TalismanDetailProps {
    talisman: Talisman
}

export const TalismanDetail = ({ talisman }: TalismanDetailProps): JSX.Element => {

    if (isBlank(talisman)) {
        return null
    }

    const effects = talisman.effects.map((effect, i) => {
        return (
            <li key={i}>{equipmentEffectDescription(effect)}</li>
        )
    })

    return (
        <div className="weapon-detail">
            <div className="row">
                <div className="col">
                    <ECard title={talisman.name}>
                        <div className="row">
                            <div className="col">
                                <ul className="h-100 flex-between-column">
                                    <br />
                                    <li className="stat-row">
                                        <span>Weight</span>
                                        <span>{talisman.weight.toFixed(1)}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-1"></div>
                            <div className="col weapon-image-column">
                                <div className="weapon-image-wrapper">
                                    <img className="img-fluid" src={talisman.image_url} alt="weapon" />
                                </div>
                            </div>
                        </div>
                    </ECard>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ECard title="Description" smallTitle={true} iconPath={mdiScript}>
                        <p>{talisman.description}</p>
                    </ECard>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ECard title="Item Effect" smallTitle={true} iconPath={mdiFileCode}>
                        <ul className="normal">
                            {effects}
                        </ul>
                    </ECard>
                </div>
            </div>
        </div>
    )
}
