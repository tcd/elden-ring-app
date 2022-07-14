import { Page } from "@app/shared"
import { Container, List, ListItem, Typography } from "@mui/material"
import { Related } from "./sections"

const links = {
    calculator: "https://www.reddit.com/r/Eldenring/comments/tbco46/elden_ring_weapon_calculator/",
    TarnishedSpreadsheet: "https://www.reddit.com/user/TarnishedSpreadsheet/",
    EldenRingWiki: "https://eldenring.wiki.fextralife.com/Elden+Ring+Wiki",
}

const related = [
    {
        name: ("Elden Ring Character Planner (eldenplanner.com)"),
        link: "https://www.eldenplanner.com/",
        description: "",
    },
    {
        name: "Fextralife - Elden Ring Build Calculator (Fextralife)",
        link: "https://eldenring.wiki.fextralife.com/Build+Calculator",
        description: "",
    },
    {
        name: "Elden Ring Build Planner (EIP Gaming)",
        link: "https://eip.gg/elden-ring/build-planner/",
        description: "",
    },
    {
        name: "Starting Class Optimizer (MugenMonkey)",
        link: "https://mugenmonkey.com/eldenring",
        description: "",
    },
    {
        name: "ELDEN RING Build Calculator (8Bit Design)",
        link: "https://8bitdesign.dev/en/elden-ring/",
        description: "\"This calculator will calculate the base stats of a character given its any attributes.\"",
    },
    {
        name: "Elden Ring: Boss Checklist",
        link: "https://mapgenie.io/elden-ring/checklists/boss-checklist",
        description: (<span>Use this interactive checklist to find all bosses, demigods &amp; invaders in Elden Ring. Use the options below to filter by region.</span>),
    },
    {
        name: (<span><del>Miyawiki - Elden Ring Character Planner</del> no longer online</span>),
        link: "https://eldenring.miyawiki.com/elden-ring-character-planner/",
        description: (<span>Use this interactive checklist to find all bosses, demigods &amp; invaders in Elden Ring. Use the options below to filter by region.</span>),
    },
]

export const AboutPage = (): JSX.Element => {
    return (
        <Page pageName="about">
            <Container>
                <section>
                    <Typography variant="h2">
                        Thanks, Credit, &amp; Recognition:
                    </Typography>
                    <List>
                        <ListItem sx={{ display: "list-item" }}>
                            All Weapon Damage calculations are from <a href={links.TarnishedSpreadsheet}>u/TarnishedSpreadsheet&apos;s</a> <a href={links.calculator}>Elden Ring Weapon Calculator</a>.
                        </ListItem>
                    </List>
                    {/* <ul className="normal">
                        <li>
                            <Typography>
                            </Typography>
                        </li>
                    </ul> */}
                </section>
                <Related />
            </Container>
        </Page>
    )
}
