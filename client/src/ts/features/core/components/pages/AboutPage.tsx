import { Heading } from "@app/shared"

export const AboutPage = (): JSX.Element => {
    return (
        <>
            <Heading title="About" />
            <section>
                <h3>Thanks, Credit, &amp; Recognition:</h3>
                <ul>
                    <li>
                        All Weapon Damage calculations are from <a href="https://www.reddit.com/user/TarnishedSpreadsheet/">u/TarnishedSpreadsheet</a>&apos; <a href="https://www.reddit.com/r/Eldenring/comments/tbco46/elden_ring_weapon_calculator/">Elden Ring Weapon Calculator</a>.
                    </li>
                </ul>
            </section>
        </>
    )
}
