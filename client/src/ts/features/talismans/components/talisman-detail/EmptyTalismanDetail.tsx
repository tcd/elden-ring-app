import {
    mdiScript,
    mdiFileCode,
} from "@mdi/js"

import { ErCard, StatRow } from "@app/shared"

export const EmptyTalismanDetail = (_props: unknown): JSX.Element => {

    return (
        <div className="er__equipmentDetail">
            <div className="row">
                <div className="col">
                    <ErCard title="-">
                        <div className="row">
                            <div className="col">
                                <ul className="h-100 flex-between-column">
                                    <br />
                                    <StatRow title="Weight" value="-" />
                                </ul>
                            </div>
                            <div className="col-1"></div>
                            <div className="col er__equipmentDetail__imageColumn">
                                <div className="er__equipmentDetail__imageWrapper empty">
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </ErCard>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ErCard title="Description" smallTitle={true} iconPath={mdiScript}>
                        <p>-</p>
                    </ErCard>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ErCard title="Item Effect" smallTitle={true} iconPath={mdiFileCode}>
                        <ul className="normal">
                        </ul>
                    </ErCard>
                </div>
            </div>
        </div>
    )
}
