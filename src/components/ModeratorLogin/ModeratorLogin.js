/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect, useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "../../api";
import {useSelector} from "react-redux";
import {Language} from "../../lang/Languages";

function ModeratorLogin() {
    const email = useRef()
    const password = useRef()
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    let navigate = useNavigate()


    let token = localStorage.getItem('moderator_token')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (values?.email !== "" || values?.password !== "") {
            axios.post("bank/login",
                {
                    phone: values?.email,
                    INN: values?.password,
                }
            ).then(e => {
                    localStorage.setItem("moderator_id", e?.data?.data?._id)
                    localStorage.setItem("moderator_phone", e?.data?.data?.phone)
                    localStorage.setItem("moderator_inn", e?.data?.data?.INN)
                    localStorage.setItem("moderator_token", "oisuaisuxapoiuxapuxpoooooooooxsinksxlkaxnlkxnksmanxklmaxlkmas")
                    localStorage.removeItem("user_token")
                    localStorage.removeItem("user_id")
                    localStorage.removeItem("bank_token")
                    localStorage.removeItem("bank_id")
                    localStorage.removeItem("admin_token")
                    localStorage.removeItem("admin_id")
                    navigate('/admin/applications')
                }
            ).catch(e => console.log(e))
        }
    }
    useEffect(() => {
        if (!!token) navigate('/admin/cards')
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
                                        type='phone'
                                        required
                                        name='phone'
                                        placeholder='Phone'
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
                                        className='form-control'
                                        type='number'
                                        required
                                        name='INN'
                                        placeholder='INN'
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

export default ModeratorLogin
