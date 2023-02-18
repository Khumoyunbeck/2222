import { useState, useEffect, useContext } from 'react';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import { useParams } from 'react-router-dom'

function SearchedPage() {
    const { lang, setLang } = useContext(LanguageContext);
    const { question } = useParams()
    const [page, setPage] = useState([])
    useEffect(() => {
        axios.get(`https://dev-rauto.uz/sub_categories/find/${question}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPage(data)
            });
    }, [])
    console.log(page);
    return (
        <>
            <div class="container-fluid mt-5">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="sn-container">
                            {page.map(item => (
                                <div class="sn-content">
                                    <h1 class="sn-title">{item[`section_title_${lang}`]}</h1>
                                    <div class="mainBody" dangerouslySetInnerHTML={{ __html: item[`section_main_${lang}`] }}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchedPage;
