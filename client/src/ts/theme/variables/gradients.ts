import { linearGradient } from "../helpers"
import { gradientStops } from "./gradients-stops"
import {
    modal,
    equipmentMenu,
    youDied,
} from "./variables.scss"

export const gradients = {
    // // Side Nav
    // sideNav,
    // sideNavBackdrop,
    // // Modal
    modalBody:            linearGradient({ direction: "90deg", color: modal.colorBg, stops: gradientStops.modalBody            }),
    modalTopBottomBorder: linearGradient({ direction: "90deg", color: modal.colorBg, stops: gradientStops.modalTopBottomBorder }),
    // modalInnerBorder,
    // // Context Menu
    // contextMenuItem,
    youDied:              linearGradient({ direction: "180deg", color: youDied.black,              stops: gradientStops.youDiedGradient     }),
    equipmentMenuDivider: linearGradient({ direction: "90deg",  color: equipmentMenu.dividerColor, stops: gradientStops.equipmentGridBorder }),
    equipmentCell:        linearGradient({ direction: "180deg", color: equipmentMenu.cellColor,    stops: gradientStops.equipmentCellBorder }),
}
