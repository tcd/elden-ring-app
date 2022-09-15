import { createAsyncThunk } from "@reduxjs/toolkit"

import type {
    EquipmentSlotId,
    NavigationKey,
    SetActiveEquipmentSlotPayload,
} from "@app/types"
import type { RootState } from "@app/state"
import { Selectors } from "@app/state"
import { FeatureKeys } from "@app/constants"
import { EQUIPMENT_SLOT_TYPES } from "@app/util"

const actionName = `${FeatureKeys.Equipment}/navigate`

export const navigate = createAsyncThunk<SetActiveEquipmentSlotPayload, NavigationKey>(actionName, async (key: NavigationKey, thunkApi) => {
    try {
        const rootState = thunkApi.getState() as RootState
        const activeSlotId = Selectors.Equipment.activeSlotId(rootState)
        const newSlotId = WRAPPING_NAVIGATIONS[activeSlotId][key]
        const equipmentType = EQUIPMENT_SLOT_TYPES[newSlotId]
        return { id: newSlotId, type: equipmentType }
    } catch (error) {
        return thunkApi.rejectWithValue("unable to navigate")
    }
})

// -----------------------------------------------------------------------------
// Don't judge me.
// -----------------------------------------------------------------------------

// B2.ArrowDown & Q5.ArrowUp could be different
const WRAPPING_NAVIGATIONS: Record<EquipmentSlotId, Record<NavigationKey, EquipmentSlotId>> = {
    R1:    { "ArrowLeft": "Q10",   "ArrowRight": "R2",    "ArrowUp": "Q6",    "ArrowDown": "L1"    },
    R2:    { "ArrowLeft": "R1",    "ArrowRight": "R3",    "ArrowUp": "Q7",    "ArrowDown": "L2"    },
    R3:    { "ArrowLeft": "R2",    "ArrowRight": "A1",    "ArrowUp": "Q8",    "ArrowDown": "L3"    },
    A1:    { "ArrowLeft": "R3",    "ArrowRight": "A2",    "ArrowUp": "Q9",    "ArrowDown": "B1"    },
    A2:    { "ArrowLeft": "A1",    "ArrowRight": "L1",    "ArrowUp": "Q10",   "ArrowDown": "B2"    },

    L1:    { "ArrowLeft": "A2",    "ArrowRight": "L2",    "ArrowUp": "R1",    "ArrowDown": "Head"  },
    L2:    { "ArrowLeft": "L1",    "ArrowRight": "L3",    "ArrowUp": "R2",    "ArrowDown": "Chest" },
    L3:    { "ArrowLeft": "L2",    "ArrowRight": "B1",    "ArrowUp": "R3",    "ArrowDown": "Arms"  },
    B1:    { "ArrowLeft": "L3",    "ArrowRight": "B2",    "ArrowUp": "A1",    "ArrowDown": "Legs"  },
    B2:    { "ArrowLeft": "B1",    "ArrowRight": "Head",  "ArrowUp": "A2",    "ArrowDown": "Q5"    },

    Head:  { "ArrowLeft": "B2",    "ArrowRight": "Chest", "ArrowUp": "L1",    "ArrowDown": "T1"    },
    Chest: { "ArrowLeft": "Head",  "ArrowRight": "Arms",  "ArrowUp": "L2",    "ArrowDown": "T2"    },
    Arms:  { "ArrowLeft": "Chest", "ArrowRight": "Legs",  "ArrowUp": "L3",    "ArrowDown": "T3"    },
    Legs:  { "ArrowLeft": "Arms",  "ArrowRight": "T1",    "ArrowUp": "B1",    "ArrowDown": "T4"    },

    T1:    { "ArrowLeft": "Legs",  "ArrowRight": "T2",    "ArrowUp": "Head",  "ArrowDown": "Q1"    },
    T2:    { "ArrowLeft": "T1",    "ArrowRight": "T3",    "ArrowUp": "Chest", "ArrowDown": "Q2"    },
    T3:    { "ArrowLeft": "T2",    "ArrowRight": "T4",    "ArrowUp": "Arms",  "ArrowDown": "Q3"    },
    T4:    { "ArrowLeft": "T3",    "ArrowRight": "Q1",    "ArrowUp": "Legs",  "ArrowDown": "Q4"    },

    Q1:    { "ArrowLeft": "T4",    "ArrowRight": "Q2",    "ArrowUp": "T1",    "ArrowDown": "Q6"    },
    Q2:    { "ArrowLeft": "Q1",    "ArrowRight": "Q3",    "ArrowUp": "T2",    "ArrowDown": "Q7"    },
    Q3:    { "ArrowLeft": "Q2",    "ArrowRight": "Q4",    "ArrowUp": "T3",    "ArrowDown": "Q8"    },
    Q4:    { "ArrowLeft": "Q3",    "ArrowRight": "Q5",    "ArrowUp": "T4",    "ArrowDown": "Q9"    },
    Q5:    { "ArrowLeft": "Q4",    "ArrowRight": "Q6",    "ArrowUp": "B2",    "ArrowDown": "Q10"   },

    Q6:    { "ArrowLeft": "Q5",    "ArrowRight": "Q7",    "ArrowUp": "Q1",    "ArrowDown": "R1"    },
    Q7:    { "ArrowLeft": "Q6",    "ArrowRight": "Q8",    "ArrowUp": "Q2",    "ArrowDown": "R2"    },
    Q8:    { "ArrowLeft": "Q7",    "ArrowRight": "Q9",    "ArrowUp": "Q3",    "ArrowDown": "R3"    },
    Q9:    { "ArrowLeft": "Q8",    "ArrowRight": "Q10",   "ArrowUp": "Q4",    "ArrowDown": "A1"    },
    Q10:   { "ArrowLeft": "Q9",    "ArrowRight": "R1",    "ArrowUp": "Q5",    "ArrowDown": "A2"    },
}

