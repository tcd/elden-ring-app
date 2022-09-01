import type { Grid2Props as GridProps } from "@mui/material/Unstable_Grid2"

// import {
//     ThemeVars,
//     EldenRingMaterialTheme as Theme,
//     rgba,
//     boxShadow,
// } from "@app/theme"
// import {
//     invisibleContent,
//     imageFluid,
// } from "../../mixins"

/** `.er__equipmentDetail__section` */
const containerProps: GridProps = {
    container: true,
    columns: 2,
    direction: "row",
    wrap: "wrap",
    alignContent: "stretch",
    alignItems: "stretch",
    justifyContent: "stretch",
    justifyItems: "stretch",
    // sx: {
    //     // width: "100%",
    //     backgroundColor: "rebeccapurple",
    // },
}

/** `.er__equipmentDetail__detailColumn ` */
const detailColumnProps: GridProps = {
    xs: 1,
    // md: 2,
    sx: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "space-between",
    },
}

/** `.er__equipmentDetail__imageColumn` */
const imageColumnProps: GridProps = {
    xs: 1,
    // md: 2,
    sx: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "end",
        alignItems: "end",
    },
}

// =============================================================================
// All Together
// =============================================================================

export const mainSection = {
    props: {
        container:    containerProps,
        detailColumn: detailColumnProps,
        imageColumn:  imageColumnProps,
    },
}
