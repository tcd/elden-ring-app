export const zIndex = <const>{
    startingClassBackground:     1_005,
    startingClassContent:        1_010,
    startingClassHover:          1_011,
    equipmentGridCell:           1_005,
    equipmentGridCellBackground: 1_006,
    equipmentGridCellImage:      1_007,
    equipmentGridCellHover:      1_008,
    modalBackdrop:               1_050,
    modal:                       1_055,
    popover:                     1_070,
    tooltip:                     1_080,
    toast:                       1_090,
    contextMenu:                 1_100,
    scrollBar:                   1_000,
    scrollBarButton:             1_005,
    scrollBarTrack:              1_010,
    scrollBarThumb:              1_020,
    sideNavBackdrop:             1_190,
    sideNav:                     1_200,
    sideNavItem:                 1_205,
    sideNavItemHover:            1_210,
    notificationsContainer:      2_000,
    notification:                2_100,
}

// export const ZIndex = {
//     startingClassBackground: 1005,
//     startingClassContent:    1010,
//     startingClassHover:      1011,
//     equipmentGridCell:       1005,
//     equipmentGridCellBg:     1006,
//     equipmentGridCellImage:  1007,
//     equipmentGridCellHover:  1008,
//     // dropdown:                  1000,
//     // sticky:                    1020,
//     // fixed:                     1030,
//     // offcanvasBackdrop:         1040,
//     // offcanvas:                 1045,
//     modalBackdrop: 1050,
//     modal:         1055,
//     popover:       1070,
//     tooltip:       1080,
//     // toast:                      1090,
//     contextMenu:     1100,
//     scrollBar:       1000,
//     scrollBarButton: 1005,
//     scrollBarTrack:  1010,
//     scrollBarThumb:  1020,
//     sideNavBackdrop: 1190,
//     sideNav:         1200,
// }

// export type ZIndexContext =
//     | "startingClass"
//     | "equipmentGrid"
//     | "mui"
//     | "scrollBar"

// export type ZIndexItem = {
//     context: ZIndexContext
//     name: string
//     value: Integer
// }

// export const ZIndex: ZIndexItem[] = [
//     { context: "startingClass",    name: "startingClassBackground",       value: 1_005 }, // startingClassBackground
//     { context: "startingClass",    name: "startingClassContent",          value: 1_010 }, // startingClassContent
//     { context: "startingClass",    name: "startingClassHover",            value: 1_011 }, // startingClassHover
//     { context: "equipmentGrid",    name: "equipmentGridCell",             value: 1_005 }, // equipmentGridCell
//     { context: "equipmentGrid",    name: "equipmentGridCellBackground",   value: 1_006 }, // equipmentGridCellBg
//     { context: "equipmentGrid",    name: "equipmentGridCellImage",        value: 1_007 }, // equipmentGridCellImage
//     { context: "equipmentGrid",    name: "equipmentGridCellHover",        value: 1_008 }, // equipmentGridCellHover
//     { context: "mui",              name: "modalBackdrop",                 value: 1_050 },
//     { context: "mui",              name: "modal",                         value: 1_055 },
//     { context: "mui",              name: "popover",                       value: 1_070 },
//     { context: "mui",              name: "tooltip",                       value: 1_080 },
//     { context: "mui",              name: "toast",                         value: 1_090 },
//     { context: "mui",              name: "contextMenu",                   value: 1_100 },
//     { context: "scrollBar",        name: "scrollBar",                     value: 1_000 },
//     { context: "scrollBar",        name: "scrollBarButton",               value: 1_005 },
//     { context: "scrollBar",        name: "scrollBarTrack",                value: 1_010 },
//     { context: "scrollBar",        name: "scrollBarThumb",                value: 1_020 },
//     { context: "mui",              name: "sideNavBackdrop",               value: 1_190 },
//     { context: "mui",              name: "sideNav",                       value: 1_200 },
// ]

// const _zIndex = reduceToObject(ZIndex, (item) => [`${item.context}${item.name}`, item.value])

