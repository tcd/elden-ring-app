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
    /** SVG path content */
    iconPath: string
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
        <article className="er__tallCard">
            <header className="er__tallCard__header">
                <div className="er__tallCard__header--icon-holder">
                    <MdiIcon path={props.iconPath} />
                </div>
                <span className="er__tallCard__header--title">
                    {props.title}
                </span>
            </header>
            <div className="er__tallCard__content--wrapper">
                <div className="left-border-wrapper">
                    <div className="left-border-inner vertical-gradient"></div>
                </div>
                <div className="er__tallCard__content">
                    {props.sections && sections}
                </div>
            </div>
        </article>
    )
}
