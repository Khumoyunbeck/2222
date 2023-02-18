import React, {useEffect, useState} from "react";
import axios from "axios";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import {Language} from "../../lang/Languages";

import {useSelector} from "react-redux";

import {Pagination} from "swiper";
import {MainApi} from "../../api";

function Ourclients() {
    const [clients, setClients] = useState([])
    const getClients = async () => {
        await axios
            .get(`${MainApi}/client/all`)
            .then((res) => setClients(res?.data?.data))
            .catch((err) => new Error(err));
    };

    useEffect(() => {
        getClients();
    }, []);

    const {lang} = useSelector((state) => state.lang);

    const {
        BIZNING_MIJOZLAR,
    } = Language;
    return (
        <div className="clients">
            <div className="container">
                <div className="clients__title cards-slider__title">
                    <span></span>
                    <h2>{BIZNING_MIJOZLAR[lang]}</h2> <span></span>
                </div>
                <div className=" swiper clients-swiper-slide">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{clickable: true}}
                        className="swiper-wrapper"
                        breakpoints={{
                            200: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 1,
                            },
                            1100: {
                                slidesPerView: 2,
                            },
                            1300: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {clients &&
                        clients.map((item, index) => (
                            <SwiperSlide className="swiper-slide" key={index}>
                                <div className="clients__item">
                                    <div className="clients__img">
                                        <img src={item.photo} alt="icons"/>
                                    </div>
                                    <div className="clients__name">{item.name}</div>
                                    <div className="clients__name">{item.region}</div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Ourclients
