import { List, ListItem } from "@mui/material"

import { Anchor } from "@app/features/common"
import { AboutPageSection } from "."

const links = {
    calculator: "https://www.reddit.com/r/Eldenring/comments/tbco46/elden_ring_weapon_calculator/",
    tarnished: "https://www.reddit.com/user/TarnishedSpreadsheet/",
    fextralife: "https://eldenring.wiki.fextralife.com/Elden+Ring+Wiki",
}

export const Credit = (): JSX.Element => {
    return (
        <AboutPageSection title="Thanks, Credit, &amp; Recognition">
            <List>
                <ListItem sx={{ display: "list-item" }}>
                    Most all weapon damage calculations are from <Anchor href={links.tarnished} content="u/TarnishedSpreadsheet's" /> fantastic <Anchor href={links.calculator} content="Elden Ring Weapon Calculator" />.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                    Most defensive calculations are from the Fextralife <Anchor href={links.fextralife} content="Elden Ring Wiki" />.
                </ListItem>
            </List>
        </AboutPageSection>
    )
}
