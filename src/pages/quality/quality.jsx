import { useSelector } from 'react-redux'
// import KomisImg from '../../images/komissia.png'
import { Language } from '../../lang/Languages'
import '../../components/style.css'

function Quality() {
    const { lang } = useSelector(state => state.lang)

    const { qu1, qu2, qu3, qu4, qu5, qu6, qu7, qu8 } = Language
  return (
    <main>
            <div className='pages-container'>
                <h3 className='komissia-title'>{qu1[lang]}</h3>
                <div className='komissia-wrap'>
                    <h3>{qu2[lang]}</h3>
                    <ul className='komissia-list'>
                        <li>{qu3[lang]}</li>
                        <li>{qu4[lang]}</li>
                        <li>{qu5[lang]}</li>
                        <li>{qu6[lang]}</li>
                        <li>{qu7[lang]}</li>
                        <li className='mt-3'>{qu8[lang]}</li>
                    </ul>
                </div>
            </div>
        </main>
  )
}

export default Quality
