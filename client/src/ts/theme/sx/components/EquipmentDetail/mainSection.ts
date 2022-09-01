import type { Grid2Props as GridProps } from "@mui/material/Unstable_Grid2"

const columns: GridProps = {
    xs: 2,
    md: 1,
}

// =============================================================================

/** `.er__equipmentDetail__section` */
const containerProps: GridProps = {
    container: true,
    columns: 2,
    direction: "row",
    // alignContent: "stretch",
    // alignItems: "stretch",
    // justifyContent: "stretch",
    // justifyItems: "stretch",
    sx: {
        flexWrap: {
            xs: "wrap-reverse",
            md: "wrap",
        },
    },
}

/** `.er__equipmentDetail__detailColumn ` */
const detailColumnProps: GridProps = {
    ...columns,
    sx: {
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "space-between",
    },
}

/** `.er__equipmentDetail__imageColumn` */
const imageColumnProps: GridProps = {
    ...columns,
    sx: {
        display: "flex",
        flexFlow: "row nowrap",
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
