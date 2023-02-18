import { useSelector } from 'react-redux'
import KomisImg from '../../images/komissia.png'
import { Language } from '../../lang/Languages'
import '../../components/style.css'

function Komissia() {
    const { lang } = useSelector(state => state.lang)

    const { ktitle, k1, k2, k3,  k5, k6, k7, k8, k9, k10, k11 } = Language

    return (
        <main>
            <div className='social__title'>
                <span></span>
                <h2>{ktitle[lang]}</h2>
                <span></span>
            </div>
            <div className='pages-container'>
                <h3 className='komissia-title'>{k2[lang]}</h3>
                <img className='komissia-img' src={KomisImg} alt='' />
                <div className='komissia-wrap'>
                    <h3>{k1[lang]}</h3>
                    <ul className='komissia-list'>
                        <li>{k3[lang]}</li>
                        <li>{k5[lang]}</li>
                        <li>{k6[lang]}</li>
                        <li>{k7[lang]}</li>
                        <li>{k8[lang]}</li>
                        <li>{k9[lang]}</li>
                        <li>{k10[lang]}</li>
                        <li>{k11[lang]}</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Komissia
