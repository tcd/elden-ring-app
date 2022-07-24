import { Box, Typography } from "@mui/material"

import { IconNamesKey } from "@app/constants"
import { ErIcon } from "@app/shared"

export interface ErTallCardSectionProps {
    title: string
    content: JSX.Element
}

export const ErTallCardSection = (props: ErTallCardSectionProps): JSX.Element => {
    return (
        <section className="er__tallCard__section">
            <span className="er__tallCard__section--title">
                {props.title}
            </span>
            <div className="er__tallCard__section--content">
                {props.content}
            </div>
        </section>
    )
}

export interface ErTallCardProps {
    title: string
    icon: IconNamesKey
    sections?: JSX.Element[]
}

export const ErTallCard = (props: ErTallCardProps): JSX.Element => {

    const sections = props.sections.map((section, index) => {
        const key = `${props.title}--section--${index}`
        return (
            <div key={key}>
                {section}
            </div>
        )
    })

    return (
        <Box
            component="article"
            className="er__tallCard"
            sx={{
                mx: 3,
                my: 2,
            }}
        >
            <header className="er__tallCard__header">
                <div className="er__tallCard__header--icon-holder">
                    <ErIcon icon={props.icon} />
                </div>
                <Typography className="er__tallCard__header--title" component="span">
                    {props.title}
                </Typography>
            </header>
            <div className="er__tallCard__content--wrapper">
                <div className="left-border-wrapper">
                    <div className="left-border-inner vertical-gradient"></div>
                </div>
                <div className="er__tallCard__content">
                    {props.sections && sections}
                </div>
            </div>
        </Box>
    )
}
