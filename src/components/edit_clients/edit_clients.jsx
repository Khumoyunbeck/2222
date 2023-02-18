import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

function EditClientsForm() {
    const announcements_title_uz = useRef()
    const announcements_title_ru = useRef()
    const announcements_date = useRef()
    const { id } = useParams()
    const [news, setNews] = useState([])
    useEffect(() => {
        axios.get(`https://dev-rauto.uz/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setNews(data)
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="content">
            <div className="container-fluid">
                <div className="page-title-box">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h4>Form Elements</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-avto-body">
                                <h4 className="mb-2 header-title">Tahrirlash</h4>
                                {news.map(item => (
                                    <form autocomplete="off" >
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Mijoz ismi o'zbek tilida</label>
                                            <div className="col-sm-10">
                                                <input ref={announcements_title_uz} className="form-control input_elon_news_name_uz" type="text" name="name" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Mijoz ismi rus tilida</label>
                                            <div className="col-sm-10">
                                                <input ref={announcements_title_ru} className="form-control input_elon_news_name_ru" type="text" name="name" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Sana</label>
                                            <div className="col-sm-10">
                                                <input ref={announcements_date} className="form-control Input_elon_news_date" type="text" name="image" />
                                            </div>
                                        </div>
                                        <div className="m-5">
                                            <form enctype="multipart/form-data">
                                                <div className="download">
                                                    <p>Mijoz Rasmini yuklash</p>
                                                </div>
                                                <div className="files">`
                                                    <a href=' '>
                                                        Fayllar
                                                    </a>
                                                </div>
                                                <input type="file" className="file_input_download" />
                                                <div className="max_size">
                                                    <p>Max:100mb</p>
                                                </div>
                                                <div className="upload_button_3">
                                                    <button className="upload_button_file">
                                                        <a href=' '>Yuklash</a>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div>
                                            <a href="/api/news/all" className="button_sumbit_news btn btn-dark btn-sm float-right ml-3">Orqaga</a>
                                            <button type="submit" className="button_sumbit_news btn btn-success btn-sm float-right ml-3">Saqlash</button>
                                        </div>

                                    </form>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditClientsForm;
