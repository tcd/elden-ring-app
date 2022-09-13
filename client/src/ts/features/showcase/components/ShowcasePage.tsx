import { Container } from "@mui/material"

import { ErPage } from "@app/features/common"


import {
    Buttons,
} from "./sections"

export const ShowcasePage = (_props: unknown): JSX.Element => {
    return (
        <ErPage title="Showcase" icon="mausoleum" sx={{ display: "flex", flexFlow: "column nowrap"}}>
            <Container>
                <Buttons />
            </Container>
        </ErPage>
    )
}
