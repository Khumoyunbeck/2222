import { useSelector } from 'react-redux'
import { Language } from '../../lang/Languages'
// import Insurance from '../../images/insurance.jpg'
import '../../components/style.css'

function Sugurta() {
    const { lang } = useSelector(state => state.lang)

    const {s1, s2, s3, s4} = Language

    return (
        <main>
            <div className='social__title'>
                <span></span>
                <h2>{s1[lang]}</h2>
                <span></span>
            </div>
            <div className='pages-container'>
                {/* <img className='vikup-img' src={Insurance} alt='TradeIn' /> */}
                <div className='komissia-wrap'>
                    <ul className='komissia-list'>
                        <li>{s2[lang]}</li>
                        <li>{s3[lang]}</li>
                        <h4>{s4[lang]}</h4>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Sugurta
