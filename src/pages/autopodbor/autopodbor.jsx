import { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Language } from '../../lang/Languages'
import AutoPod from '../../images/autopodbor.jpg'
import '../../components/style.css'
import {MainApi} from "../../api";

function AutoPodbor() {
    const { lang } = useSelector(state => state.lang)
    const [data, setData] = useState({ ismiz: '', phone: '' })

    const { p1, p2, p3, p4, p5, p6, p7, vikthirdteen, vikfourteen, m1, m2, yuborish } = Language

    const order = async () => {
        await axios
            .post(`${MainApi}/order/add`, data)
            .then(res => console.log(res))
            .catch(err => new Error(err))
    }

    return (
        <main>
            <div className='social__title'>
                <span></span>
                <h2>{p1[lang]}</h2>
                <span></span>
            </div>
            <div className='pages-container'>
                <img className='vikup-img' src={AutoPod} alt='' />
                <div className='komissia-wrap'>
                    <h3 className='komissia-title'>{p2[lang]}</h3>
                    <ul className='komissia-list'>
                        <li>{p3[lang]}</li>
                        <li>{p4[lang]}</li>
                        <li>{p5[lang]}</li>
                        <li>{p6[lang]}</li>
                        <li>{p7[lang]}</li>
                    </ul>
                    <div className='vikup-card'>
                        <div className='sale-card_wrapper'>
                            <span className='card-price card-price_sum'>{vikthirdteen[lang]}</span>
                            <h4>{vikfourteen[lang]}</h4>
                            <div className='input-wrap'>
                                <span className='material-symbols-outlined'>person</span>
                                <input
                                    onChange={e => setData({ ...data, ismiz: e.target.value })}
                                    value={data.ismiz}
                                    type='text'
                                    className='form-control page_title_uz'
                                    name='auto_price'
                                    required
                                    placeholder={m1[lang]}
                                />
                            </div>
                            <div className='input-wrap'>
                                <span className='material-symbols-outlined'>phone</span>
                                <input
                                    onChange={e => setData({ ...data, phone: e.target.value })}
                                    value={data.phone}
                                    type='number'
                                    className='form-control page_title_uz'
                                    name='auto_price'
                                    required
                                    placeholder={m2[lang]}
                                />
                            </div>
                        </div>
                        <button onClick={order} className='more-btn'>
                            {yuborish[lang]}
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AutoPodbor
