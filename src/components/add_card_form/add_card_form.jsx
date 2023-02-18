import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {addCar, editCar, getCar} from '../../store/car/car'
import {Language} from './../../lang/Languages'
import {fields} from './fields'
// import {Editor} from "react-draft-wysiwyg";
// import {convertToRaw, EditorState} from "draft-js";
// import draftToHtml from "draftjs-to-html";
import {useMediaQuery} from "react-responsive";
import {toast} from "react-toastify";
    import { Input } from 'antd';

function AddCardForm() {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {handleSubmit, register, setValue, reset} = useForm()
    const [data, setData] = useState(fields)

    const { TextArea } = Input;

    const [file, setFile] = useState([])
    const [op1, setOp1] = useState("")
    const [op2, setOp2] = useState("")
    const is1024 = useMediaQuery({query: "(max-width: 1024px)"})
    const { opisaniya, opisaniyaru, photo, success, newCarAdd, back } = Language

    const handleFile = e => {
        setFile([...e.target.files])
    }

    const {lang} = useSelector((state) => state.lang);


    const {car} = useSelector(state => state.car)

    useEffect(() => {
        if (!!car) Object.keys(car).forEach(key => setValue(key, car[key]))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [car])

    useEffect(() => {
        if (!!id) dispatch(getCar(id))
        else reset()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const obSubmit = values => {
        const formData = new FormData()
        Object.keys(values).forEach(
            key =>
                key !== 'photo' &&
                key !== '_id' &&
                key !== '__v' &&
                key !== 'date' &&
                formData.append(key, values[key])
        )
        file.forEach(file => formData.append('photo', file))

        formData.append("opisaniya", op1)
        formData.append("opisaniyaru", op2)

        if (!!localStorage.getItem("user_id")) {
            formData.append("userId", localStorage.getItem("user_id"))
        }
        if (!!localStorage.getItem("admin_id")) {
            formData.append("adminId", localStorage.getItem("admin_id"))
        }
        if (!!id) {
            dispatch(editCar(formData, id))
            navigate("/admin/cards")
            toast.success(success[lang])
        }
        else {
            navigate("/admin/cards")
            dispatch(addCar(formData))
            toast.success(success[lang])
        }
    }






    
    useEffect(() => {
        if (!!localStorage.getItem("admin_token"))
            setData(fields)
        else setData(fields.filter(i => i.key !== "aksiya"))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fields])

    return (
        <div className={`${is1024 ? "content1024" : "content"}`}>
            <form
                autoComplete='off'
                encType='multipart/form-data'
                className='el_form page_form'
                onSubmit={handleSubmit(obSubmit)}
            >
                <div className='container-fluid'>
                    <div className='page-title-box'>
                        <div className='row align-items-center'>
                            <div className='col-sm-6'>
                                <h4>{newCarAdd[lang]}</h4>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='card-avto'>
                                <div className='card-avto-body'>
                                    <h4 className='mt-0 header-title'>{newCarAdd[lang]}</h4>
                                    {
                                        data.filter(i => i.key !== "status").map((field, index) => {
                                                return (
                                                    <div className='form-group row' key={index}>
                                                        <label
                                                            htmlFor='example-text-input'
                                                            className='col-sm-2 col-form-label'
                                                        >
                                                            {field.label[lang]}
                                                        </label>
                                                        <div className='col-sm-5'>
                                                            {!!field.select ? (
                                                                <select
                                                                    className='main_selector form-control'
                                                                    {...register(field.key, {
                                                                        required:
                                                                            field.key === 'aksiya'
                                                                                ? false
                                                                                : true,
                                                                    })}
                                                                >
                                                                    {field?.select?.map((select, index1) =>
                                                                        !!select.label ? (
                                                                            <optgroup
                                                                                label={select.label}
                                                                                key={index1}
                                                                            >
                                                                                {select?.optgroup?.map(
                                                                                    (opt, index2) => (
                                                                                        <option
                                                                                            value={opt.value}
                                                                                            key={index2}
                                                                                        >
                                                                                            {opt.name}
                                                                                        </option>
                                                                                    )
                                                                                )}
                                                                            </optgroup>
                                                                        ) : (
                                                                            <option
                                                                                value={select.value}
                                                                                key={index1}
                                                                            >
                                                                                {select.name}
                                                                            </option>
                                                                        )
                                                                    )}
                                                                </select>
                                                            ) : (
                                                                <input
                                                                    type={field.type}
                                                                    className='form-control page_title_uz'
                                                                    {...register(field.key, {
                                                                        required: true,
                                                                        onChange: e => {
                                                                            let num = Number(e.target.value)
                                                                                .toLocaleString()
                                                                                .replace(/,/g, ' ')

                                                                            console.log(num)
                                                                            return num
                                                                        },
                                                                    })}
                                                                />
                                                            )}
                                                        </div>
                                                    </div>
                                                )

                                            }
                                        )}
                                    <div className='pageBody' >
                                        <div className='gap30' >
                                        <label>
                                            {opisaniya[lang]}
                                        </label>
                                        <div  className='textarean'>
                                        <TextArea rows={4} onChange={e=>setOp1(e.target.value)}/>
                                        </div>
                                        </div>
                                    </div>
                                    <div className='pageBody m-t-40'>
                                        <div className='gap30' >
                                        <label>
                                        {opisaniyaru[lang]}
                                        </label>
                                        <div  className='textarean'>
                                        <TextArea rows={4} onChange={e=>setOp2(e.target.value)}/>
                                        </div>
                                        </div>
                                    </div>
                                    <div className='m-5'>
                                        <div className='download'>
                                            <p>{photo[lang]}</p>
                                        </div>
                                        <div className='max_size'>
                                            <p>Max:10mb</p>
                                        </div>
                                        <div className='upload_button_3'>
                                            <form
                                                action='/profile'
                                                method='post'
                                                multiple='multiple'
                                            >
                                                <input
                                                    onChange={event => handleFile(event)}
                                                    type='file'
                                                    name='files'
                                                    multiple
                                                />
                                            </form>
                                        </div>
                                        <div className='btn-admin m-t-40'>
                                            <a
                                                href='/admin/cards'
                                                className='button_sumbit_news btn btn-dark btn-sm float-right ml-3'
                                            >
                                                {back[lang]}
                                            </a>
                                            <input
                                                type='submit'
                                                placeholder='Yuborish'
                                                className='button_sumbit_news btn btn-success btn-sm float-right ml-3'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddCardForm
