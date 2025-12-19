import React, { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '../features/utils/authutl'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../store/authService'

import { resetLoginLogoutState } from '../store/authSlice'

import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'



const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading, error, isLogingSuccess } = useSelector(state => state.auth)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    })

    const onSubmit = (data) => {
        dispatch(loginUser(data))
    }

    useEffect(() => {
        if (isLogingSuccess) {
            navigate('/dashboard', { replace: true })
            dispatch(resetLoginLogoutState())
        }
    }, [navigate, isLogingSuccess, dispatch])


    return (
        <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={4}>
                        <CCardGroup>
                            <CCard className="p-4">
                                <CCardBody>
                                    <CForm onSubmit={handleSubmit(onSubmit)}>
                                        <h1>Login</h1>
                                        <p className="text-body-secondary">Sign In to your account</p>
                                        <CInputGroup className={`${errors.email ? 'border border-danger rounded' : ''} `}>
                                            <CInputGroupText>
                                                <CIcon icon={cilUser} />
                                            </CInputGroupText>
                                            <CFormInput
                                                placeholder="Username"
                                                autoComplete="email"
                                                {...register('email')}
                                            />
                                        </CInputGroup>
                                        <div className='mb-3'>
                                            {errors.email && <small className='text-danger'>{errors.email.message}</small>}
                                        </div>
                                        <CInputGroup className={`${errors.password ? 'border border-danger rounded' : ''} `}>
                                            <CInputGroupText>
                                                <CIcon icon={cilLockLocked} />
                                            </CInputGroupText>
                                            <CFormInput
                                                type="password"
                                                placeholder="Password"
                                                autoComplete="current-password"
                                                {...register('password')}
                                            />
                                        </CInputGroup>
                                        <div className='mb-4'>
                                            {errors.password && <small className='text-danger'>{errors.password.message}</small>}
                                            {error != null && <small className='text-danger'>{error.message}</small>}
                                        </div>
                                        <CRow>
                                            <CCol xs={6}>
                                                <CButton
                                                    type="submit"
                                                    color="primary"
                                                    className="px-4"
                                                >
                                                    {loading ? 'Logging in...' : 'Login'}
                                                </CButton>
                                            </CCol>
                                            <CCol xs={6} className="text-right">
                                                <CButton color="link" className="px-0">
                                                    Forgot password?
                                                </CButton>
                                            </CCol>
                                        </CRow>
                                    </CForm>
                                </CCardBody>
                            </CCard>
                        </CCardGroup>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default Login
