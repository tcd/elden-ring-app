import { Overview } from "./Overview"
import { Attributes } from "./Attributes"
import { Equipment } from "./equipment"

import { BaseStats } from "./BaseStats"
import { ResistanceCard } from "./resistance"
import { DefenseCard } from "./defense"
import { CharacterStatusA as CharacterStatus } from "./right-side-panels"

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
                    <DefenseCard />
                    <ResistanceCard />
                    {/* <CharacterStatus /> */}
                </div>
            </div>
            <ArmorModal />
            <TalismanModal />
            <WeaponModal />
        </main>
    )
}
