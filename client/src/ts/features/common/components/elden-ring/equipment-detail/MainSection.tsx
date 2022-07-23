import { Component } from "react"
import { Grid, GridProps } from "@mui/material"

import { isBlank } from "@app/util"
import { ErCard2, ErCard2Props } from "@app/shared"
import {
    EquipmentDetailProps,
    MainSectionRows,
} from "./_index"

const cardProps: Partial<ErCard2Props> = {
    sx: {
        mx: 3,
        my: 2,
    },
}

export class MainSection extends Component<EquipmentDetailProps> {

    constructor(props: EquipmentDetailProps) {
        super(props)
    }

    public render(): JSX.Element {

        const containerProps: GridProps = {
            container: true,
            direction: "row",
            wrap: "nowrap",
            columnSpacing: 2,
            sx: {
                // backgroundColor: "papayawhip",
            },
        }

        const firstColumnProps: GridProps = {
            item: true,
            container: true,
            direction: "column",
            className: "er__equipmentDetail2__detailColumn",
            sx: {
                // backgroundColor: "blue",
                width: "50%",
            },
        }
        const secondColumnProps: GridProps = {
            item: true,
            container: true,
            direction: "row",
            className: "er__equipmentDetail2__imageColumn",
            sx: {
                // backgroundColor: "violet",
                width: "50%",
                height: "50%",
            },
        }

        const primaryImage = isBlank(this?.props?.primaryImage?.src) ? this.emptyPrimaryImage() : this.primaryImage()

        let secondaryImage = this.emptySecondaryImage()
        if (this.props.includeSecondaryImage === true) {
            if (!isBlank(this.props.secondaryImage?.src)) {
                secondaryImage = this.secondaryImage()
            }
        }

        return (
            <section className="er__equipmentDetail2__section--main">
                <ErCard2 title={this.mainSectionTitle()} {...cardProps}>
                    <Grid {...containerProps}>
                        <Grid {...firstColumnProps}>
                            <MainSectionRows {...this.props.mainSectionRows} />
                        </Grid>
                        <Grid {...secondColumnProps}>
                            {secondaryImage}
                            {primaryImage}
                        </Grid>
                    </Grid>
                </ErCard2>
            </section>
        )
    }

    private mainSectionTitle(): string {
        return isBlank(this?.props?.title) ? "-" : this.props.title
    }

    private emptyPrimaryImage(): JSX.Element {
        return (
            <div className="er__equipmentDetail2__primaryImageWrapper--empty">
            </div>
        )
    }

    private emptySecondaryImage(): JSX.Element {
        return (
            <div className="er__equipmentDetail2__secondaryImageWrapper--empty">
            </div>
        )
    }

    private primaryImage(): JSX.Element {
        return (
            <div className="er__equipmentDetail2__primaryImageWrapper">
                <img
                    className="img-fluid"
                    src={this.props.primaryImage.src}
                    alt={this.props.primaryImage?.alt ?? "primary image"}
                />
            </div>
        )
    }

    private secondaryImage(): JSX.Element {
        return (
            <div className="er__equipmentDetail2__secondaryImageWrapper">
                <img
                    className="img-fluid"
                    src={this.props.secondaryImage.src}
                    alt={this.props.secondaryImage?.alt ?? "secondary image"}
                />
            </div>
        )
    }
}
