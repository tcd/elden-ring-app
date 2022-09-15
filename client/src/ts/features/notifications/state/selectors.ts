import type { RootState } from "@app/state"

/** @private */
const _selectSlice = (rootState: RootState) => rootState?.Notifications

const selectNotifications = (rootState: RootState) => _selectSlice(rootState)?.notifications ?? []

// const selectActiveAreaNavData = (rootState: RootState) => {
//     const activeAreaName = selectActiveAreaName(rootState);
//     if (isBlank(activeAreaName)) {
//         return null;
//     }
//     if (activeAreaName === "None") {
//         return null;
//     }
//     return NAV_ITEMS[activeAreaName] ?? null;
// };


// =============================================================================

export const NotificationsSelectors = {
    notifications: selectNotifications,
}
