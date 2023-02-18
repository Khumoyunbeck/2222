import { useSelector } from 'react-redux'
import { Language } from '../../lang/Languages'
import '../../components/style.css'

function Komissia() {
    const { lang } = useSelector(state => state.lang)

    const { o1, o2, o3, o4, o5, o6, o7, o8, o9 } = Language

    return (
        <main>
            <div className='social__title'>
                <span></span>
                <h2>{o1[lang]}</h2>
                <span></span>
            </div>
            <div className='pages-container'>
                <h3 className='komissia-title'>{o2[lang]}</h3>
                <div className='komissia-wrap'>
                    <h3>{o3[lang]}</h3>
                    <ul className='komissia-list'>
                        <li>{o4[lang]}</li>
                        <br />
                        <li>{o5[lang]}</li>
                        <br />
                        <li>{o6[lang]}</li>
                        <br />
                        <p>
                            {o7[lang]} <a href='tel:+998974500988'>+998 97-450-0988</a>
                            {o8[lang]} {o9[lang]} <a href='mailto:retailauto@mail.ru'>retailauto@mail.ru</a>
                        </p>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Komissia
