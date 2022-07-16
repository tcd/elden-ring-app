import { Page } from "@app/shared"
import { CharacterStatus } from "@app/features/builder"
import { EquipmentGrid } from "./equipment-grid"
import { EquipmentPageDetail } from "./EquipmentPageDetail"

export const EquipmentPage = (_props: unknown): JSX.Element => {
    return (
        <Page pageName="equipment">
            <div className="row mx-0">
                <div className="col m-0 p-0 sm-4">
                    <EquipmentGrid />
                </div>
                <div className="col m-0 p-0 sm-4">
                    <EquipmentPageDetail />
                </div>
                <div className="col m-0 p-0 sm-4">
                    <CharacterStatus />
                </div>
            </div>
        </Page>
    )
}
