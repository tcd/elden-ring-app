import type { SxProps } from "@mui/material"

import { ZWSP } from "@app/theme/variables/zwsp"

/**
 * Used to make empty elements take up space.
 */
export const invisibleContent: SxProps = {
    "&::after": {
        content: ZWSP,
        visibility: "hidden",
    },
}
