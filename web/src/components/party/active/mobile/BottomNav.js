import React from "react";
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { QueueMusic, PlaylistAdd } from '@material-ui/icons';
import GroupIcon from '@material-ui/icons/Group';
import InfoIcon from '@material-ui/icons/Info';

const tabs = [
    {
        component: "Queue",
        icon: <QueueMusic />
    },
    {
        component: "Add Song",
        icon: <PlaylistAdd />
    },
    {
        component: "Members",
        icon: <GroupIcon />
    },
    {
        component: "Info",
        icon: <InfoIcon />
    }
]

const BottomNav = ({ setVisible }) => (
    <BottomNavigation style={{position: 'fixed', bottom: "0", width: "100%", backgroundColor: "#1DB954"}}
        showLabels>

        {tabs.map((tab, idx) => (
                <BottomNavigationAction
                    key={idx}
                    onClick={() => setVisible(tab.component)}
                    icon={tab.icon}
                />
            )
        )}
        
    </BottomNavigation>
)
 
export default BottomNav;

