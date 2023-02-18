/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Language } from "../../lang/Languages";
// Import images
import header_icon from "../../assets/icons/location.svg";
import header_icon_two from "../../assets/icons/smartphone.svg";
import header_icon_three from "../../assets/icons/email.svg";
import search_icon from "../../assets/icons/search.svg";
import search_icon_two from "../../assets/icons/search.svg";
import ruFlag from "../../images/ru.png";
import uzFlag from "../../images/uz.png";
import logo_icon from "../../assets/img/logo-rauto.png";
import close_i from "../../assets/icons/close.png";
import arrow_i from "../../assets/icons/arrow.png";
import phone_i from "../../assets/icons/phone.png";
import mail_i from "../../assets/icons/mail.png";
import facebook_icon from "../../assets/icons/facebook.png";
import telegram_i from '../../images/telegram_i.png'
import icon_location from "../../assets/icons/location_white.png";
import instagram_icon from "../../assets/icons/instagram.png";
import calendar_i from "../../images/calendar.png";

import { changeLang } from "../../store/language";
import "../style.css";
import { TbHeartHandshake } from "react-icons/tb";
import { AiOutlineCar, AiOutlineInfoCircle } from "react-icons/ai";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdPhoneEnabled } from "react-icons/md";
import { HiUser } from "react-icons/hi";
import { GoCalendar } from "react-icons/go";
import { FaBalanceScale } from "react-icons/fa";

