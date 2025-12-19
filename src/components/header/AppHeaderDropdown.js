
import React, { useEffect } from 'react'

import { resetLoginLogoutState } from '../../views/admin/auth/store/authSlice'

import {
    CAvatar,
    CBadge,
    CDropdown,
    CDropdownDivider,
    CDropdownHeader,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
} from '@coreui/react'
import {
    cilBell,
    cilCreditCard,
    cilCommentSquare,
    cilEnvelopeOpen,
    cilFile,
    cilLockLocked,
    cilSettings,
    cilTask,
    cilUser,
    cilAccountLogout
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import { logout } from '../../../src/views/admin/auth/store/authService'


const AppHeaderDropdown = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isLogoutSuccess } = useSelector(state => state.auth)

    const handleLogout = () => {
        dispatch(logout())
    }

    useEffect(() => {
        if (isLogoutSuccess) {
            navigate('/login', { replace: true })
            dispatch(resetLoginLogoutState())
        }
    }, [navigate, isLogoutSuccess, dispatch])


    return (
        <CDropdown variant="nav-item">
            <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
                <CAvatar src={avatar8} size="md" />
            </CDropdownToggle>

            <CDropdownMenu className="pt-0" placement="bottom-end">
                <CDropdownItem href="#">
                    <CIcon icon={cilUser} className="me-2" />
                    Profile
                </CDropdownItem>
                <CDropdownItem href="#">
                    <CIcon icon={cilSettings} className="me-2" />
                    Settings
                </CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem onClick={handleLogout} className='text-danger' href="#">
                    <CIcon icon={cilAccountLogout} className="me-2 text-black" />
                    Log out
                </CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    )
}

export default AppHeaderDropdown
