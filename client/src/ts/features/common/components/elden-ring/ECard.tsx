import { Component, CSSProperties } from "react"
import Typography from "@mui/material/Typography"

import { MdiIcon } from "@app/shared"
import { isBlank } from "@app/util"

export interface ECardProps {
    title: string
    /** SVG path content */
    iconPath?: string
    content?: any
    className?: string
    style?: CSSProperties
    smallTitle?: boolean
}

export class ECard extends Component<ECardProps> {

    constructor(props: ECardProps) {
        super(props)
    }

    private style(): CSSProperties {
        if (this.props?.style) {
            return this.props.style
        }
        return {}
    }

    private className(): string {
        return "er__card m-3" + (this.props?.className ?? "")
    }

    private headerClassName(): string {
        if (this.props.smallTitle == true) {
            return "small-title"
        }
        if (isBlank(this.props.iconPath)) {
            return "no-icon"
        } else {
            return "with-icon"
        }
    }

    private iconElement(): JSX.Element {
        if (isBlank(this.props.iconPath)) {
            return null
        }
        return (<MdiIcon path={this.props.iconPath} />)
    }

    public render(): JSX.Element {
        return (
            <article className={this.className()} style={this.style()}>
                <header className={this.headerClassName()}>
                    {this.iconElement()}
                    <Typography className="er__card__title" component="span">
                        {this.props.title}
                    </Typography>
                </header>
                <section>
                    <div className="left-border-wrapper">
                        <div className="left-border-inner vertical-gradient"></div>
                    </div>
                    <div className="content">
                        {this?.props?.children}
                    </div>
                </section>
            </article>
        )
    }
}
