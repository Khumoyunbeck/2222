import {useEffect, useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "../../api";
import {useSelector} from "react-redux";
import {Language} from "../../lang/Languages";

import salom from "../../images/topLog.png"

function AdminLogin() {
    const email = useRef()
    const password = useRef()
    const {lang} = useSelector(state => state.lang)
    const { k, pass, mail, welcome } = Language;
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    let navigate = useNavigate()


    let token = localStorage.getItem('admin_token')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (values?.email !== "" || values?.password !== "") {
            axios.post("admin/login",
                {
                    email: values?.email,
                    password: values?.password,
                }
            ).then(
                e => {
                    console.log(e,"e")
                    localStorage.setItem("admin_id", e?.data?.data?._id)
                    localStorage.setItem("admin_token", "KJKJHAHUAHVCAVHAVCAHJS")
                    localStorage.removeItem("user_token")
                    localStorage.removeItem("user_id")
                    localStorage.removeItem("bank_token")
                    localStorage.removeItem("bank_id")
                    localStorage.removeItem("moderator_token")
                    localStorage.removeItem("moderator_id")
                    navigate('/admin/applications')
                }
            ).catch(e => console.log(e))
        }
    }

    useEffect(() => {
        if (!!token) navigate('/admin/cards')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    return (
        <div className="wr100">
            <div className='accountbg'></div>
            <div className='home-btn d-none d-sm-block'>
                <a href='/' className='text-white'>
                    <i className='fa-solid fa-house'></i>
                </a>
            </div>
            <div className='wrapper-page'>
                <div className='card-pages'>
                    <div className='card-avto-body'>
                        <div className='text-center m-t-0 m-b-15'>
                            <img className='hello-img' src={salom} alt="hello" />
                        </div>
                        <h3 className='welcome-text text-center'>{welcome[lang]}</h3>
                        <form
                            className='form-horizontal form_login m-t-30 el_form'
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
                                        placeholder={pass[lang]}
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

export default AdminLogin
