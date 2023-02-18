/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {  message } from 'antd';
import axios from "../../api";
import { Language } from "../../lang/Languages";
import { useSelector } from "react-redux";

function UserLogin() {
    const password = useRef()
    const [values, setValues] = useState({
        phone: "",
        password: "",
        value: 1
    });
    const [messageApi, contextHolder] = message.useMessage();
    let navigate = useNavigate()

    let token = localStorage.getItem('token')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (values?.phone !== "" || values?.password !== "" || values?.value !== "") {
            if (values?.value !== 1 || values?.value !== 2 || values?.value !== 3 ) {
                messageApi.open({
                    type: 'error',
                    content: 'Parol or phone error!!',
                });
            }
            
            if (values?.value === 1) {
                axios.post("user/login",
                    {
                        phone: values?.phone,
                        password: values?.password,
                    }
                ).then(
                    e => {
                        localStorage.setItem("user_id", e?.data?.data?._id)
                        localStorage.setItem("user_token", "UYKUYGLYGIGLYUGUYLGHJGKYUGFyugyudsjihsdhhjsdhjb")
                        localStorage.removeItem("bank_token")
                        localStorage.removeItem("admin_token")
                        localStorage.removeItem("admin_id")
                        localStorage.removeItem("bank_id")
                        localStorage.removeItem("moderator_id")
                        localStorage.removeItem("moderator_id")
                        navigate('/admin/cards')
                    }
                ).catch(e => console.log(e))
            }
            if (values?.value === 2) {
                axios.post("xodim/login",
                    {
                        phone: values?.phone,
                        password: values?.password,
                    }
                ).then(e => {
                    console.log(e?.data, "xodim")
                    localStorage.setItem("bank_token", e.data?.token)
                    localStorage.setItem("bank_id", e?.data?._id)
                    localStorage.removeItem("user_token")
                    localStorage.removeItem("admin_token")
                    navigate('/admin/applications')
                }
                ).catch(e => console.log(e))
            }
            if (values?.value === 3) {
                axios.post("auth/login",
                    {
                        phone: values?.phone,
                        password: values?.password,
                    }
                ).then(e => {
                    console.log(e?.data, "admin")
                    localStorage.setItem("admin_id", e?.data?._id)
                    localStorage.setItem("admin_token", e.data?.token)
                    localStorage.removeItem("user_token")
                    localStorage.removeItem("bank_token")
                    navigate('/admin/applications')
                }
                ).catch(e => console.log(e))
            }
        }
    }
    // некоторые
    useEffect(() => {
        if (!!token) navigate('/admin/cards')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    const { lang } = useSelector(state => state.lang)

    const { pass, k, phone } = Language

    return (
        <div className="wr100">
            {contextHolder}
            <div className='accountbg'></div>
            <div className='home-btn d-none d-sm-block'>
                <a href='/' className='text-white'>
                    <i className='fa-solid fa-house'></i>
                </a>
            </div>
            <div className='wrapper-page'>
                <div className='card card-pages shadow-none'>
                    <div className='card-avto-body'>
                        <div className='text-center m-t-0 m-b-15'>
                            <a href='' className='logo logo-admin'>
                                <h1>RAUTO</h1>
                            </a>
                        </div>
                        <h5 className='font-18 text-center'></h5>
                        <form
                            className='form-horizontal m-t-30 el_form'
                            onSubmit={e => handleSubmit(e)}
                        >
                            <div className='form-group'>
                                <div className='col-12'>
                                    <label>{phone[lang]}</label>
                                    <input
                                        ref={phone}
                                        className='form-control email_input'
                                        type='number'
                                        required
                                        name='number'
                                        placeholder='phone'
                                        value={values?.phone}
                                        onChange={event => setValues({
                                            ...values,
                                            phone: event.target.value
                                        })}
                                    />
                                </div>
                            </div>

                            <div className='form-group'>
                                <div className='col-12'>
                                    <label>{pass[lang]}</label>
                                    <input
                                        ref={password}
                                        className='form-control password_input'
                                        type='password'
                                        required
                                        name='password'
                                        placeholder='Password'
                                        value={values?.password}
                                        onChange={event => setValues({
                                            ...values,
                                            password: event.target.value
                                        })}
                                    />
                                </div>
                            </div>
                            <div className='form-group text-center m-t-20'>
                                <div className='col-12'>
                                    <button
                                        className='btn btn-primary btn-block btn-lg waves-effect waves-light'
                                        type='submit'
                                    >
                                        {k[lang]}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserLogin
