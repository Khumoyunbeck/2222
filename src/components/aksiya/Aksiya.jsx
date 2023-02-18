import React from 'react'
import { useSelector } from 'react-redux'
import '../../components/style.css'
import { Language } from '../../lang/Languages'
import img from "../../assets/aksiya.jpg"

const Aksiya = () => {
    const { lang } = useSelector(state => state.lang)

    const { aksiya_1, aksiya_2, aksiya_3, aksiya_4, aksiya_5, aksiya_6, aksiya_7 } = Language;
    return (
        <main>
            <div className='pages-container'>
                <div className='komissia-wrap'>
                    <img className='aksiya-img' src={img} alt='' />
                    <h3>{aksiya_1[lang]}</h3>
                    <ul className='komissia-list'>
                        <li>{aksiya_2[lang]}</li>
                        <li>{aksiya_3[lang]}</li>
                        <li>{aksiya_4[lang]}</li>
                        <li>{aksiya_5[lang]}</li>
                        <li>{aksiya_6[lang]} </li>
                        <br />
                        <li>{aksiya_7[lang]}</li>
                    </ul>
                </div>
            </div>
        </main>

    )
}

export default Aksiya