import { ReactNode } from "react"
import {
    List,
    IconButton,
    ListItemText,
    ListItemButton,
} from "@mui/material"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"

import { pointerOnHover } from "@app/theme"

import { AboutPageSection } from "./AboutPageSection"

interface SectionItemProps {
    link: string
    name: string | ReactNode
    description?: string | ReactNode
}

const SectionItem = (props: SectionItemProps): JSX.Element => {

    const secondaryAction = (
        <IconButton
            edge="end"
            aria-label="open"
            component="a"
            href={props.link}
            sx={pointerOnHover}
        >
            <OpenInNewIcon />
        </IconButton>
    )

    const handleClick = () => {
        window.location.href = props.link
    }

    return (
        <ListItemButton onClick={handleClick} sx={pointerOnHover}>
            <ListItemText
                primary={<>{props.name}</>}
                secondary={<>{props.description}</>}
            />
        </ListItemButton>
    )
}

const links = {
    calculator: "https://www.reddit.com/r/Eldenring/comments/tbco46/elden_ring_weapon_calculator/",
    TarnishedSpreadsheet: "https://www.reddit.com/user/TarnishedSpreadsheet/",
    EldenRingWiki: "https://eldenring.wiki.fextralife.com/Elden+Ring+Wiki",
}

const related: SectionItemProps[] = [
    {
        link: "https://www.eldenplanner.com/",
        name: ("Elden Ring Character Planner (eldenplanner.com)"),
        description: "",
    },
    {
        link: "https://eldenring.wiki.fextralife.com/Build+Calculator",
        name: "Fextralife - Elden Ring Build Calculator (Fextralife)",
        description: (
            <em>
                &quot;Please note this calculator is currently in its BETA stage&quot;
            </em>
        ),
    },
    {
        link: "https://eip.gg/elden-ring/build-planner/",
        name: "Elden Ring Build Planner (EIP Gaming)",
        description: "",
    },
    {
        link: "https://mugenmonkey.com/eldenring",
        name: "Starting Class Optimizer (MugenMonkey)",
        description: "",
    },
    {
        link: "https://8bitdesign.dev/en/elden-ring/",
        name: "ELDEN RING Build Calculator (8Bit Design)",
        description: "\"This calculator will calculate the base stats of a character given its any attributes.\"",
    },
    {
        link: "https://mapgenie.io/elden-ring/checklists/boss-checklist",
        name: "Elden Ring: Boss Checklist",
        description: (
            <em>
                &quot;Use this interactive checklist to find all bosses, demigods &amp; invaders in Elden Ring. Use the options below to filter by region.&quot;
            </em>
        ),
    },
    {
        link: "https://eldenring.miyawiki.com/elden-ring-character-planner/",
        name: (
            <span>
                <del>Miyawiki - Elden Ring Character Planner</del>
                no longer online
            </span>
        ),
        description: (
            <em>
                &quot;Use this interactive checklist to find all bosses, demigods &amp; invaders in Elden Ring. Use the options below to filter by region.&quot;
            </em>
        ),
    },
]

export const Related = (_props: unknown): JSX.Element => {

    const elements = related.map((props, index) => <SectionItem key={index} {...props} />)

    return (
        <AboutPageSection title="Related Projects">
            <List>
                {elements}
            </List>
        </AboutPageSection>
    )
}
