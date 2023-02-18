import { useSelector } from 'react-redux'
import { Language } from '../../lang/Languages'
import TradeIn from '../../images/tradein.png'
import '../../components/style.css'

function Trade() {
    const { lang } = useSelector(state => state.lang)

    const {t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11} = Language

    return (
        <main>
            <div className='social__title'>
                <span></span>
                <h2>{t1[lang]}</h2>
                <span></span>
            </div>
            <div className='pages-container'>
                <img className='vikup-img vikup-img_trade' src={TradeIn} alt='TradeIn' />
                <div className='komissia-wrap'>
                    <h3>{t2[lang]}</h3>
                    <ul className='komissia-list'>
                        <li>{t3[lang]}</li>
                        <li>{t4[lang]}</li>
                        <li>{t5[lang]}</li>
                        <li>{t6[lang]}</li>
                        <h3>{t7[lang]}</h3>
                        <li>{t8[lang]}</li>
                        <li>{t9[lang]}</li>
                        <li>{t10[lang]}</li>
                        <li>{t11[lang]}</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Trade
