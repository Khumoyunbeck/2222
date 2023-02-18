import telegram_i from '../../images/telegram_i.png'
import instagram_i from "../../images/intagram_i.png"
import facebook_i from "../../images/facebook_i.png"
import youtube_i from "../../images/youtube_i.png"
import { useSelector } from "react-redux";
import { Language } from "./../../lang/Languages";


function Footer() {
  const { lang } = useSelector((state) => state.lang);

  const {  f2,  f4, f5, f6, f7, f8, f9, BIZNING_MIJOZLAR, Kompaniya } = Language;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <div className="footer__block">
            <h4 className="footer__title">{Kompaniya[lang]}</h4>
            <div className="footer__line"></div>
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__link" href="/aboutus">
                  {f7[lang]}
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="/ourclients">
                  {BIZNING_MIJOZLAR[lang]}
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="/ourteam">
                  {f4[lang]}
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="/qualitypolicy">
                  {f5[lang]}
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="/vacancy">
                  {f6[lang]}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__block">
            <h4 className="footer__title">{f2[lang]}</h4>
            <div className="footer__line"></div>
            <ul className="footer__list">
              {/* <li className="footer__item">
                        <a className='footer__link' href="#">ПОКУПАЙ КАСКО И ПОЛУЧАЙ РАСШИРЕНИЕ</a>
                     </li> */}
              <li className="footer__item">
                <a className="footer__link" href="/trade_in">
                  {f8[lang]}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__block">
            <h4 className="footer__title">{f9[lang]}</h4>
            <div className="footer__line"></div>
            <div className='social_icon_container'>
            <a href="https://t.me/R_Auto_uz"><img className='social_icon' src={telegram_i} alt="telegram" /></a>
            <a href="https://www.instagram.com/rauto.uz/"><img className='social_icon' src={instagram_i} alt="instagram" /></a>
            <a href=" https://www.facebook.com/RetailAutoCar"><img className='social_icon' src={facebook_i} alt="facebook" /></a>
            <a href="https://www.youtube.com"><img className='social_icon social_icon_yt' src={youtube_i} alt="youtube" /></a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
