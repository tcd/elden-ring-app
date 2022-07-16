import {
    mdiScript,
    mdiFileCode,
} from "@mdi/js"

import { ErCard, StatRow } from "@app/shared"

export const EmptyTalismanDetail = (_props: unknown): JSX.Element => {

    return (
        <div className="er__equipmentDetail">
            <section className="er__equipmentDetail__section">
                <ErCard title="-" contentClassName="er__equipmentDetail__cardContent">
                    <ul className="h-100 flex-between-column">
                        <br />
                        <StatRow title="Weight" value="-" />
                    </ul>
                    <div className="er__equipmentDetail__imageColumn">
                        <div className="er__equipmentDetail__imageWrapper empty">
                            <div></div>
                        </div>
                    </div>
                </ErCard>
            </section>
            <section className="er__equipmentDetail__section">
                <ErCard title="Description" smallTitle={true} iconPath={mdiScript} margined={false} className="mx-3 my-2">
                    <p>-</p>
                </ErCard>
            </section>
            <section className="er__equipmentDetail__section">
                <ErCard title="Item Effect" smallTitle={true} iconPath={mdiFileCode} margined={false} className="mx-3 my-2">
                    <ul className="normal">
                    </ul>
                </ErCard>
            </section>
        </div>
    )
}
