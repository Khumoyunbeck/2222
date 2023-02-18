/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect, useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "../../api";
import {message} from "antd";
import {Language} from "../../lang/Languages";
import {useSelector} from "react-redux";

// import {MainApi} from "../../config";

function Register({setStep, setK}) {
    const password = useRef()
    const [values, setValues] = useState({
        name: "",
        password: "",
        phone: "",
        region: ""
    })

    let navigate = useNavigate()

    let token = localStorage.getItem('token')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (values?.name !== ""  || values?.password !== "") {
            axios.post(`user/add`, values).then(e => {
                    setStep("code")
                    setK(e?.data?.data?.key)
                }
            )
                .catch(err => console.error(err))
        } else {
            message.warn("Fill the form completely")
        }
    }
    const { phone, region, pass, l} = Language

    const {lang} = useSelector((state) => state.lang);

    useEffect(() => {
        if (!!token) navigate('/admin/cards')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    return (
        <>
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
                                        placeholder={pass[lang]}
                                        onChange={event => setValues({...values, password: event.target.value})}
                                    />
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='col-12'>
                                    <label>{phone[lang]}</label>
                                    <input
                                        ref={password}
                                        className='form-control'
                                        type='number'
                                        required
                                        name='phone'
                                        placeholder={phone[lang]}
                                        onChange={event => setValues({...values, phone: event.target.value})}
                                    />
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='col-12'>
                                    <label>{region[lang]}</label>
                                    <input
                                        ref={password}
                                        className='form-control'
                                        type='region'
                                        required
                                        name='region'
                                        placeholder={region[lang]}
                                        onChange={event => setValues({...values, region: event.target.value})}
                                    />
                                </div>
                            </div>
                            <div className='form-group text-center m-t-20'>
                                <div className='col-12'>
                                    <button
                                        className='btn btn-primary btn-block btn-lg waves-effect waves-light'
                                        type='submit'
                                    >
                                        {l[lang]}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