const Header = (props) => {
    const dispatch = useDispatch();
    const [collapseOneOpen, setCollapseOneOpen] = useState(false);
    const [collapseTwoOpen, setCollapseTwoOpen] = useState(false);
    const [collapseThreeOpen, setCollapseThreeOpen] = useState(false);

    const { lang } = useSelector((state) => state.lang);

    const {
        asosiy,
        adres,
        contacts,
        menu,
        aksia,
        foydali,
        Avtomobillar,
        Xizmatlar,
        Kompaniya,
        Kontaktlar,
        Kirish,
        komissia,
        vikup,
        otsenka,
        tradein,
        insurance,
        credit,
        autonumber,
        autotanlov,
        photosale,
        ishVaqt1,
        ishVaqt2,
        ishVaqt3,
        a4,
        a5,
        a6,
        BIZNING_MIJOZLAR,
        f4,
        f5,
        f6,
        f7,
    } = Language;

    function search() {
        const searchBtns = document.querySelectorAll(".search");
        const searchInput = document.querySelector(".search-input");
        const closeSearch = document.querySelector(".close-search");

        if (searchBtns.length > 0) {
            for (let index = 0; index < searchBtns.length; index++) {
                const searchBtn = searchBtns[index];
                if (!searchInput.classList.contains("_open")) {
                    searchBtn.addEventListener("click", function (e) {
                        searchInput.classList.add("_open");
                    });
                }
            }
        }
        if (closeSearch) {
            if (!searchInput.classList.contains("_open")) {
                closeSearch.addEventListener("click", function (e) {
                    searchInput.classList.remove("_open");
                });
            }
        }
    }

    function OPEN() {
        const menuOpen = document.querySelectorAll(".menu__open");
        const menu = document.querySelector(".menu");
        if (menuOpen.length > 0) {
            for (let index = 0; index < menuOpen.length; index++) {
                const btn = menuOpen[index];
                btn.addEventListener("click", function (e) {
                    menu.classList.add("_open");
                });
            }
        }
        const menuClose = document.querySelectorAll(".menu__close");
        for (let index = 0; index < menuClose.length; index++) {
            const btn = menuClose[index];
            btn.addEventListener("click", function (e) {
                if (menu.classList.contains("_open")) {
                    menu.classList.remove("_open");
                }
            });
        }
    }

    useEffect(() => {
        if (!lang) localStorage.setItem("lang", 0);
    }, [lang]);

    return (
        <React.Fragment>
            <header className="headers">
                <div className="headers__info">
                    <div className="containers">
                        <div className="headers__location">
                            <img src={header_icon} className="headers__icon" alt="location" />
                            <span>{adres[lang]}</span>
                            <div className="dropdown dropdown_time">
                                <button className="dropbtn">
                                    <img src={calendar_i} className="headers__icon" alt="work-time" />
                                    {ishVaqt1[lang]}
                                </button>
                                <div className="dropdown-content">
                                    <span>
                                        <img src={calendar_i} className="headers__icon" alt="work-time" />
                                        {ishVaqt1[lang]}
                                    </span>
                                    <br />
                                    <span>
                                        <img src={calendar_i} className="headers__icon" alt="work-time" />
                                        {ishVaqt2[lang]}
                                    </span>
                                    <br />
                                    <span>
                                        <img src={calendar_i} className="headers__icon" alt="work-time" />
                                        {ishVaqt3[lang]}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="headers__connection">
                            <div className="dropdown">
                                <button className="dropbtn">
                                    <img
                                        src={header_icon_two}
                                        className="headers__icon"
                                        alt="location"
                                    />
                                    {contacts[lang]}
                                </button>
                                <div className="dropdown-content">
                                    <a href="tel: +998951690988">+998 95 169-09-88</a>
                                    <a href="tel: +998974500988">+998 97 450-09-88</a>
                                    <a href="tel: +998971250988">+998 97 125-09-88</a>
                                </div>
                            </div>
                            <a href="mailto:@retailauto@mail.ru" className="headers__email">
                                <img
                                    src={header_icon_three}
                                    className="headers__icon"
                                    alt="icon"
                                />
                                retailauto@mail.ru
                            </a>
                        </div>
                        <div className="headers__icons">
                            <button
                                className="translator mr-3"
                                onClick={() => dispatch(changeLang("0"))}
                            >
                                <img src={uzFlag} alt="translator" width="30px" />
                            </button>
                            <button
                                className="translator mr-3"
                                onClick={() => dispatch(changeLang("1"))}
                            >
                                <img src={ruFlag} alt="translator" width="30px" />
                            </button>
                            <Link to="/compare" className="headers__icons-item">
                                <button
                                    onClick={props.showCompare}
                                >
                                    <FaBalanceScale />
                                </button>
                            </Link>
                            <a href="/" onClick={search} className="headers__icons-item">
                                <div className="search-input">
                                    <input type="text" />
                                    <span className="close-search"></span>
                                </div>
                                <button className="search">
                                    <img
                                        src={search_icon}
                                        className="headers__icon"
                                        alt="location"
                                    />
                                </button>
                            </a>
                        </div>
                        <div className="headers__respons">
                            <div>
                                <button className="search headers__item">
                                    <img
                                        src={search_icon_two}
                                        className="headers__icon"
                                        alt="icon"
                                    />
                                </button>
                            </div>
                            <Link to="/compare" className="headers__icons-item">
                                <button
                                    onClick={props.showCompare}
                                >
                                    <FaBalanceScale />
                                </button>
                            </Link>
                            <div className="dropdown">
                                <button className="dropbtn">
                                    <img
                                        src={header_icon_two}
                                        className="headers__icon"
                                        alt="location"
                                    />
                                    {contacts[lang]}
                                </button>
                                <div className="dropdown-content">
                                    <a href="tel: +998951690988">95 169-09-88</a>
                                    <a href="tel: +998974500988">97 450-09-88</a>
                                    <a href="tel: +998971250988">97 125-09-88</a>
                                </div>
                            </div>
                            <a onClick={OPEN} className="menu__icon nav-icon menu__open">
                                <span></span>
                            </a>
                        </div>
                        <div className="menu headers__item">
                            <div className="menu__body">
                                <h2 className="menu__title">{menu[lang]}</h2>
                                <a className="menu__close">
                                    <img
                                        src={close_i}
                                        className="headers_close_icon"
                                        alt="cross"
                                    />
                                </a>
                                <div className="menu__block menu__block-1">
                                    <div className="menu__link">
                                        <a
                                            type="button"
                                            onClick={() => setCollapseOneOpen(!collapseOneOpen)}
                                        >
                                            {asosiy[lang]}
                                        </a>
                                        <div className="menu__link-arrow">
                                            <img
                                                src={arrow_i}
                                                className="headers___icon"
                                                alt="icon"
                                            />
                                        </div>
                                    </div>
                                    {collapseOneOpen ? (
                                        <>
                                            <div className="menu__link">
                                                <Link to="/aksiya">
                                                    <p>{aksia[lang]}</p>
                                                </Link>
                                            </div>
                                            <div className="menu__link">
                                                <Link to="/useful">
                                                    <p>{foydali[lang]}</p>
                                                </Link>
                                            </div>
                                        </>
                                    ) : (
                                        ""
                                    )}
                                    <div className="menu__link">
                                        <a href="/cars">{Avtomobillar[lang]}</a>
                                        <div className="menu__link-arrow">
                                            <img
                                                src={arrow_i}
                                                className="headers___icon"
                                                alt="icon"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="menu__link"
                                        onClick={() => setCollapseTwoOpen(!collapseTwoOpen)}
                                    >
                                        <p>{Xizmatlar[lang]}</p>
                                        <div className="menu__link-arrow">
                                            <img
                                                src={arrow_i}
                                                className="headers___icon"
                                                alt="icon"
                                            />
                                        </div>
                                    </div>
                                    {collapseTwoOpen ? (
                                        <>
                                            <div className="menu__link">
                                                <a href="/komissia">{komissia[lang]}</a>
                                            </div>
                                            <div className="menu__link">
                                                <a href="/vikupAvto">{vikup[lang]}</a>
                                            </div>
                                            <div className="menu__link">
                                                <a href="/creditauto">{credit[lang]}</a>
                                            </div>
                                            <div className="menu__link">
                                                <a href="/otsenka">{otsenka[lang]}</a>
                                            </div>
                                            <div className="menu__link">
                                                <a href="/trade_in">{tradein[lang]}</a>
                                            </div>
                                            <div className="menu__link">
                                                <a href="/insurance">{insurance[lang]}</a>
                                            </div>

                                            <div className="menu__link">
                                                <a href="https://avtoraqam.uzex.uz/ru" target={"blank"}>
                                                    {autonumber[lang]}
                                                </a>
                                            </div>
                                            <div className="menu__link">
                                                <a href="/autopodbor">{autotanlov[lang]}</a>
                                            </div>
                                            <div className="menu__link">
                                                <a href="/photosale">{photosale[lang]}</a>
                                            </div>
                                        </>
                                    ) : (
                                        ""
                                    )}
                                    <div
                                        className="menu__link"
                                        onClick={() => setCollapseThreeOpen(!collapseThreeOpen)}
                                    >
                                        <a href="#">{Kompaniya[lang]}</a>
                                        <div className="menu__link-arrow">
                                            <img
                                                src={arrow_i}
                                                className="headers___icon"
                                                alt="icon"
                                            />
                                        </div>
                                    </div>
                                    {collapseThreeOpen ? (
                                        <>
                                            <div className="menu__link">
                                                <a href="/ourteam">{f4[lang]}</a>
                                            </div>
                                            <div className="menu__link">
                                                <a href="/qualitypolicy">{f5[lang]}</a>
                                            </div>
                                            <div className="menu__link">
                                                <a href="/vacancy">{f6[lang]}</a>
                                            </div>
                                            <div className="menu__link">
                                                <a href="/ourclients">{BIZNING_MIJOZLAR[lang]}</a>
                                            </div>
                                            <div className="menu__link">
                                                <a href="/aboutus">{f7[lang]}</a>
                                            </div>
                                        </>
                                    ) : (
                                        ""
                                    )}
                                    <div className="menu__link">
                                        <Link to="/contacts">{Kontaktlar[lang]}</Link>
                                        <div className="menu__link-arrow">
                                            <img
                                                src={arrow_i}
                                                className="headers___icon"
                                                alt="icon"
                                            />
                                        </div>
                                    </div>
                                    <div className="menu__link">
                                        <Link to={"/user"}>{Kirish[lang]}</Link>
                                    </div>
                                    <div className="menu__link">
                                        <button
                                            className="translator mr-3"
                                            onClick={() => dispatch(changeLang("0"))}
                                        >
                                            <img src={uzFlag} alt="translator" width="20px" />
                                        </button>
                                        <button
                                            className="translator mr-3"
                                            onClick={() => dispatch(changeLang("1"))}
                                        >
                                            <img src={ruFlag} alt="translator" width="20px" />
                                        </button>
                                    </div>
                                </div>
                                <div className="menu__block">
                                    <div className="dropdown ">
                                        <button className="dropbtn dropbtn_color">
                                            <GoCalendar className="mr11" />
                                            {ishVaqt1[lang]}
                                        </button>
                                        <div className="dropdown-content">
                                            <span>
                                                <img src={calendar_i} className="headers__icon mr10" alt="work-time" />
                                                {ishVaqt1[lang]}
                                            </span>
                                            <br />
                                            <span>
                                                <img src={calendar_i} className="headers__icon mr10" alt="work-time" />
                                                {ishVaqt2[lang]}
                                            </span>
                                            <br />
                                            <span>
                                                <img src={calendar_i} className="headers__icon mr10" alt="work-time" />
                                                {ishVaqt3[lang]}
                                            </span>
                                        </div>
                                    </div>
                                    <a href="tel: +998951690988" className="headers__link">
                                        <img
                                            src={phone_i}
                                            className="headers____icon"
                                            alt="tel"
                                        />{" "}
                                        95 169 09 88
                                    </a>
                                    <a href="tel: +998974500988" className="headers__link">
                                        <img
                                            src={phone_i}
                                            className="headers____icon"
                                            alt="tel"
                                        />{" "}
                                        97 450 09 88
                                    </a>
                                    <a href="tel: +998971250988" className="headers__link">
                                        <img
                                            src={phone_i}
                                            className="headers____icon"
                                            alt="tel"
                                        />{" "}
                                        97 125 09 88
                                    </a>
                                    <a href="mailto: retailauto@mail.ru" className="headers__link">
                                        <img src={mail_i} className="headers____icon" alt="mail" />
                                        retailauto@mail.ru
                                    </a>
                                </div>
                                <div className="menu__block menu__social">
                                    <a href="https://www.facebook.com/RetailAutoCar" className="menu__social-icon">
                                        <img
                                            src={facebook_icon}
                                            className="headers_social_icon"
                                            alt="icon"
                                        />
                                    </a>
                                    <a href="https://www.instagram.com/rauto.uz/" className="menu__social-icon">
                                        <img
                                            src={instagram_icon}
                                            className="headers_social_icon"
                                            alt="icon"
                                        />
                                    </a>
                                    <a href="https://t.me/R_Auto_uz" className="menu__social-icon">
                                        <img
                                            src={telegram_i}
                                            className="headers_social_icon_tg"
                                            alt="icon"
                                        />
                                    </a>
                                </div>
                                <div className="menu__block menu__block-location">
                                    <img
                                        src={icon_location}
                                        className="headers__icon"
                                        alt="location"
                                    />
                                    <address>{adres[lang]}</address>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bth">
                    <div className="lwr">
                        <Link to="/">
                            <img src={logo_icon} alt="logo" />
                        </Link>
                    </div>
                    <div className="linkswr">
                        <div className="lyu">
                            <div className="inLyu">
                                <div className="iop">
                                    <IoStorefrontOutline className="iconCol" />
                                </div>
                                <div className="treww brd">
                                    {asosiy[lang]}
                                </div>
                                <div className="absch">
                                    <div className="labsch">
                                        <Link to="/aksiya">
                                            <div className="ltr">
                                                {aksia[lang]}
                                            </div>
                                        </Link>

                                    </div>
                                    <div className="rabsch">
                                        <Link to="/useful">
                                            <div className="ltr">
                                                {foydali[lang]}
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lyu">
                            <Link to="/cars">
                                <div className="inLyu">
                                    <div className="iop">
                                        <AiOutlineCar className="iconCol" />
                                    </div>
                                    <div className="treww">
                                        {Avtomobillar[lang]}
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="lyu">
                            <div className="inLyu">
                                <div className="iop">
                                    <TbHeartHandshake className="iconCol" />
                                </div>
                                <div className="treww brd">
                                    {Xizmatlar[lang]}
                                </div>
                                <div className="absch">
                                    <div className="labsch">
                                        <Link to="/komissia">
                                            <div className="ltr">{komissia[lang]}</div>
                                        </Link>
                                        <Link to="/vikupAvto">
                                            <div className="ltr">{vikup[lang]}</div>
                                        </Link>
                                        <Link to={"/creditauto"}>
                                            <div className="ltr">{credit[lang]}</div>
                                        </Link>
                                        <Link to="/otsenka">
                                            <div className="ltr">{otsenka[lang]}</div>
                                        </Link>
                                        <Link to="/trade_in">
                                            <div className="ltr">{tradein[lang]}</div>
                                        </Link>
                                        <Link to={"/insurance"}>
                                            <div className="ltr">{insurance[lang]}</div>
                                        </Link>

                                    </div>
                                    <div className="rabsch">
                                        <a href="https://avtoraqam.uzex.uz/ru" target={"blank"}>
                                            <div className="ltr">{autonumber[lang]}</div>
                                        </a>
                                        <Link to={"/autopodbor"}>
                                            <div className="ltr">{autotanlov[lang]}</div>
                                        </Link>
                                        <Link to={"/photosale"}>
                                            <div className="ltr">{photosale[lang]}</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lyu">
                            <div className="inLyu">
                                <div className="iop">
                                    <AiOutlineInfoCircle className="iconCol" />
                                </div>
                                <div className="treww brd">
                                    {Kompaniya[lang]}
                                </div>
                                <div className="absch">
                                    <div className="labsch">
                                        <Link to="/aboutus">
                                            <div className="ltr wwd">{f7[lang]}</div>
                                        </Link>
                                        <Link to="/qualitypolicy">
                                            <div className="ltr wwd">{a5[lang]}</div>
                                        </Link>
                                        <Link to={"/vacancy"}>
                                            <div className="ltr wwd">{a6[lang]}</div>
                                        </Link>
                                    </div>
                                    <div className="rabsch">
                                        <Link to="/ourclients">
                                            <div className="ltr">{BIZNING_MIJOZLAR[lang]}</div>
                                        </Link>
                                        <Link to="/ourteam">
                                            <div className="ltr">{a4[lang]}</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lyu">
                            <Link to="/contacts">
                                <div className="inLyu">
                                    <div className="iop">
                                        <MdPhoneEnabled className="iconCol" />
                                    </div>
                                    <div className="treww">
                                        {Kontaktlar[lang]}
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="lyu">
                            <Link to="/user">
                                <div className="inLyu">
                                    <div className="iop">
                                        <HiUser className="iconCol" />
                                    </div>
                                    <div className="treww">
                                        {Kirish[lang]}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <div style={{ height: 170 }} />
        </React.Fragment>
    );
};

export default Header;