// B2.ArrowDown & Q5.ArrowUp could be different
const NAVIGATIONS: Record<EquipmentSlotId, Record<NavigationKey, EquipmentSlotId>> = {
    R1:    { "ArrowLeft": "A2",    "ArrowRight": "R2",    "ArrowUp": "Q6",    "ArrowDown": "L1"    },
    R2:    { "ArrowLeft": "R1",    "ArrowRight": "R3",    "ArrowUp": "Q7",    "ArrowDown": "L2"    },
    R3:    { "ArrowLeft": "R2",    "ArrowRight": "A1",    "ArrowUp": "Q8",    "ArrowDown": "L3"    },
    A1:    { "ArrowLeft": "R3",    "ArrowRight": "A2",    "ArrowUp": "Q9",    "ArrowDown": "B1"    },
    A2:    { "ArrowLeft": "A1",    "ArrowRight": "R1",    "ArrowUp": "Q10",   "ArrowDown": "B2"    },

    L1:    { "ArrowLeft": "B2",    "ArrowRight": "L2",    "ArrowUp": "R1",    "ArrowDown": "Head"  },
    L2:    { "ArrowLeft": "L1",    "ArrowRight": "L3",    "ArrowUp": "R2",    "ArrowDown": "Chest" },
    L3:    { "ArrowLeft": "L2",    "ArrowRight": "B1",    "ArrowUp": "R3",    "ArrowDown": "Arms"  },
    B1:    { "ArrowLeft": "L3",    "ArrowRight": "B2",    "ArrowUp": "A1",    "ArrowDown": "Legs"  },
    B2:    { "ArrowLeft": "B1",    "ArrowRight": "L1",    "ArrowUp": "A2",    "ArrowDown": "Q5"    },

    Head:  { "ArrowLeft": "Legs",  "ArrowRight": "Chest", "ArrowUp": "L1",    "ArrowDown": "T1"    },
    Chest: { "ArrowLeft": "Head",  "ArrowRight": "Arms",  "ArrowUp": "L2",    "ArrowDown": "T2"    },
    Arms:  { "ArrowLeft": "Chest", "ArrowRight": "Legs",  "ArrowUp": "L3",    "ArrowDown": "T3"    },
    Legs:  { "ArrowLeft": "Arms",  "ArrowRight": "Head",  "ArrowUp": "B1",    "ArrowDown": "T4"    },

    T1:    { "ArrowLeft": "T4",    "ArrowRight": "T2",    "ArrowUp": "Head",  "ArrowDown": "Q1"    },
    T2:    { "ArrowLeft": "T1",    "ArrowRight": "T3",    "ArrowUp": "Chest", "ArrowDown": "Q2"    },
    T3:    { "ArrowLeft": "T2",    "ArrowRight": "T4",    "ArrowUp": "Arms",  "ArrowDown": "Q3"    },
    T4:    { "ArrowLeft": "T3",    "ArrowRight": "T1",    "ArrowUp": "Legs",  "ArrowDown": "Q4"    },

    Q1:    { "ArrowLeft": "Q5",    "ArrowRight": "Q2",    "ArrowUp": "T1",    "ArrowDown": "Q6"    },
    Q2:    { "ArrowLeft": "Q1",    "ArrowRight": "Q3",    "ArrowUp": "T2",    "ArrowDown": "Q7"    },
    Q3:    { "ArrowLeft": "Q2",    "ArrowRight": "Q4",    "ArrowUp": "T3",    "ArrowDown": "Q8"    },
    Q4:    { "ArrowLeft": "Q3",    "ArrowRight": "Q5",    "ArrowUp": "T4",    "ArrowDown": "Q9"    },
    Q5:    { "ArrowLeft": "Q4",    "ArrowRight": "Q1",    "ArrowUp": "B2",    "ArrowDown": "Q10"   },

    Q6:    { "ArrowLeft": "Q10",   "ArrowRight": "Q7",    "ArrowUp": "Q1",    "ArrowDown": "R1"    },
    Q7:    { "ArrowLeft": "Q6",    "ArrowRight": "Q8",    "ArrowUp": "Q2",    "ArrowDown": "R2"    },
    Q8:    { "ArrowLeft": "Q7",    "ArrowRight": "Q9",    "ArrowUp": "Q3",    "ArrowDown": "R3"    },
    Q9:    { "ArrowLeft": "Q8",    "ArrowRight": "Q10",   "ArrowUp": "Q4",    "ArrowDown": "A1"    },
    Q10:   { "ArrowLeft": "Q9",    "ArrowRight": "Q6",    "ArrowUp": "Q5",    "ArrowDown": "A2"    },
}
