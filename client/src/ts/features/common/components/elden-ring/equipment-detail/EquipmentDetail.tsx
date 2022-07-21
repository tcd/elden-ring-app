import { Component } from "react"
import { Box, BoxProps } from "@mui/material"

import { isBlank } from "@app/util"
import {
    EquipmentDetailProps,
    MainSection,
    PassiveEffects,
} from "./_index"

export class EquipmentDetail extends Component<EquipmentDetailProps> {

    static defaultProps: Partial<EquipmentDetailProps> = {
        title: "-",
        includeSecondaryImages: false,
        includePassiveEffects: false,
    }

    constructor(props: EquipmentDetailProps) {
        super(props)
    }

    public render(): JSX.Element {
        return (
            <Box {...this.boxProps()}>
                <MainSection {...this.props} />
                {this.children()}
                <PassiveEffects {...this.props} />
            </Box>
        )
    }

    private boxProps(): BoxProps {
        return {
            component: "article",
            className: "er__equipmentDetail2",
        }
    }

    private children(): JSX.Element {
        if (isBlank(this.props?.children)) {
            return null
        }
        return (
            <>
                {this.props.children}
            </>
        )
    }
}

