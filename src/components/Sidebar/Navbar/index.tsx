import React, { useState } from 'react'
//@ts-ignore
import { Link } from 'react-router-dom';

import { data } from '../SidebarData';

import { IconContext } from 'react-icons';
import { AiOutlineClose } from 'react-icons/ai';
import { FcMenu } from 'react-icons/fc';

import './style.css';


function Navbar() {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <IconContext.Provider value={{ color: '#4B6372' }}>
                <div className='navbar'>
                    <Link to="#" className='menu-bars' >
                        <FcMenu onClick={showSidebar} />

                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

                    <ul className='nav-nebuu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiOutlineClose />
                            </Link>
                        </li>
                        {data.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.label.toUpperCase()}</span>

                                    </Link>

                                </li>
                            )
                        })}

                    </ul>

                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar