import type { BoxProps } from "@mui/material"
import { Box } from "@mui/material"

export type MuiImgProps = Omit<BoxProps<"img">, "component">

/** HTML `<img />` component wrapper. */
export const MuiImg = (props: MuiImgProps): JSX.Element => <Box component="img" {...props} />
