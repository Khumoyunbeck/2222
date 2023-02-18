import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Language } from '../../lang/Languages'
import CardCar from '../../components/card_car/Card_car'
import axios from 'axios'
import '../../components/style.css'

function CardsCar() {
    const { lang } = useSelector(state => state.lang)
    const [cars, setCars] = useState([])

    const { eight } = Language

    const getCars = async () => {
        await axios
            .get('https://dev-rauto.uz/car/user/all')
            .then(res => setCars(res.data))
            .catch(err => new Error(err))
    }

    useEffect(() => {
        getCars()
    }, [])

    return (
        <main>
            <div className='social__title'>
                <span></span>
                <h2>{eight[lang]}</h2>
                <span></span>
            </div>
            <section className='cards'>
                <div className='cards__row'>
                    {cars.length > 0 ? (
                        cars.map((item, index) => <CardCar key={index} car={item} />)
                    ) : (
                        <h1>No data</h1>
                    )}
                </div>
            </section>
        </main>
    )
}

export default CardsCar
