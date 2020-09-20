import React from 'react'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GroupIcon from '@material-ui/icons/Group';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://lh3.googleusercontent.com/a-/AOh14GhmNFtpUGnwbHrEroPXl4kAFjcP-A0OgqsSjp30=s88-c-k-c0x00ffffff-no-rj-mo" title="Chan Myae Oo"/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={GroupIcon} title="Group" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreIcon} title="Marketplace"/>
        </div>
    )
}

export default Sidebar
