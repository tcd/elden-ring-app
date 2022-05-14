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

import { Heading, ECard, EPopoverContent } from "@app/shared"

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

                <div className="er__popover__1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, itaque nostrum! Numquam excepturi officia aliquid quasi nihil velit eum cum vero nesciunt inventore rem rerum asperiores corrupti, accusantium facilis voluptatibus.
                </div>

                <EPopoverContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, itaque nostrum! Numquam excepturi officia aliquid quasi nihil velit eum cum vero nesciunt inventore rem rerum asperiores corrupti, accusantium facilis voluptatibus.
                </EPopoverContent>

                <div className="er__popover__2">
                    <div className="er__popover__border er__popover__border--top">&nbsp;</div>
                    <div className="er__popover__border er__popover__border--bottom">&nbsp;</div>
                    <div className="er__popover__border er__popover__border--left">&nbsp;</div>
                    <div className="er__popover__border er__popover__border--right">&nbsp;</div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, itaque nostrum! Numquam excepturi officia aliquid quasi nihil velit eum cum vero nesciunt inventore rem rerum asperiores corrupti, accusantium facilis voluptatibus.
                </div>

                <div className="er__popover__3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, itaque nostrum! Numquam excepturi officia aliquid quasi nihil velit eum cum vero nesciunt inventore rem rerum asperiores corrupti, accusantium facilis voluptatibus.
                </div>

                <div className="er__popover__4">
                    <div className="er__popover__content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, itaque nostrum! Numquam excepturi officia aliquid quasi nihil velit eum cum vero nesciunt inventore rem rerum asperiores corrupti, accusantium facilis voluptatibus.
                    </div>
                </div>

                <div></div>
            </section>
        </>
    )
}
