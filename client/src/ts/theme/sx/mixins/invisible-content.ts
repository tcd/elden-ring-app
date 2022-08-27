import type { SxProps } from "@mui/material"

/**
 * Used to make empty elements take up space.
 */
export const invisibleContent: SxProps = {
    "&::after": {
        content: `"\\200b"`,
        visibility: "hidden",
    },
}
