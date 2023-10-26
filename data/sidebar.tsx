import {
    FiHome,
    FiUsers
} from 'react-icons/fi'
import { MdOndemandVideo } from 'react-icons/md'
import { GrGroup } from 'react-icons/gr'

export const SidebarData = [
    {
        title: 'Home',
        icon: <FiHome />,
        link: '/'
    },
    {
        title: 'Friends',
        icon: <FiUsers />,
        link: '/friends'
    },
    {
        title: 'Groups',
        icon: <GrGroup />,
        link: '/groups'
    },
    {
        title: 'Videos',
        icon: <MdOndemandVideo />,
        link: '/videos'
    }

]

