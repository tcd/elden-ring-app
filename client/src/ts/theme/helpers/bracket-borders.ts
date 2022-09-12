import type { SxProps } from "@mui/material"

/**
 * ## See:
 *
 * - [Stack Overflow - Square brackets with CSS](https://stackoverflow.com/a/41807110/7687024)
 */
export const bracketBorders = (color: string , size: string): SxProps => ({
    backgroundImage: Array(4).fill(`linear-gradient(${color}, ${color})`).join(", "),
    backgroundRepeat: "no-repeat",
    backgroundSize: `2px ${size}`,
    backgroundPosition: ["top left", "top right", "bottom left", "bottom right"].join(", "),
    border: `solid ${color}`,
    borderWidth: `0 ${size}`,
})
