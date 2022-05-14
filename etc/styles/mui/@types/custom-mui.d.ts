declare module "custom-mui" {
    /**
     * We need to centralize the zIndex definitions as they work like global values in the browser.
     *
     * [ZIndex](https://github.com/mui/material-ui/blob/5d4e9b112f57f139f79ea3a1c964695411cec8d6/packages/mui-material/src/styles/zIndex.js)
     */
    export interface ZIndex {
        mobileStepper: 1000
        fab:           1050
        speedDial:     1050
        appBar:        1100
        drawer:        1200
        modal:         1300
        snackbar:      1400
        tooltip:       1500
    }

    export interface Shape {
        borderRadius: number | string;
    }

}
