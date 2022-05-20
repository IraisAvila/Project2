import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper,SidebarLink, SidebarMenu  } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="gamelist" onClick={toggle}>Game List</SidebarLink>
                    <SidebarLink to="gamesearch" onClick={toggle}>Game Search</SidebarLink>
                    <SidebarLink to="wishlist" onClick={toggle}>Wish List</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>

    )
}
export default Sidebar;