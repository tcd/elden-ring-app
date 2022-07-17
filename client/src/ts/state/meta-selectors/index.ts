import { DefenseSelectors } from "./DefenseSelectors"
import { EquipLoadSelectors } from "./EquipLoadSelectors"
import { ExportSelectors } from "./ExportSelectors"
import { LevelsSelectors } from "./LevelsSelectors"
import { StatsSelectors } from "./StatsSelectors"
import { RouterSelectors } from "./RouterSelectors"

export const MetaSelectors = {
    Defense: DefenseSelectors,
    EquipLoad: EquipLoadSelectors,
    Levels: LevelsSelectors,
    Stats: StatsSelectors,
    Export: ExportSelectors,
    Router: RouterSelectors,
}
