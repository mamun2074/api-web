import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// User
const User = React.lazy(() => import('./views/admin/users/User'))

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', element: Dashboard },
    { path: '/theme', name: 'Theme', element: Colors, exact: true },

    { path: '/admin/user', name: 'User', element: User }
]

export default routes
