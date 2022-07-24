import {
    ZIndex as MuiZIndex,
} from "@mui/material/styles/zIndex"

// https://mui.com/material-ui/customization/z-index/
// https://github.com/mui/material-ui/blob/master/packages/mui-material/src/styles/zIndex.js
const defaults: MuiZIndex = {
    mobileStepper: 1_000,
    fab:           1_050,
    speedDial:     1_050,
    appBar:        1_100,
    drawer:        1_200,
    modal:         1_300,
    snackbar:      1_400,
    tooltip:       1_500,
}

export interface IErZIndex extends MuiZIndex {
    mainContent: number
    equipmentGrid: {
        cell: number
        cellBackground: number
        cellContent: number
        cellHover: number
    }
}

export const ErZIndex: IErZIndex = {
    ...defaults,
    mainContent: 500,
    equipmentGrid: {
        cell: 501,
        cellBackground: 502,
        cellContent: 503,
        cellHover: 504,
    },
}
