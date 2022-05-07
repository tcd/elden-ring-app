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

    const className = [
        "bg-success",
        "h-100",
        "w-100",
        // "flex-center",
        // "flex-col",
        "flex-between-column",
        "p-5",
    ].join(" ")

    return (
        <>
            {/* <Heading title="Test" /> */}
            <section className={className}>
                <div></div>

                <div className="er-popover">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, itaque nostrum! Numquam excepturi officia aliquid quasi nihil velit eum cum vero nesciunt inventore rem rerum asperiores corrupti, accusantium facilis voluptatibus.
                </div>

                <div className="er-popover-2">
                    <div className="er-popover-border er-popover-border-top">&nbsp;</div>
                    <div className="er-popover-border er-popover-border-bottom">&nbsp;</div>
                    <div className="er-popover-border er-popover-border-left">&nbsp;</div>
                    <div className="er-popover-border er-popover-border-right">&nbsp;</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, itaque nostrum! Numquam excepturi officia aliquid quasi nihil velit eum cum vero nesciunt inventore rem rerum asperiores corrupti, accusantium facilis voluptatibus.
                </div>

                <div className="er-popover-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, itaque nostrum! Numquam excepturi officia aliquid quasi nihil velit eum cum vero nesciunt inventore rem rerum asperiores corrupti, accusantium facilis voluptatibus.
                </div>

                <div></div>
            </section>
        </>
    )
}
