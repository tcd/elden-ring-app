import { Button } from "@mui/material"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"

interface ExternalLinkProps {
    link: string
    size?: "small" | "medium" | "large"
}

const defaultProps: Partial<ExternalLinkProps> = {
    size: "medium",
}

export const ExternalLink = (props: ExternalLinkProps): JSX.Element => {

    props = {
        ...defaultProps,
        ...props,
    }

    return (
        <Button
            size={props.size}
            color="primary"
            target="_blank"
            rel="noopener noreferrer"
            href={props.link}
        >
            <OpenInNewIcon />
        </Button>
    )
}
