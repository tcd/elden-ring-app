import { linearGradient } from "../helpers"
import { modal  } from "./variables.scss"
import { gradientStops } from "./gradients-stops"

export const gradients = {
    // // Side Nav
    // sideNav,
    // sideNavBackdrop,
    // // Modal
    modalBody: linearGradient({ direction: "90deg", color: modal.colorBg, stops: gradientStops.modalBody }),
    modalTopBottomBorder: linearGradient({ direction: "90deg", color: modal.colorBg, stops: gradientStops.modalTopBottomBorder }),
    // modalInnerBorder,
    // // Context Menu
    // contextMenuItem,
    // // You Died
    // youDiedGradient,
    // // Equipment Grid / Equipment Slots
    // equipmentGridBorder,
    // equipmentCellBorder,
}
