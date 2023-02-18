/* eslint-disable jsx-a11y/iframe-has-title */
import { useSelector } from 'react-redux'
import Avtosalon from '../../images/ravtosalon.jpg'
import mashinalar from '../../images/mashinalar.jpeg'
import malibu from "../../images/malibu2.jpg"
import { Language } from '../../lang/Languages'
import '../../components/style.css'

function Aboutus() {
    const { lang } = useSelector(state => state.lang)

    const { a1, ab1, ab2, ab3, ab4, ab5, ab6, ab7, ab8 } = Language
  return (
    <main>
        <div className='social__title'>
                <span></span>
                <h2>{a1[lang]}</h2>
                <span></span>
            </div>
            <div className='pages-container'>
                <img className='about-img' src={Avtosalon} alt='' />
                <div className='komissia-wrap'>
                    <ul className='komissia-list'>
                        <li>{ab1[lang]}</li>
                        <li>{ab2[lang]}</li>
                        <li>{ab3[lang]}</li>
                        <li>{ab4[lang]}</li>
                    </ul>
                </div>
                <img className='komissia-img' src={mashinalar} alt="malibu_2"/>
                <div className='komissia-wrap'>
                  <h3>{ab5[lang]}</h3>
                    <ul className='komissia-list'>
                        <li>{ab6[lang]}</li>
                    </ul>
                </div>
                <img src={malibu} className="about-img" alt="" />
                <div className='komissia-wrap'>
                  <h3>{ab7[lang]}</h3>
                    <ul className='komissia-list'>
                        <li>{ab8[lang]}</li>
                    </ul>
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
        </main>
  )
}

export default Aboutus
