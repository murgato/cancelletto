import React from 'react'
import '../../Styles.css'
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarContent,
    SidebarFooter,
    SidebarHeader
} from 'react-pro-sidebar';

import routes from "../../routes";

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SideBar() {


    return (
        <>
            <ProSidebar className='sidebar' >
                <Menu popperArrow={true} iconShape="circle">
                    <SidebarHeader>
                        <h2 className='title-sidebar' > Canceletto</h2>
                    </SidebarHeader>
                    <SidebarContent>
                        {routes.map((route) => {
                            return (
                                <>{!route.collapse ?
                                    <MenuItem icon={<FontAwesomeIcon icon="fas corgs" />} >{route.label}

                                    </MenuItem>
                                    :
                                    <SubMenu
                                        title={route.label}
                                        icon={<FontAwesomeIcon icon="fas corgs" />}>

                                        {route.views.map((view) => {

                                            return (
                                                <>{!view.collapse ?
                                                    <MenuItem >{view.label}</MenuItem>

                                                    :

                                                    <SubMenu title={view.label} >

                                                        {view.views.map((viewSubmenu) => {
                                                            return (
                                                                <MenuItem >{viewSubmenu.label}</MenuItem>
                                                            )
                                                        })}

                                                    </SubMenu>

                                                }


                                                </>
                                            )

                                        })}

                                    </SubMenu>
                                }

                                </>
                            )
                        })}
                    </SidebarContent>
                    <SidebarFooter >
                        <br />
                        <p style={{ textAlign: 'center' }} >  by Murilo do Couto Santos </p>
                    </SidebarFooter>
                </Menu>
            </ProSidebar>
        </>

    )
}

export default SideBar