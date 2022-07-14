import { List, ListItem } from "@mui/material"
import { AboutPageSection } from "."

const links = {
    calculator: "https://www.reddit.com/r/Eldenring/comments/tbco46/elden_ring_weapon_calculator/",
    TarnishedSpreadsheet: "https://www.reddit.com/user/TarnishedSpreadsheet/",
    EldenRingWiki: "https://eldenring.wiki.fextralife.com/Elden+Ring+Wiki",
}

export const Credit = (): JSX.Element => {
    return (
        <AboutPageSection title="Thanks, Credit, &amp; Recognition">
            <List>
                <ListItem sx={{ display: "list-item" }}>
                    Most all weapon damage calculations are from <a href={links.TarnishedSpreadsheet}>u/TarnishedSpreadsheet&apos;s</a> fantastic <a href={links.calculator}>Elden Ring Weapon Calculator</a>.
                </ListItem>
            </List>
        </AboutPageSection>
    )
}
