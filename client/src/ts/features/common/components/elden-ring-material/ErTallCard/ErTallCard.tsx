import { Fragment } from "react"
import { Box } from "@mui/material"

import { ErIcon, ErCardBorder } from "@app/shared"
import { ComponentSx } from "@app/theme"
import type { ErTallCardProps } from "./types"

export const ErTallCard = (props: ErTallCardProps): JSX.Element => {

    const $sections = props.sections.map((section, index) => (
        <Fragment key={`${props.title}--section--${index}`}>
            {section}
        </Fragment>
    ))

    return (
        <Box component="article" sx={ComponentSx.ErTallCard.root}>
            <Box component="header" sx={ComponentSx.ErTallCard.header.root}>
                <Box className="er__tallCard__header--icon-holder">
                    <ErIcon icon={props.icon} />
                </Box>
                <Box component="span" sx={ComponentSx.ErTallCard.header.title}>
                    {props.title}
                </Box>
            </Box>
            <Box sx={ComponentSx.ErTallCard.content.wrapper}>
                <ErCardBorder />
                <Box sx={ComponentSx.ErTallCard.content.content}>
                    {props.sections && $sections}
                </Box>
            </Box>
        </Box>
    )
}
