import { Page } from "@app/shared"
import { CharacterStatus } from "@app/features/builder"
import { EquipmentGrid } from "./equipment-grid"
import { EquipmentPageDetail } from "./EquipmentPageDetail"

export const EquipmentPage = (_props: unknown): JSX.Element => {
    return (
        <Page pageName="equipment">
            <div className="row">
                <div className="col">
                    <EquipmentGrid />
                </div>
                <div className="col">
                    <EquipmentPageDetail />
                </div>
                <div className="col">
                    <CharacterStatus />
                </div>
            </div>
        </Page>
    )
}
