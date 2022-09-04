import { Box, List, ListItem, SxProps, } from "@mui/material"

import { CONFIG } from "@app/util"
import { Anchor } from "@app/shared"

import { AboutPageSection } from "."

const links = {
    repo: "https://github.com/tcd/elden-ring-app",
    issues: "https://github.com/tcd/elden-ring-app/issues",
    calculator: "https://github.com/tcd/elden-ring-calculator",
    software: [
        { title: "TypeScript",  link: "https://www.typescriptlang.org/" },
        { title: "Webpack",     link: "https://webpack.js.org/" },
        { title: "React",       link: "https://reactjs.org/" },
        { title: "Material UI", link: "https://mui.com/material-ui/getting-started/overview/" },
        { title: "Sass",        link: "https://sass-lang.com/" },
    ],
}

const sx: SxProps = {
    display: "list-item",
}

export const About = (): JSX.Element => {

    const $techItems = links.software.map(({ title, link }) => (
        <li key={title}>
            <Anchor  href={link} content={title} />
        </li>
    ))

    return (
        <AboutPageSection title="About">
            <List>
                <ListItem sx={sx}>
                    This site is my latest side project.
                    <br />
                    It's not completely done, and I expect there to be bugs.
                    <br />
                    That said, if you would like to report an issue, you can do so <Anchor href={links.issues} content="here"/>.
                </ListItem>
                <ListItem sx={sx}>
                    The source code for this website can be found <Anchor href={links.repo} content="on GitHub" />.
                    <br />
                    Current version is <strong>{CONFIG.version}</strong>.
                </ListItem>
                <ListItem sx={sx}>
                    The source code responsible for AR calculation is in a separate project <Anchor href={links.calculator} content="(also on GitHub)" />.
                </ListItem>
                <ListItem sx={sx}>
                    <span>This was built using:</span>
                    <Box component="ul" sx={{ ml: 3 }}>
                        {$techItems}
                    </Box>
                </ListItem>
            </List>
        </AboutPageSection>
    )
}
