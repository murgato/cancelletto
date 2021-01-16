import { Reducer } from 'redux'

import {
    ISidebarState,
    SidebarActions,
    SidebarStore,
    SidebarTypes
} from "./types";


const INITIAL_STATE: ISidebarState = {
    collapsed: false
}


const sidebar: Reducer<ISidebarState, SidebarActions> = (state = INITIAL_STATE, action: SidebarActions) => {
    switch (action.idStore) {
        case SidebarStore.ID_STORE:
            switch (action.type) {
                case SidebarTypes.COLLAPSED:

                    return { ...state, collapsed: !state.collapsed }

                default:
                    return { ...state }
            }

        default:
            return { ...state }
    }
}

export default sidebar