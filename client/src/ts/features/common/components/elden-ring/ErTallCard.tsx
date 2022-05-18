// import { Component, CSSProperties } from "react"
// import Typography from "@mui/material/Typography"

import { MdiIcon } from "@app/shared"
// import { isBlank } from "@app/util"

export interface ErTallCardSectionProps {
    title: string
    content: JSX.Element
}

export const ErTallCardSection = (props: ErTallCardSectionProps): JSX.Element => {
    return (
        <section className="er__tall-card__section">
            <span className="er__tall-card__section--title">
                {props.title}
            </span>
            <div className="er__tall-card__section--content">
                {props.content}
            </div>
        </section>
    )
}

export interface ErTallCardProps {
    title: string
    /** SVG path content */
    iconPath: string
    sections?: JSX.Element[]
}

export const ErTallCard = (props: ErTallCardProps): JSX.Element => {
    return (
        <article className="er__tall-card">
            <header className="er__tall-card__header">
                <div className="er__tall-card__header--icon-holder">
                    <MdiIcon path={props.iconPath} />
                </div>
                <span className="er__tall-card__header--title">
                    {props.title}
                </span>
            </header>
            <div className="er__tall-card__content--wrapper">
                <div className="left-border-wrapper">
                    <div className="left-border-inner vertical-gradient"></div>
                </div>
                <div className="content">
                    {props.sections && props.sections.map(section => section)}
                </div>
            </div>
        </article>
    )
}