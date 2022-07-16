import { Page } from "@app/shared"
import { EquipmentGrid } from "./equipment-grid"
import { CharacterStatus } from "@app/features/builder"

export const EquipmentPage = (_props: unknown): JSX.Element => {
    return (
        <Page pageName="equipment">
            <div className="row">
                <div className="col">
                    <EquipmentGrid />
                </div>
                <div className="col">
                </div>
                <div className="col">
                    <CharacterStatus />
                </div>
            </div>
        </Page>
    )
}
