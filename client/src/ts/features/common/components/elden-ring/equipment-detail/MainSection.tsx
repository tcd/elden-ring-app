import { Component } from "react"
import { Grid, GridProps } from "@mui/material"

import { isBlank } from "@app/util"
import { ErCard } from "@app/shared"
import {
    EquipmentDetailProps,
    MainSectionRows,
} from "./_index"

export class MainSection extends Component<EquipmentDetailProps> {

    constructor(props: EquipmentDetailProps) {
        super(props)
    }

    public render(): JSX.Element {

        const containerProps: GridProps = {
            container: true,
            direction: "row",
        }

        const firstColumnProps: GridProps = {
            container: true,
            direction: "column",
            className: "er__equipmentDetail2__detailColumn",
        }
        const secondColumnProps: GridProps = {
            container: true,
            direction: "row",
            className: "er__equipmentDetail2__imageColumn",
        }

        const primaryImage = isBlank(this.props.primaryImage) ? this.emptyPrimaryImage() : this.primaryImage()

        let secondaryImage = null
        if (this.props.includeSecondaryImages === true) {
            if (this.props.secondaryImage) {
                secondaryImage = this.secondaryImage()
            } else {
                secondaryImage = this.emptySecondaryImage()
            }
        }

        return (
            <section className="er__equipmentDetail2__section">
                <ErCard title={this.mainSectionTitle()} contentClassName="er__equipmentDetail2__cardContent">
                    <Grid {...containerProps}>
                        <Grid {...firstColumnProps}>
                            <MainSectionRows {...this.props.mainSectionRows} />
                        </Grid>
                        <Grid {...secondColumnProps}>
                            {secondaryImage}
                            {primaryImage}
                        </Grid>
                    </Grid>
                </ErCard>
            </section>
        )
    }

    private mainSectionTitle(): string {
        return isBlank(this?.props?.title) ? "-" : this.props.title
    }

    private emptyPrimaryImage(): JSX.Element {
        return (
            <div className="er__equipmentDetail2__primaryImageWrapper--empty">
                <div>&nbsp;</div>
            </div>
        )
    }

    private emptySecondaryImage(): JSX.Element {
        return (
            <div className="er__equipmentDetail2__secondaryImageWrapper--empty">
                <div>&nbsp;</div>
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
