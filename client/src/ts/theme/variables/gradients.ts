import { linearGradient, radialGradient } from "../helpers"
import { gradientStops } from "./gradients-stops"
import {
    contextMenu,
    equipmentMenu,
    layout,
    modal,
    startingClass,
    youDied,
} from "./variables.scss"

export const gradients = <const>{

    // -------------------------------------------------------------------------
    // Side Nav
    // -------------------------------------------------------------------------

    sideNav:               linearGradient({ direction: "90deg", color: layout.sideNav.colorBg, stops: gradientStops.sideNav               }),
    sideNavBackdrop:       linearGradient({ direction: "90deg", color: layout.sideNav.colorBg, stops: gradientStops.sideNavBackdrop       }),
    sideNavMobileBackdrop: linearGradient({ direction: "90deg", color: layout.sideNav.colorBg, stops: gradientStops.sideNavMobileBackdrop }),

    // -------------------------------------------------------------------------
    // Modal / Dialog
    // -------------------------------------------------------------------------

    modalBody:            linearGradient({ direction: "90deg", color: modal.colorBg, stops: gradientStops.modalBody            }),
    modalHorizontalBorder: [
        linearGradient({ direction: "90deg", color: modal.colorBg, stops: gradientStops.modalTopBottomBorder }),
        modal.colorBorder,
    ].join(", "),
    modalInnerBorder: [
        linearGradient({ direction: "90deg", color: modal.colorBg, stops: gradientStops.modalInnerBorder1 }),
        linearGradient({ direction: "180deg",                      stops: gradientStops.modalInnerBorder2 }),
    ].join(", "),

    // -------------------------------------------------------------------------
    // Affinity Modal
    // -------------------------------------------------------------------------

    affinityModalBody: linearGradient({ direction: "90deg", color: modal.colorBg, stops: gradientStops.affinityModalBody }),
    affinityModalHorizontalBorder: [
        linearGradient({ direction: "90deg", color: modal.colorBg, stops: gradientStops.modalInnerBorder1 }),
        modal.colorBorder,
    ].join(", "),
    affinityModalVerticalBorder: [
        linearGradient({ direction: "180deg", color: modal.colorBg, stops: gradientStops.modalInnerBorder1 }),
        modal.colorBorder,
    ].join(", "),

    // -------------------------------------------------------------------------
    // Context Menu
    // -------------------------------------------------------------------------

    contextMenuItem:       linearGradient({ direction: "90deg", color: contextMenu.item.colorBg,       stops: gradientStops.contextMenuItem }),
    contextMenuItemActive: linearGradient({ direction: "90deg", color: contextMenu.item.colorBgActive, stops: gradientStops.contextMenuItem }),

    // -------------------------------------------------------------------------
    // You Died
    // -------------------------------------------------------------------------

    youDied: linearGradient({ direction: "180deg", color: youDied.black, stops: gradientStops.youDiedGradient }),

    // -------------------------------------------------------------------------
    // Equipment
    // -------------------------------------------------------------------------

    equipmentMenuDivider: linearGradient({ direction: "90deg",  color: equipmentMenu.dividerColor, stops: gradientStops.equipmentGridBorder }),
    equipmentCell:        linearGradient({ direction: "180deg", color: equipmentMenu.cellColor,    stops: gradientStops.equipmentCellBorder }),

    // -------------------------------------------------------------------------
    // Starting Class
    // -------------------------------------------------------------------------

    startingClassBackground:      linearGradient({ direction: "90deg",                                              stops: gradientStops.startingClassBackground      }),
    startingClassTopBottomBorder: linearGradient({ direction: "90deg",   color: startingClass.topBottomBorderColor, stops: gradientStops.startingClassTopBottomBorder }),
    startingClassOverlay:         linearGradient({ direction: "180deg",  color: startingClass.optionOverlayColorBg, stops: gradientStops.startingClassOverlay         }),
    startingClassTitle:           linearGradient({ direction: "90deg",   color: startingClass.optionTitleColorBg,   stops: gradientStops.startingClassTitle           }),
    startingClassGoldenHover:     radialGradient({ direction: "ellipse",                                            stops: gradientStops.startingClassGoldenHover     }),
}
