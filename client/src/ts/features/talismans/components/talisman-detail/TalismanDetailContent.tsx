import {
    mdiScript,
    mdiFileCode,
} from "@mdi/js"

import { Talisman } from "@app/types"
import { equipmentEffectDescription, getImageSrc, isBlank } from "@app/util"
import { ErCard, StatRow } from "@app/shared"
import { EmptyTalismanDetail } from "."

export interface TalismanDetailContentProps {
    talisman: Talisman
}

export const TalismanDetailContent = ({ talisman }: TalismanDetailContentProps): JSX.Element => {

    if (isBlank(talisman)) {
        return <EmptyTalismanDetail />
    }

    const imageSrc = getImageSrc("Talisman", talisman.name, "256")

    const effects = talisman.effects.map((effect, i) => {
        return (
            <li key={i}>{equipmentEffectDescription(effect)}</li>
        )
    })

    return (
        <div className="er__equipmentDetail">
            <section className="er__equipmentDetail__section">
                <ErCard title={talisman.name} contentClassName="er__equipmentDetail__cardContent">
                    <ul className="h-100 flex-between-column">
                        {/* <br /> */}
                        <StatRow title="Weight" value={talisman.weight.toFixed(1)}/>
                    </ul>
                    <div className="er__equipmentDetail__imageColumn">
                        <div className="er__equipmentDetail__imageWrapper">
                            <img className="img-fluid" src={imageSrc} alt="talisman image" />
                        </div>
                    </div>
                </ErCard>
            </section>
            <section className="er__equipmentDetail__section">
                <ErCard title="Description" smallTitle={true} iconPath={mdiScript} margined={false} className="mx-3 my-2">
                    <p>{talisman.description}</p>
                </ErCard>
            </section>
            <section className="er__equipmentDetail__section">
                <ErCard title="Item Effect" smallTitle={true} iconPath={mdiFileCode} margined={false} className="mx-3 my-2">
                    <ul className="normal">
                        {effects}
                    </ul>
                </ErCard>
            </section>
        </div>
    )
}
