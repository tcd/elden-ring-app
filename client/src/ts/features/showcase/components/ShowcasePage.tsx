import { Container } from "@mui/material"

import { ErPage } from "@app/features/common"

import {
    Buttons,
    Cards,
    HorizontalRule,
} from "./sections"

export const ShowcasePage = (_props: unknown): JSX.Element => {
    return (
        <ErPage title="Showcase" icon="gestures" sx={{ display: "flex", flexFlow: "column nowrap"}}>
            <Container>
                <Buttons />
                <HorizontalRule />
                <Cards />
            </Container>
        </ErPage>
    )
}
