/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Language } from "../../lang/Languages";
import slide_one from "../../assets/img/slider/rauto-imgmn2.png";
import slide_two from "../../assets/img/slider/damas.png";
import slide_three from "../../assets/img/slider/infnexia-tinified.png";
import slide_four from "../../assets/img/slider/coba2-tinified.png";
import advantage_img1 from "../../assets/icons/ico1.png";
import advantage_img2 from "../../assets/icons/ico3.png";
import advantage_img3 from "../../assets/icons/ico4.png";
import CalCulator from "../lon/creditCalculator/CalCulator";

import { Swiper, SwiperSlide } from "swiper/react";
import "../style.css";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import SwiperCore, {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import { Link } from "react-router-dom";
import CardCar from "../card_car/Card_car";
import { injectStyle } from "react-toastify/dist/inject-style";
import { useSelector } from "react-redux";
import { MainApi } from "../../api";
import { Col, Input, Row, Slider } from "antd";
import { StyledModal } from "./home.e";

if (typeof window !== "undefined") {
  injectStyle();
}

function Home({ addCompare }) {
  const [num, setNum] = useState("");
  const [fCars, setFCars] = useState([]);
  const [cars, setCars] = useState([]);
  const [clients, setClients] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [data, setData] = useState({
    kuzov: "",
    yili_from: 2005,
    yurgani_from: 0,
    narxi_from: 0,
    yili_to: 2012,
    yurgani_to: 200000,
    narxi_to: 500000000,
  });

  const { lang } = useSelector((state) => state.lang);

  const {
    six,
    second,
    first,
    sotishMain,
    olishMain,
    yoki,
    fourth,
    five,
    seven,
    eight,
    nine,
    eleven,
    twelve,
    thirdteen,
    Gacha,
    Kilometr,
    Narxi,
    NarxiniAniqlash,
    Marka,
    Model,
    Probeg,
    Aloqa,
    AFZALLIK,
    Minimal,
    pasport,
    Jozibador,
    BizdaFoydali,
    Ertaroq,
    IstalganSana,
    BIZNING_MIJOZLAR,
    AKSIYALAR_CHEGIRMALAR,
    Batafsil,
    BARCHA_TAKLIFLAR,
    kuzovA,
    kuzovB,
    kuzovC,
    kuzovD,
    kuzuv,
    narxiA,
    narxiB,
    narxiC,
    narxiD,
    m1,
    m2,
    mailA,
    yearInput,
    sumInput,
    saralangan,
  } = Language;

  const handleOk = () => {
    setIsModalVisible(false);
    setFCars([]);
  };
  const [color, setColor] = useState("");
  const handleCancel = () => {
    setIsModalVisible(false);
    setFCars([]);
  };

  const getCars = async () => {
    await axios
      .get(`${MainApi}/car/all`)
      .then((res) => setCars(res.data?.data))
      .catch((err) => new Error(err));
  };

  const getClients = async () => {
    await axios
      .get(`${MainApi}/client/all`)
      .then((res) => {
        setClients(res?.data?.data);
      })
      .catch((err) => new Error(err));
  };

  const onChange1 = (value) => {
    setData({ ...data, yili_to: value[1], yili_from: value[0] });
    if (value[1] >= 2016) {
      setColor("div_button")
    } else {
      setColor("")
    }
  };

  const onChange2 = (value) => {
    setData({ ...data, yurgani_to: value[1], yurgani_from: value[0] });

  };

  const onChange3 = (value) => {
    setData({ ...data, narxi_to: value[1], narxi_from: value[0] });
  };
  useEffect(() => {
    getCars();
    getClients();
  }, []);

  const handleModal = async () => {
    await axios
      .get(
        `${MainApi}/car/query?yili_dan=${data.yili_from}
        &yili_ga=${data.yili_to}&yurgani_dan=${data.yurgani_from}&
        yurgani_ga=${data.yurgani_to}&narxi_dan=${data.narxi_from}&narxi_ga=${data.narxi_to}&&madel=`
      )
      .then((r) => {
        setFCars(r?.data?.data);
      })
      .catch((err) => console.log("err", err));
    setIsModalVisible(true);
  };

  cars.length > 0 &&
    cars.forEach((item) => !!!num && !!item.aksiya && setNum("aksiya"));

  // install Swiper modules
  SwiperCore.use([Navigation]);

  useEffect(() => {
    if (!!fCars.length) {
      setIsModalVisible(true);
    }
  }, [fCars, data]);

  return (
    <div className="wrapper">
      <>
        <StyledModal
          title={saralangan[lang]}
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          className="w100"
          style={{ width: "100%", resize: "auto" }}
        >
          <Row style={{ width: "100%" }}>
            {fCars.length > 0 &&
              fCars.map((car, index) => {
                return (
                  <Col xl={8} md={12} sm={24} key={index}>
                    <CardCar  car={car} addCompare={addCompare} />
                  </Col>
                );
              })}
          </Row>
        </StyledModal>
      </>

      <main>
        <section className="slider">
          <div className="slider__title">
            <span>Sayt test rejimida ishlamoqda</span>
            <span>Сайт работает в тестовом режиме</span>
          </div>
          <div className="row-slide">
            <div className="slider__body1">
              <h2 className="slider__body-title">{first[lang]}</h2>
              <div className="slider__body-descr">
                <span>{second[lang]}</span>
                <span>
                  <Link to="/user"> {sotishMain[lang]} </Link>
                  {yoki[lang]}
                  <Link to="/cars"> {olishMain[lang]} </Link>
                </span>
                <span>{fourth[lang]}</span>
              </div>
              <button className="slider__body-button">
                <a href="https://t.me/R_Auto_uz">{five[lang]}</a>
              </button>
            </div>
            <div className="slider__container">
              <div className="swiper swiper-slide-big">
                <Swiper
                  spaceBetween={30}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  pagination={{ clickable: true }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="swiper-wrapper"
                >
                  <SwiperSlide className="swiper-slide">
                    <a href="#">
                      <img src={slide_one} alt="img" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a href="#">
                      <img src={slide_two} alt="img" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a href="#">
                      <img src={slide_three} alt="img" />
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <a href="#">
                      <img src={slide_four} alt="img" />
                    </a>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <div className="social__title">
          <span></span>
          <h2>{six[lang]}</h2> <span></span>
        </div>
        <CalCulator />
        {/* <section className="social">
          <div className="container">
            <div className="text">
              <span>5</span>
            </div>
            <div className="text">
              <span>8</span>
            </div>
            <div className="text">
              <span>7</span>
            </div>
            <div className="text">
              <span>7</span>
            </div>
          </div>
        </section> */}
        <section className="cards-avto">
          <div className="social__title">
            <span></span>
            <h2>{seven[lang]}</h2>
            <span></span>
          </div>
          <div className="cards__row">
            <Row style={{ width: "100%" }}>
              {cars.length > 0 &&
                cars
                  ?.filter((p) => p?.aksiya !== "Aksiya")
                  ?.map((car, index) => {
                    if (index < 6 && car?.status) {
                      return (
                        <Col xxl={6} xl={8} l={8} md={12} sm={24}  key={index}>
                          <CardCar
                           
                            car={car}
                            addCompare={addCompare}
                          />
                        </Col>
                      );
                    }
                  })}
            </Row>
          </div>
          <Link
            to="/cars"
            style={{ width: "fit-content" }}
            className="cards__button"
          >
            {eight[lang]}
          </Link>
        </section>
        <section className="form-block">
          <div className="container">
            <div className="forms">
              <div className="form">
                <h3 className="form__title">{thirdteen[lang]}</h3>
                <h4 className="form__item-name">{kuzuv[lang]}</h4>
                <div className="form__item">
                  <select
                    name="met"
                    onChange={(event) =>
                      setData({
                        ...data,
                        kuzov: event.target.value,
                      })
                    }
                  >
                    <option value="Хетчбек">{kuzovA[lang]}</option>
                    <option value="Кроссовер">{kuzovB[lang]}</option>
                    <option value="Седан">{kuzovC[lang]}</option>
                    <option defaultValue value="4">
                      {kuzovD[lang]}
                    </option>
                  </select>
                </div>
                <h4 className="form__item-name">{eleven[lang]}</h4>
                <div>
                  <div>
                    {data.yili_from} {"-"} {data.yili_to}
                  </div>
                  <Slider
                    range
                    min={2000}
                    max={2023}
                    onChange={onChange1}
                    value={[data.yili_from, data.yili_to]}
                  />
                  <Row gutter={16}>
                    <Col span={12}>
                      <label htmlFor="">{twelve[lang]}</label>
                      <div className={color}>
                        <Input
                          value={data?.yili_from}
                          addonAfter={yearInput[lang]}

                          onChange={(value) =>
                            setData({
                              ...data,
                              yili_frotwelvem: value?.target?.value,
                            })
                          }
                        />
                      </div>
                    </Col>
                    <Col span={12}>
                      <label htmlFor="">{Gacha[lang]}</label>
                      <div className={color}>
                        <Input
                          value={data?.yili_to}
                          addonAfter={yearInput[lang]}

                          onChange={(value) =>
                            setData({
                              ...data,
                              yili_to: value?.target?.value,
                            })
                          }
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
                <h4 className="form__item-name">{Kilometr[lang]}</h4>
                <div className="renge-wrapper">
                  <div>
                    {data.yurgani_from} {"-"} {data.yurgani_to}
                  </div>

                  <Slider
                    range
                    min={0}
                    max={1000000}
                    onChange={onChange2}
                    value={[data.yurgani_from, data.yurgani_to]}
                  />
                  <Row gutter={16}>
                    <Col span={12}>
                      <div>
                        <label htmlFor="">{twelve[lang]}</label>
                        <Input
                          value={data?.yurgani_from}
                          addonAfter="km"
                          onChange={(value) =>
                            setData({
                              ...data,
                              yurgani_from: value?.target?.value,
                            })
                          }
                        />
                      </div>
                    </Col>
                    <Col span={12}>
                      <div>
                        <label htmlFor="">{Gacha[lang]}</label>
                        <Input
                          value={data?.yurgani_to}
                          addonAfter="km"
                          onChange={(value) =>
                            setData({
                              ...data,
                              yurgani_to: value?.target?.value,
                            })
                          }
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
                <h4 className="form__item-name">{Narxi[lang]}</h4>
                <div className="renge-wrapper">
                  <div>
                    {data.narxi_from} - {data.narxi_to} so'm
                  </div>
                  <Slider
                    range
                    min={0}
                    max={1000000000}
                    onChange={onChange3}
                    value={[data.narxi_from, data.narxi_to]}
                  />
                  <Row gutter={16}>
                    <Col span={12}>
                      <div>
                        <label>{twelve[lang]}</label>
                        <Input
                          value={data?.narxi_from}
                          addonAfter={sumInput[lang]}
                          onChange={(value) =>
                            setData({
                              ...data,
                              narxi_from: value?.target?.value,
                            })
                          }
                        />
                      </div>
                    </Col>
                    <Col span={12}>
                      <div>
                        <label>{Gacha[lang]}</label>
                        <Input
                          value={data?.narxi_to}
                          addonAfter={sumInput[lang]}
                          onChange={(value) =>
                            setData({
                              ...data,
                              narxi_to: value?.target?.value,
                            })
                          }
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
                <div style={{ marginTop: "50px" }}>
                  <button
                    className="form__button"
                    onClick={() => handleModal()}
                  >
                    {nine[lang]}
                  </button>
                </div>
              </div>
              <div className="form">
                <h3 className="form__title">{NarxiniAniqlash[lang]}</h3>
                <h4 className="form__item-name">{Marka[lang]}</h4>
                <div className="form__item">
                  <input type="text" placeholder={narxiA[lang]} />
                </div>
                <h4 className="form__item-name">{Model[lang]}</h4>
                <div className="form__item">
                  <input type="text" placeholder={narxiB[lang]} />
                </div>
                <h4 className="form__item-name">{eleven[lang]}</h4>
                <div className="form__item">
                  <input type="number" placeholder={narxiC[lang]} />
                </div>
                <h4 className="form__item-name">{Probeg[lang]}</h4>
                <div className="form__item">
                  <input type="number" placeholder={narxiD[lang]} />
                </div>
                <h4 className="form__item-name form__item-name-row">
                  {Aloqa[lang]}
                </h4>
                <div className="form__list">
                  <div className="form__item">
                    <input type="text" placeholder={m1[lang]} />
                  </div>
                  <div className="form__item">
                    <input type="number" placeholder={m2[lang]} />
                  </div>
                  <div className="form__item">
                    <input type="email" placeholder={mailA[lang]} />
                  </div>
                </div>
                <button className="form__button narx-aniqla">
                  {NarxiniAniqlash[lang]}
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="cards-slider">
          <div className="container">
            <div className="cards-slider__title">
              <span></span>
              {!!num && <h2>{AKSIYALAR_CHEGIRMALAR[lang]}</h2>} <span></span>
            </div>
            <div className="swiper cards-swiper-slide">
              <Swiper
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
                spaceBetween={30}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                pagination={{ clickable: true }}
                className="cards-slider__cadrs swiper-wrapper"
              >
                {cars?.length &&
                  cars?.map((item, index) => {
                    if (item.aksiya === "Aksiya" && item?.status)
                      return (
                        <SwiperSlide className="swiper-slide" key={index}>
                          <div className=" cards-slider__card card">
                            <div className="card__img">
                              <img
                                src={item.photo[0]}
                                alt="img"
                                className="img"
                              />
                            </div>
                            <a href=" " className="card__title">
                              {item.madel}
                            </a>
                            <ul className="card__info"></ul>
                            <div className="card__line"></div>
                            <div className="card__price">
                              <strong className="red">
                                {Number(item.narxi)
                                  .toLocaleString()
                                  .replace(/,/g, " ")}
                              </strong>{" "}
                              <span>UZS</span>
                            </div>
                            <div className="card__buttons">
                              <Link
                                to={`more/${item._id}`}
                                className="card__button-mini"
                              >
                                {Batafsil[lang]}
                              </Link>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                  })}
              </Swiper>
            </div>

            {!!num && (
              <Link to="/cars" className="cards-swiper__button">
                {BARCHA_TAKLIFLAR[lang]}
              </Link>
            )}
          </div>
        </section>
        <section className="advantages">
          <div className="container">
            <div className="advantages__title cards-slider__title">
              <span></span>
              <h2>{AFZALLIK[lang]}</h2> <span></span>
            </div>
            <div className="advantages__row">
              <div className="advantages__item">
                <div className="advantages__img">
                  <img src={advantage_img1} alt="icons" />
                </div>
                <div className="advantages__name">{Minimal[lang]}</div>
                <div className="advantages__descr">{pasport[lang]}</div>
              </div>
              <div className="advantages__item">
                <div className="advantages__img">
                  <img src={advantage_img2} alt="icons" />
                </div>
                <div className="advantages__name">{Jozibador[lang]}</div>
                <div className="advantages__descr">{BizdaFoydali[lang]}</div>
              </div>
              <div className="advantages__item">
                <div className="advantages__img">
                  <img src={advantage_img3} alt="icons" />
                </div>
                <div className="advantages__name">{Ertaroq[lang]}</div>
                <div className="advantages__descr">{IstalganSana[lang]}</div>
              </div>
            </div>
          </div>
        </section>
        <section className="clients">
          <div className="container">
            <div className="clients__title cards-slider__title">
              <span></span>
              <h2>{BIZNING_MIJOZLAR[lang]}</h2> <span></span>
            </div>
            <div className=" swiper clients-swiper-slide">
              <Swiper
                spaceBetween={30}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                navigation={true}
                pagination={{ clickable: true }}
                className="swiper-wrapper"
              >
                {clients.length &&
                  clients?.map((item, index) => {
                    console.log(item, "item");
                    return (
                      <SwiperSlide className="swiper-slide" key={index}>
                        <div className="clients__item">
                          <div className="clients__img">
                            <img src={item?.photo} alt="icons" />
                          </div>
                          <div className="clients__name">{item?.name}</div>
                          <div className="clients__name">{item?.region}</div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </div>
        </section>
        <div className="map-address">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.7857496774095!2d69.22942246066775!3d41.26222225640503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0218265ee3%3A0x1aee9d99385c1d80!2srauto.uz!5e0!3m2!1suz!2s!4v1657195601167!5m2!1suz!2s"
            width="100%"
            height="330"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
