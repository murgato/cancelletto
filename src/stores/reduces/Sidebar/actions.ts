import store from "../../stores";
import {
    ISidebarState,
    SidebarActions,
    SidebarStore,
    SidebarTypes
} from "./types";

export const setCollapsed = () => store.dispatch<SidebarActions>({
    idStore: SidebarStore.ID_STORE,
    type: SidebarTypes.COLLAPSED
})