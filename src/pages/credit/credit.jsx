import { useSelector } from 'react-redux'
import { Language } from '../../lang/Languages'
import '../../components/style.css'

function Credit() {
    const { lang } = useSelector(state => state.lang)
    const { c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19 } =
        Language

    return (
        <main>
            <div className='social__title'>
                <span></span>
                <h2>{c1[lang]}</h2>
                <span></span>
            </div>
            <div className='pages-container'>
                <h3 className='komissia-title'>{c2[lang]}</h3>
                <div className='komissia-wrap'>
                    <h3>{c3[lang]}</h3>
                    <ul className='komissia-list'>
                        <li>{c4[lang]}</li>
                        <li>{c5[lang]}</li>
                        <li>{c6[lang]}</li>
                        <li>{c7[lang]}</li>
                        <li>{c8[lang]}</li>
                        <li>{c9[lang]}</li>
                        <li>{c10[lang]}</li>
                        <h4>{c11[lang]}</h4>
                        <li>{c12[lang]}</li>
                        <li>{c13[lang]}</li>
                        <li>{c14[lang]}</li>
                        <li>{c15[lang]}</li>
                        <li>{c16[lang]}</li>
                        <li>{c17[lang]}</li>
                        <h4>{c18[lang]}</h4>
                    </ul>
                    <ul className='komissia-list'>
                        <h4>
                            <a href='tel: +998951690988'>+998 95 169-09-88</a>
                        </h4>
                        <h4>
                            <a href='tel: +998974500988'>+998 97 450-09-88</a>
                        </h4>
                        <h4>
                            <a href='tel: +998971250988'>+998 97 125-09-88</a>
                        </h4>
                    </ul>
                    <a
                        className='credit-button'
                        href='https://my.gov.uz/uz/service/411'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        {c19[lang]}
                    </a>
                </div>
            </div>
        </main>
    )
}

export default Credit
