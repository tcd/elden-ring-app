import { Container } from "@mui/material"

import { ErPage } from "@app/features/common"

import {
    Buttons,
    Cards,
    ContextMenu,
    HorizontalRule,
    Lists,
    Modal,
    Tooltip,
    YouDied,
} from "./sections"

export const ShowcasePage = (_props: unknown): JSX.Element => {
    return (
        <ErPage title="Showcase" icon="gestures" sx={{ display: "flex", flexFlow: "column nowrap" }}>
            <Container>
                <Lists />
                <Buttons />
                <Cards />
                <HorizontalRule />
                <ContextMenu />
                <Modal />
                <Tooltip />
                <YouDied />
            </Container>
        </ErPage>
    )
}
