import type { Grid2Props as GridProps } from "@mui/material/Unstable_Grid2"

import type { ErCardProps } from "@app/shared"

export const containerProps: GridProps = {
    container: true,
    direction: "row",
    columns: 2,
}

export const itemProps: GridProps = {
    xs: 2,
    md: 1,
}

export const cardProps: Partial<ErCardProps> = {
    smallTitle: true,
    sx: {
        // mx: 3,
        // my: 2,
        // width: "100%",
    },
}
