import { Component, CSSProperties } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

export interface MatCardProps {
    title?: string
    content?: any
    style?: CSSProperties
    className?: string
}

export class MatCard extends Component<MatCardProps> {

    public title?: string
    public style?: CSSProperties

    constructor(props) {
        super(props)
        this.title = props?.title ?? null
        this.style = props?.style ?? {}
    }

    public render(): JSX.Element {
        return (
            <Card className={this.className()} style={this.style}>
                <CardContent>
                    {this.titleElement()}
                    {this?.props?.children}
                </CardContent>
            </Card>
        )
    }

    private className(): string {
        if (this?.props?.className) {
            return ["m-3", this.props.className].join(" ")
        } else {
            return "m-3"
        }
    }

    private titleElement(): JSX.Element {
        if (!this.title) { return null }
        return (
            <Typography gutterBottom variant="h5" component="div">
                {this.title}
            </Typography>
        )
    }
}

const matCard = (props: MatCardProps): JSX.Element => {
    const title = props?.title
    const content = props?.content

    return (
        <Card className="m-3">
            <CardContent>
                {title &&
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                }
                {content && <>{content}</>}

            </CardContent>
        </Card>
    )
}
