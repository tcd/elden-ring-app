import { Overview } from "./Overview"
import { Attributes } from "./Attributes"
import { BaseStats } from "./BaseStats"
import { Resistance } from "./Resistance"
import { Equipment } from "./equipment"
import { Defense } from "./Defense"

import {
    ArmorModal,
    TalismanModal,
    WeaponModal,
} from "./modals"

export const BuilderPage = (): JSX.Element => {
    return (
        <main id="builder-root" className="container-fluid">
            <div id="builder-body" className="row">
                <div className="builder-column">
                    <Overview />
                    <Attributes />
                </div>
                <div className="builder-column">
                    <Equipment />
                </div>
                <div className="builder-column">
                    <BaseStats />
                    <Defense />
                    <Resistance />
                </div>
            </div>
            <ArmorModal />
            <TalismanModal />
            <WeaponModal />
        </main>
    )
}
