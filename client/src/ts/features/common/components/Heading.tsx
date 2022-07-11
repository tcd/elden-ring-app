import { CSSProperties } from "React"
import Typography from "@mui/material/Typography"

export interface HeadingProps {
    title: string
    children?: JSX.Element | JSX.Element[] | never[]
    style?: CSSProperties
}

const defaultProps: Partial<HeadingProps> = {
    children: null,
    style: {},
}

export const Heading = (props: HeadingProps): JSX.Element => {
    props = {
        ...defaultProps,
        ...props,
    }

    const {
        title,
        children,
        style,
    } = props

    if (!title) {
        return null
    }

    return (

        <div className="er__heading row" style={style}>
            <div className="col">
                <div className="d-flex justify-content-between">
                    <Typography variant="h4" gutterBottom component="div">
                        {props.title}
                    </Typography>
                    <div className="row">
                        <div className="col">
                            <div className="h-100 d-flex align-items-end justify-content-center">
                                {children && children}
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="er__hr mb-5" />
            </div>
        </div>
    )
}
