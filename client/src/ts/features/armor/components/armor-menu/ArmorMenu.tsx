import { ArmorDetail, ArmorMenuGrid } from "@app/features/armor/components"

export const ArmorMenu = (_props: unknown): JSX.Element => {
    return (
        <div id="variable-menu">
            <div className="er__equipmentMenu">
                <ArmorMenuGrid />
            </div>
            <div>
                <ArmorDetail />
            </div>
        </div>
    )
}
