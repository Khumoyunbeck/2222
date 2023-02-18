/* eslint-disable jsx-a11y/anchor-has-content */
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { addClient, editClient, getClient } from '../../store/client/client'
import {Language} from "../../lang/Languages";

function AddClientsForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState({ ismizuz: '', ismizru: '', data: '' })

    const [file, setFile] = useState('')

    const handleFile = e => setFile(e.target.files[0])

    const { client, code } = useSelector(state => state.client)

    useEffect(() => {
        if (!!id) dispatch(getClient(id))
        if (!!!id) setData({ ismizuz: '', ismizru: '', data: '' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    useEffect(() => {
        if (!!client) setData(client)
        if (!!!id) setData({ ismizuz: '', ismizru: '', data: '' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [client])

    useEffect(() => {
        if (code) navigate('/admin/clients')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [code])

    const saveClient = () => {
        let myData = new FormData()
        myData.append('name', data.ismizuz)
        myData.append('region', data.ismizru)
        myData.append('data', data.data)
        myData.append('photo', file)
        if (!!id) dispatch(editClient(myData, id))
        else dispatch(addClient(myData))
    }
    const {lang} = useSelector(state => state.lang)
    const {ph,name,region,date,save,back} = Language;

    return (
        <div className='content announcements_list2'>
            <div className='container-fluid'>
                <div className='page-title-box'>
                    <div className='row align-items-center'>
                        <div className='col-sm-6'>
                            <h4 className='header-title'>
                                {id ? 'Mijozni yengilash' : "Yangi Mijoz qo'shish"}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <form autoComplete='off' encType='multipart/form-data'>
                            <div className='form-group row'>
                                <label
                                    htmlFor='example-text-input'
                                    className='col-sm-2 col-form-label'
                                >
                                    {name[lang]}
                                </label>
                                <div className='col-sm-10'>
                                    <input
                                        value={data.ismizuz}
                                        onChange={e =>
                                            setData({ ...data, ismizuz: e.target.value })
                                        }
                                        className='form-control input_elon_news_name_uz'
                                        type='text'
                                        name='name'
                                    />
                                </div>
                            </div>
                            <div className='form-group row'>
                                <label
                                    htmlFor='example-text-input'
                                    className='col-sm-2 col-form-label'
                                >
                                    {region[lang]}
                                </label>
                                <div className='col-sm-10'>
                                    <input
                                        value={data.ismizru}
                                        onChange={e =>
                                            setData({ ...data, ismizru: e.target.value })
                                        }
                                        className='form-control input_elon_news_name_ru'
                                        type='text'
                                        name='name'
                                    />
                                </div>
                            </div>
                            <div className='form-group row'>
                                <label
                                    htmlFor='example-text-input'
                                    className='col-sm-2 col-form-label'
                                >
                                    {date[lang]}
                                </label>
                                <div className='col-sm-10'>
                                    <input
                                        value={data.data}
                                        onChange={e => setData({ ...data, data: e.target.value })}
                                        className='form-control Input_elon_news_date'
                                        type='text'
                                        name='image'
                                    />
                                </div>
                            </div>
                            <div className='m-5'>
                                <form encType='multipart/form-data'>
                                    <div className='download'>
                                        <p>{ph[lang]}</p>
                                    </div>
                                    <div className='files'>
                                        <a href=' '></a>
                                    </div>
                                    <input
                                        onChange={event => handleFile(event)}
                                        type='file'
                                        className='file_input_download'
                                    />
                                    <div className='max_size'>
                                        <p>Max:100mb</p>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <Link
                                    to='/admin/clients'
                                    className='button_sumbit_news btn btn-dark btn-sm float-right ml-3'
                                >
                                    {back[lang]}
                                </Link>
                                <button
                                    onClick={saveClient}
                                    type='button'
                                    className='button_sumbit_news btn btn-success btn-sm float-right ml-3'
                                >
                                    {save[lang]}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddClientsForm
