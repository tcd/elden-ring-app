import { Button } from "@mui/material"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"

interface Props {
    link: string
}

export const ExternalLink = ({ link }: Props): JSX.Element => {
    return (
        <Button
            // size="small"
            color="primary"
            target="_blank"
            rel="noopener noreferrer"
            href={link}
        >
            <OpenInNewIcon />
        </Button>
    )
}
