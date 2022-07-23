import {
    mdiArmFlex,
    mdiArmFlexOutline,
    mdiShieldSword,
    mdiShieldSwordOutline,
    mdiShieldSun,
    mdiSword,
    mdiMagicStaff,
    mdiBottleTonicPlus,
    mdiBottleTonicPlusOutline,
    mdiHandFrontRight,
    mdiHandFrontRightOutline,
    mdiAccount,
} from "@mdi/js"


import {
    Heading,
    ErCard,
    ErTallCard,
    EPopoverContent,
    ErTallCardSection,
} from "@app/shared"
import { CharacterStatusB } from "@app/features/builder/components/right-side-panels"

const boxStyle = {
    // width: "200px",
    // height: "200px",
}

export const TestPage = (_props: unknown): JSX.Element => {

    const className = [
        "bg-success",
        // "h-100",
        // "w-100",
        "container",
        // "flex-center",
        // "flex-col",
        // "flex-between-column",
        // "p-5",
    ].join(" ")

    return (
        <section className={className}>
            <div className="row">
                <div className="col">
                    <Heading title="Test" />
                </div>
            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-2">
                    <CharacterStatusB />
                </div>
            </div>
        </section>
    )
}
