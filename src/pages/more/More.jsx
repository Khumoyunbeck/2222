import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Language } from '../../lang/Languages'
import star_img from '../../assets/icons/star.png'
import star_b_img from '../../assets/icons/star_bold.png'
import paint_img from '../../assets/icons/paint.png'
import date_img from '../../assets/icons/date.png'
import cube_img from '../../assets/icons/cube.png'
import fuel_img from '../../assets/icons/fuel.png'
import gear_img from '../../assets/icons/gear.svg'
import car_img from '../../assets/icons/car.png'
import speed_img from '../../assets/icons/speed.png'
import transmission_img from '../../assets/icons/gear-shift.svg'
// import required modules
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Button } from 'antd'
import { MainApi } from "../../api";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router";

function More() {
    const { id } = useParams()
    const [data, setData] = useState({ name: '', phone: '' })
    const [car, setCar] = useState(null)
    // const navigate = useNavigate()
    const { lang } = useSelector(state => state.lang)

    const { mark, m7, m8, m9, m10, m11, m12, m13, m14, m5, m1, m2, m3, m4, car3 } = Language

    function createMarkup() {
        return { __html: lang === '0' ? car.opisaniya : car.opisaniyaru }
    }

    const createOrder = async () => {
        await axios
            .post(`${MainApi}/order/add`, data)
            .then(res => {
                setData({ name: ' ', phone: ' ' })
                toast.success("Muvafaqiyatli buyurtma berildi.")
            }
            )
            .catch(err => new Error(err))
    }

    // const handleNav = () => {
    //     window.location.href = "http://rauto-calculator.uz"
    // }

    // const handleNav1 = () => {
    //     navigate("/applications/create")
    // }
    useEffect(() => {
        axios
            .get(`${MainApi}/car/${id}`)
            .then(res => setCar(res.data.data))
            .catch(err => console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return !!car ? (
        <main>
            <section className='about'>
                <div className='about__title'>
                    <span></span> <h2>{car?.madel}</h2> <span></span>
                </div>
                <div className='about__container'>
                    <div className='about__slider'>
                        <Swiper
                            pagination={{ type: 'progressbar' }}
                            navigation={true}
                            loop={true}
                            modules={[Autoplay, Navigation, Pagination]}
                            className='mySwiper'
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                        >
                            {car?.photo?.map(photo => (
                                <SwiperSlide>
                                    <img src={photo} alt='img' className="im" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className='about__card'>
                        <p className='about__text secP'>
                            <div>
                                <img src={star_img} alt='star' /> {mark[lang]}:
                            </div>
                            <span className="span" />
                            <div>
                                {car.marka}
                            </div>
                        </p>
                        <p className='about__text secP'>
                            <div>
                                <img src={star_b_img} alt='star' /> {m7[lang]}:
                            </div>
                            <span className="span" />
                            <div>
                                {car.madel}
                            </div>
                        </p>
                        <p className='about__text secP'>
                            <div>
                                <img src={paint_img} alt='star' /> {m8[lang]}:
                            </div>
                            <span className="span" />
                            <div>
                                {lang === '0' ? car.color : car.colorru}
                            </div>
                        </p>
                        <p className='about__text secP'>
                            <div>
                                <img src={date_img} alt='star' /> {m9[lang]}:
                            </div>
                            <span className="span" />
                            <div>
                                {car.yili}
                            </div>
                        </p>
                        <p className='about__text secP'>
                            <div>
                                <img src={cube_img} alt='star' /> {m10[lang]}:
                            </div>
                            <span className="span" />
                            <div>
                                {car.divigitel}
                            </div>
                        </p>
                        <p className='about__text secP'>
                            <div>
                                <img src={fuel_img} alt='star' /> {m11[lang]}:
                            </div>
                            <span className="span" />
                            <div>
                                {lang === '0' ? car.yoqilgi : car.yoqilgiru}
                            </div>
                        </p>
                        <p className='about__text secP'>
                            <div>
                                <img src={gear_img} alt='star' /> {car3[lang]}:
                            </div>
                            <span className="span" />
                            <div>
                                {lang === '0' ? car.perevod : car.perevodru}
                            </div>
                        </p>
                        <p className='about__text secP'>
                            <div>
                                <img src={transmission_img} className="gear-img" alt='star' />  {m12[lang]}:
                            </div>
                            <span className="span" />
                            <div>
                                {lang === '0' ? car.transmission : car.transmissionru}
                            </div>
                        </p>
                        <p className='about__text secP'>
                            <div>
                                <img src={car_img} alt='star' /> {m13[lang]}:
                            </div>
                            <span className="span" />
                            <div>
                                {lang === '0' ? car.kuzuv : car.kuzuvru}
                            </div>
                        </p>
                        <p className='about__text secP'>
                            <div>
                                <img src={speed_img} alt='star' /> {m14[lang]}:
                            </div>
                            <span className="span" />
                            <div>
                                {car?.yurgani}
                            </div>
                        </p>
                        {/* <p className='about__text secP'>
                            <div>
                                <img src={speed_img} alt='star'/> {status[lang]}:
                            </div>
                            <span className="span"/>
                            <div>
                                {car?.credit}
                            </div>
                        </p> */}
                    </div>
                    <div className='sale-card pt50p'>
                        <div className='sale-card_wrapper'>
                            <span className='card-price card-price_sum'>
                                {m5[lang]}
                                <span className='valyut_uzb'></span>
                            </span>
                            <span className='card-price'>
                                {Number(car.narxi).toLocaleString().replace(/,/g, ' ')} UZS
                            </span>
                            <div className='input-wrap'>
                                <span className='material-symbols-outlined'>person</span>
                                <input
                                    onChange={e => setData({ ...data, name: e.target.value })}
                                    value={data.name}
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
                        <div className='d-flex justify-content-center mb50'>
                            <Button className='me-2 slider__body-button' onClick={() => createOrder()}>
                                {m3[lang]}
                            </Button>
                        </div>
                        <div className="abs">
                            {/* <Button className='me-2' onClick={() => handleNav()}>
                                {kreditcal[lang]}
                            </Button>
                            <Button className='' onClick={() => handleNav1()}>
                                {kredit[lang]}
                            </Button> */}
                        </div>
                    </div>
                    <div className='comment'>
                        <div className='comment_card'>
                            <div className='comment_title'>
                                <h4 type='button'>{m4[lang]}</h4>
                            </div>
                            <h4 className='comment_first'>
                                <span></span>
                                <h2>{car.madel}</h2>
                                <span></span>
                            </h4>
                            <div
                                className='comment_second'
                                dangerouslySetInnerHTML={createMarkup()}
                            />
                        </div>
                    </div>

                </div>
            </section>
        </main>
    ) : (
        <h1>No data</h1>
    )
}

export default More
