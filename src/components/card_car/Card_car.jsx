import React from 'react'
import { Link } from 'react-router-dom'
import { FaBalanceScale } from "react-icons/fa";
import transmission_img from '../../assets/icons/gear-shift.svg'
import gear_img from '../../assets/icons/gear.svg'
import '../style.css'

import { Language } from '../../lang/Languages'
import { useSelector } from 'react-redux'

const CardCar = ({ car, addCompare }) => {
    const { lang } = useSelector(state => state.lang)

    const { car1, car2, car3, car4, car5, car6, Narxi } = Language

    return (
        <div className='cards__card card'>
            <div className='card__img'>
                <img src={car?.photo?.[0]} alt='img' />
            </div>
            <p className='card__title'>
                <Link to={`/more/${car?._id}`} className='a'>
                    {car?.marka} {car?.madel} {car?.yili}{' '}
                </Link>
            </p>
            <div className="cf">
                <div className='card__info'>
                    <div className='card__item'>
                        <span className='material-symbols-outlined'>local_gas_station</span>
                        <strong>{car1[lang]}</strong>
                        {lang === '0' ? car.yoqilgi : car.yoqilgiru}
                    </div>
                    <div className='card__item'>
                        <img src={transmission_img} className="gear-img_card" alt='star' />
                        <strong> {car2[lang]}</strong>
                        {lang === '0' ? car.transmission : car.transmissionru}
                    </div>
                </div>
                <div className='card__info'>
                    <div className='card__item'>
                        <img src={gear_img} className='gear-img_card' alt='star' />
                        <strong> {car3[lang]}</strong>
                        {lang === '0' ? car.perevod : car.perevodru}
                    </div>
                    <div className='card__item'>
                        <span className='material-symbols-outlined'>speed</span>
                        <strong> {car4[lang]}</strong>
                        {car?.yurgani}
                    </div>
                </div>
            </div>
            <div className='card__line'></div>
            <div className='card__price'>
                {Narxi[lang]}: <strong>{Number(car?.narxi).toLocaleString().replace(/,/g, ' ')}</strong>{' '}
                <span>UZS</span>
            </div>
            <Link to={`/more/${car?._id}`} className='card__button'>
                {car5[lang]}
            </Link>
            <div className='card__add'>
                <button onClick={() => addCompare(car)} className='compare-btn'>
                    {car6[lang]}
                    <button title='Сравнивать' className='compare-fa_icon'>
                        <FaBalanceScale />
                    </button>
                </button>
            </div>
        </div>
    )
}

export default CardCar
