import 'react-pro-sidebar/dist/css/styles.css';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';

import sidebarBg from '../../assets/bg2.jpg';
const SideBar = ({ image, collapsed, toggled, handleToggleSidebar }) => {

    return (
        <>
            <ProSidebar
                image={ sidebarBg }
              
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Academy technology of cryptography 
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<FaTachometerAlt />}
                            suffix={<span className="badge red">New</span>}
                        >
                           Dashboard
                        </MenuItem>
                        <MenuItem icon={<FaGem />}> components</MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu
                            suffix={<span className="badge yellow">3</span>}
                            title="withSuffix"
                            icon={<FaRegLaughWink />}
                        >
                            <MenuItem>SubMenu 1</MenuItem>
                            <MenuItem>SubMenu 2</MenuItem>
                            <MenuItem>SubMenu 3</MenuItem>
                        </SubMenu>
                        <SubMenu
                            prefix={<span className="badge gray">3</span>}
                            title='withPrefix' 
                            icon={<FaHeart />}
                        >
                            <MenuItem>SubMenu 1</MenuItem>
                            <MenuItem>SubMenu 2</MenuItem>
                            <MenuItem>SubMenu 3</MenuItem>
                        </SubMenu>
                        <SubMenu title= 'multiLevel' icon={<FaList />}>
                        <MenuItem>SubMenu 1</MenuItem>
                        <MenuItem>SubMenu 2</MenuItem>
                            <SubMenu title='submenu' >
                                <MenuItem>submenu  </MenuItem>
                                <MenuItem> submenu</MenuItem>
                                <SubMenu title= 'submenu '>
                                    <MenuItem> submenu </MenuItem>
                                    <MenuItem>submenu </MenuItem>
                                    <MenuItem>submenu </MenuItem>
                                </SubMenu>
                            </SubMenu>
                        </SubMenu>
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://github.com/azouaoui-med/react-pro-sidebar"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                viewSource
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>

        </>

    );
}

export default SideBar;
