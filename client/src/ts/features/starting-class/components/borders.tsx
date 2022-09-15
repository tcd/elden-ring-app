import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"

export const BigBorder = (_props: unknown): JSX.Element => <Box sx = {ComponentSx.StartingClassPage.borders} />

export const TitleTopBorder    = (_props: unknown): JSX.Element => <Box sx = {ComponentSx.StartingClassPage.options.titleTopBorder} />
export const TitleBottomBorder = (_props: unknown): JSX.Element => <Box sx = {ComponentSx.StartingClassPage.options.titleBottomBorder} />
