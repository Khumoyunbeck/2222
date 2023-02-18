/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect, useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "../../api";
import {Language} from "../../lang/Languages";
import {useSelector} from "react-redux";

function BankLogin() {
    const email = useRef()
    const password = useRef()
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    let navigate = useNavigate()

    // const onChange = (e) => {
    //     setValues({
    //         ...values,
    //         value: e.target.value
    //     });
    // };

    let token = localStorage.getItem('bank_token')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (values?.email !== "" || values?.password !== "") {
                axios.post("xodim/login",
                    {
                        email: values?.email,
                        password: values?.password,
                    }
                ).then(e => {
                        localStorage.setItem("bank_token", e.data?.token)
                        localStorage.setItem("bank_id", e?.data?._id)
                        localStorage.removeItem("user_token")
                        localStorage.removeItem("user_id")
                        localStorage.removeItem("admin_token")
                        localStorage.removeItem("admin_id")
                        localStorage.removeItem("moderator_token")
                        localStorage.removeItem("moderator_id")
                        navigate('/admin/applications')
                    }
                ).catch(e => console.log(e))
            }
    }

    useEffect(() => {
        if (!!token) navigate('/admin/applications')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    const {lang} = useSelector((state) => state.lang);

    const {l, pass, mail} = Language;

    return (
        <div className="wr100">
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
                                    <label>{mail[lang]}</label>
                                    <input
                                        ref={email}
                                        className='form-control email_input'
                                        type='email'
                                        required
                                        name='email'
                                        placeholder='Email'
                                        value={values?.email}
                                        onChange={event => setValues({
                                            ...values,
                                            email: event.target.value
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
                                        {l[lang]}
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

export default BankLogin
