// import { mdiArmFlex } from "@mdi/js"
// import { mdiArmFlexOutline } from "@mdi/js"
// import { mdiShieldSword } from "@mdi/js"
// import { mdiShieldSwordOutline } from "@mdi/js"
// import { mdiShieldSun } from "@mdi/js"
// import { mdiSword } from "@mdi/js"
// import { mdiMagicStaff } from "@mdi/js"
// import { mdiBottleTonicPlus } from "@mdi/js"
// import { mdiBottleTonicPlusOutline } from "@mdi/js"
// import { mdiHandFrontRight } from "@mdi/js"
// import { mdiHandFrontRightOutline } from "@mdi/js"

import { Heading, ECard } from "@app/shared"

const boxStyle = {
    // width: "200px",
    // height: "200px",
}

export const TestPage = (): JSX.Element => {

    return (
        <>
            <Heading title="Test" />
            <section className="bg-success h-100 w-100 flex-stretch-row">
                {/* <Link to="/" className="btn btn-primary">Home</Link> */}
                {/* <TalismanDisplay talisman={t} /> */}
                {/* <ECard
                    title="Attack Power"
                    iconPath={mdiArmFlexOutline}
                /> */}
                <div className="bg-info"    style={boxStyle}>uno</div>
                <div className="bg-warning" style={boxStyle}>dos</div>
                <div className="bg-danger"  style={boxStyle}>tres</div>
            </section>
        </>
    )
}
