/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Button, Divider, Form, Input } from "antd";
import { useSelector } from "react-redux";
import { Language } from "../../lang/Languages";
import phone_i from "../../assets/icons/phone.png";
import mail_i from "../../assets/icons/mail.png";
// import facebook_icon from "../../assets/icons/facebook.png";
// import telegram_i from '../../images/telegram_i.png'
import icon_location from "../../assets/icons/location_white.png";
// import instagram_icon from "../../assets/icons/instagram.png";
import calendar_i from "../../images/calendar.png";

function Contact(props) {
    const { lang } = useSelector(state => state.lang)
    const { Kontaktlar, contactInfo, contactMail, m1, m2,  req, name, desc, send,  phone, adres, f3, ishGraf, ishVaqt1, ishVaqt2, ishVaqt3 } = Language;

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const { TextArea } = Input;

    return (
        <div>
            <div>
                <Divider className="divider">
                    {Kontaktlar[lang]}
                </Divider>
            </div>
            <div className="w-box">
                <div className="w-b1">
                    <div className="t1">
                        {contactInfo[lang]}
                    </div>
                    <div className="n1">
                        {f3[lang]}
                    </div>
                    <ul className="tr1">
                        <p>
                            <address><img
                                src={icon_location}
                                className="contact-adres-icon"
                                alt="location"
                            />{adres[lang]}</address>
                        </p>
                    </ul>
                    <div className="n1">
                        {ishGraf[lang]}
                    </div>
                    <ul className="tr1 contact-page-list">
                        <p>
                            <img src={calendar_i} className="headers__icon mr10" alt="work-time" />
                            {ishVaqt1[lang]}
                        </p>
                        <p>
                            <img src={calendar_i} className="headers__icon mr10" alt="work-time" />
                            {ishVaqt2[lang]}
                        </p>
                        <p>
                            <img src={calendar_i} className="headers__icon mr10" alt="work-time" />
                            {ishVaqt3[lang]}
                        </p>
                    </ul>
                    <div className="n1">
                        {phone[lang]}
                    </div>
                    <ul className="tr_phone">
                        <a href="tel: +998951690988" className="headers__link">
                            <img
                                src={phone_i}
                                className="headers____icon"
                                alt="tel"
                            />{" "}
                            +998 95 169 09 88
                        </a>
                        <a href="tel: +998974500988" className="headers__link">
                            <img
                                src={phone_i}
                                className="headers____icon"
                                alt="tel"
                            />{" "}
                            +998 97 450 09 88
                        </a>
                        <a href="tel: +998971250988" className="headers__link">
                            <img
                                src={phone_i}
                                className="headers____icon"
                                alt="tel"
                            />{" "}
                            +998 97 125 09 88
                        </a>
                    </ul>
                    <div className="n1">
                        {contactMail[lang]}
                    </div>
                    <ul className="tr_phone">
                        <a href="mailto: retailauto@mail.ru" className="headers__link">
                            <img src={mail_i} className="contact-mail-icon" alt="mail" />
                            retailauto@mail.ru
                        </a>
                    </ul>
                </div>
                <div className="w-b1">
                    <Form
                        name="basic"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        layout="vertical"
                    >
                        <Form.Item
                            label={name[lang]}
                            name="username"
                            rules={
                                [
                                    {
                                        required: true, message: req[lang]
                                    }
                                ]
                            }
                        >
                            <Input className="inp" type="text" placeholder={m1[lang]} />
                        </Form.Item>

                        <Form.Item
                            label={phone[lang]}
                            name="phone"
                            rules={[{ required: true, message: req[lang] }]}
                        >
                            <Input className="inp" type="number" placeholder={m2[lang]} />
                        </Form.Item>

                        {/* <Form.Item
                            label={mail[lang]}
                            name="email"
                            rules={[{ required: false, message: req[lang] }]}
                        >
                            <Input className="inp" type="email" placeholder={mailA[lang]} />
                        </Form.Item> */}

                        <Form.Item
                            label={desc[lang]}
                            name="description"
                            rules={[{ required: true, message: req[lang] }]}
                        >
                            <TextArea rows={4} />
                        </Form.Item>

                        <Form.Item className="sub">
                            <Button type="primary" htmlType="submit" style={{ float: "right" }}>
                                {send[lang]}
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <div className="map-address">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.7857496774095!2d69.22942246066775!3d41.26222225640503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0218265ee3%3A0x1aee9d99385c1d80!2srauto.uz!5e0!3m2!1suz!2s!4v1657195601167!5m2!1suz!2s"
                    width="100%"
                    height="330"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}

export default Contact;
