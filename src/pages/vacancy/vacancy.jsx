import React from 'react'
import { useSelector } from 'react-redux'
import { Language } from '../../lang/Languages'
import '../../components/style.css'

function Vacancy() {
    const { lang } = useSelector(state => state.lang)


    const { vac1, vac2, vac3, vac4, vac5, vac6, vac7, vac8, vac9, vac10, vac11, vac12, vac13, vac14, vac15, vac16, vac17, vac18, vac19, vac20, vac21, vac22, vac23, vac24,} = Language
  return (
    <main>
    <div className='social__title'>
        <span></span>
        <h2>{vac1[lang]}</h2>
        <span></span>
    </div>
    <div className='pages-container'>
        <h3 className='komissia-title'>{vac2[lang]}</h3>
        <div className='komissia-wrap'>
            <h3>{vac3[lang]}</h3>
            <ul className='komissia-list'>
                <li>{vac4[lang]}</li>
                <li>{vac5[lang]}</li>
                <li>{vac6[lang]}</li>
                <li>{vac7[lang]}</li>
                <li>{vac8[lang]}</li>
                <li>{vac9[lang]}</li>
                <li>{vac10[lang]}</li>
                <li>{vac11[lang]}</li>
                <li>{vac12[lang]}</li>
                <li>{vac13[lang]}</li>
                <li>{vac14[lang]}</li>
            </ul>
            <h3>{vac15[lang]}</h3>
            <ul className='komissia-list'>
                <li>{vac16[lang]}</li>
            </ul>
            <h3>{vac17[lang]}</h3>
            <ul className='komissia-list'>
                <li>{vac18[lang]}</li>
                <li>{vac19[lang]}</li>
                <li>{vac20[lang]}</li>
                <li>{vac21[lang]}</li>
                <li>{vac22[lang]}</li>
                <li>{vac23[lang]}</li>
                <li className='mt-3'>{vac24[lang]}</li>
            </ul>
        </div>
    </div>
</main>
  )
}

export default Vacancy
