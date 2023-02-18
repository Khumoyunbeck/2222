import { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Language } from '../../lang/Languages'
import SaleFoto from '../../images/photosale.jpg'
import '../../components/style.css'

function PhotoSale() {
    const { lang } = useSelector(state => state.lang)
    const [data, setData] = useState({ ismiz: '', phone: '' })

    const {
        photosale1,
        photosale2,
        photosale3,
        photosale4,
        photosale5,
        photosale6,
        photosale7,
        m1,
        m2,
        vikthirdteen,
        vikfourteen,
        yuborish,
    } = Language

    const order = async () => {

        await axios
            .post('https://dev-rauto.uz/order/add', data)
            .then(res => console.log(res))
            .catch(err => new Error(err))
    }

    return (
        <main>
            <div className='social__title'>
                <span></span>
                <h2>{photosale1[lang]}</h2>
                <span></span>
            </div>
            <div className='pages-container'>
                <img className='vikup-img' src={SaleFoto} alt='' />
                <div className='komissia-wrap'>
                    <h3 className='komissia-title'>{photosale2[lang]}</h3>
                    <ul className='komissia-list'>
                        <li>{photosale3[lang]}</li>
                        <li>{photosale4[lang]}</li>
                        <li>{photosale5[lang]}</li>
                        <li>{photosale6[lang]}</li>
                        <li>{photosale7[lang]}</li>
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

export default PhotoSale
