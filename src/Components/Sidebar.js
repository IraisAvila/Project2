import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper,SidebarLink, SidebarMenu  } from './SidebarElements';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="gamelist">Game List</SidebarLink>
                    <SidebarLink to="gamesearch">Game Search</SidebarLink>
                    <SidebarLink to="wishlist">Wish List</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>

    )
}
export default Sidebar;