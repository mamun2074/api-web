import React from 'react'
import CIcon from '@coreui/icons-react'
import {
    cilBell,
    cilCalculator,
    cilChartPie,
    cilCursor,
    cilDescription,
    cilDrop,
    cilExternalLink,
    cilNotes,
    cilPencil,
    cilPuzzle,
    cilUser,
    cilSpeedometer,
    cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
    {
        component: CNavItem,
        name: 'Dashboard',
        to: '/dashboard',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />
    },

    {
        component: CNavTitle,
        name: 'User Manage',
    },
    {
        component: CNavGroup,
        name: 'Users',
        to: '/base',
        icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
        items: [
            {
                component: CNavItem,
                name: 'User',
                to: '/admin/user',
            }]
    }


]

export default _nav
