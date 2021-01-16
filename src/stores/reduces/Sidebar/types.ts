export enum SidebarStore {

    ID_STORE = 'SIDEBAR'

}

export enum SidebarTypes {
    COLLAPSED = 'COLLAPSED'
}

export type SidebarActions = {

    idStore: SidebarStore.ID_STORE,
    type: SidebarTypes

}

export interface ISidebarState {
    collapsed: boolean



}

