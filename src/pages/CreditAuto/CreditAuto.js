import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {Button, Card, Checkbox, Col, Form, Input, Row, Select} from 'antd'
import {getCar} from '../../store/car/car'
import {Language} from '../../lang/Languages'
import {toast} from "react-toastify";
import axios from "axios";
import {MainApi} from "../../api";
import img1 from "../../assets/img/credit/Group1.jpg"
import img2 from "../../assets/img/credit/Group2.jpg"
import img3 from "../../assets/img/credit/Group3.jpg"
import img4 from "../../assets/img/credit/Group4.jpg"

const CreditAuto = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [sec, setSec] = useState("")
    const [bool, setBool] = useState(false)
    const [salaryd, setSalaryd] = useState(false)

    const {lang} = useSelector(state => state.lang)
    const {success, oferta_tol} = Language;

    const {car} = useSelector(state => state.car)
    const [images1, setImages1] = useState([])
    const [images2, setImages2] = useState([])
    const [images3, setImages3] = useState([])
    const [image1, setImage1] = useState([])
    const [image2, setImage2] = useState([])
    const [image3, setImage3] = useState([])

    const {
        sername,
        req_surname,
        name,
        req_name,
        father_name,
        req_father_name,
        personal_num,
        req_personal_num,
        qarindosh_num,
        req_qarindosh_num,
        home_num,
        req_home_num,
        salary,
        comment_input,
        comment_num,
        how_much,
        passport,
        // note_comment,
        yuborish,
        // shartnoma,
        passportid1,
        passportid2,
        passportid3,
        passportimage,
        check,
        fill,
        inn,
        req,
        bank_name
    } = Language

    useEffect(() => {
        dispatch(getCar(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // function createMarkup() {
    //     return {__html: shartnoma[lang]}
    // }

    // function createMarkup1() {
    //     return {__html: note_comment[lang]}
    // }

    function createMarkup2() {
        return {__html: passportimage[lang]}
    }

    function createMarkup3() {
        return {__html: fill[lang]}
    }

    const formData = new FormData()

    const onFinish = values => {
        if (bool) {
            [images1, images2, images3]?.forEach(file => formData.append('photo', file));
            Object.entries(values)?.forEach(item => {
                if (item[0] === "phone" || item[0] === "relative_number" || item[0] === "house_number" || item[0] === "relative_number2") {
                    formData?.append(item[0], item[1].replace(/\+/g, '')
                        .replace(/\s/g, '')
                        .replace(/-/g, '').replace(/[{()}]/g, ''))
                } else {
                    if (item[0] === "maosh" && item[1] === undefined) {
                        formData?.append(item[0], "")
                    } else {
                        formData?.append(item[0], item[1])
                    }
                }
            })
            axios.post(`${MainApi}/bank/add`, formData).then(r => {
                toast.success(success[lang])
            }).catch(e =>
                toast.error("Xatolik yuz berdi!")
            )
        } else {
            toast.error(oferta_tol[lang])
        }
    }

    // const dummyRequest = ({file, onSuccess}) => {
    //     setTimeout(() => {
    //         onSuccess("ok")
    //     }, 0)
    // }


    const handleChange1 = (info) => {
        setImages1(info.target.files[0])
        onImageChange(info.target.files[0], setImage1)
    }
    const handleChange2 = (info) => {
        setImages2(info.target.files[0])
        onImageChange(info.target.files[0], setImage2)
    }
    const handleChange3 = (info) => {
        setImages3(info.target.files[0])
        onImageChange(info.target.files[0], setImage3)
    }

    const onImageChange = (event, setImage) => {
        if (event) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result)
            };
            reader.readAsDataURL(event);
        }
    }
    //
    // useEffect(() => {
    //     if (images?.length === 3) {
    //         for (let i = 0; i < images?.length; i++) {
    //             if (i === 0) onImageChange(images[i], setImage1)
    //             if (i === 1) onImageChange(images[i], setImage2)
    //             if (i === 2) onImageChange(images[i], setImage3)
    //         }
    //     }
    // }, [images])

    const onChange = (e) => {
        setBool(e?.target?.checked)
    }

    const data = [
        {
            value: '308064151',
            label: 'OOO "AVTO SAVDO KONSALT"',
        },
        {
            value: '308656103',
            label: 'ООО "AVTOKOM KONSALT"',
        },
        {
            value: '308198824',
            label: 'ООО "AUTO SALE NEXT"',
        },
        {
            value: '309012674',
            label: 'OOO AVTO KOMISSION TRADE',
        },
        {
            value: '308338695',
            label: 'OOO "MIR AVTO CAR"',
        },
        {
            value: '308544187',
            label: 'ООО "TRADE KONSALT"',
        },
        {
            value: '308072919',
            label: 'OOO"GRAND AVTO"',
        },
    ];

    const onChange1 = (e) => {
        setSec(data?.filter(i => i.value.toString() === e.target.value.toString())[0].label)
    }

    return (
        <div className='container'>
            {car && (
                <Card style={{width: '100%', borderColor: 'yellow'}}>
                    <Row className='align-items-center'>
                        <Col span={4}>
                            <img src={car?.photo[0]} alt='car_photo' className='border'/>
                        </Col>
                        <Col span={8}>
                            <h3>{car?.madel}</h3>
                            <h4>{car?.narxi} UZS</h4>
                        </Col>
                        <Col span={12}>
                            <p className='pb-0' dangerouslySetInnerHTML={createMarkup3()}/>
                        </Col>
                    </Row>
                </Card>
            )}
            <Form
                onFinish={onFinish}
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                className='my-4'
            >
                <Row className='d-flex align-items-center' gutter={18}>
                    {/* surname, name, fathername */}
                    <Col lg={8} md={12} sm={24}>
                        {/* Surname */}
                        <Form.Item
                            label={sername[lang]}
                            name='surname'
                            rules={[
                                {
                                    required: true,
                                    message: req_surname[lang],
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        {/* Name */}
                        <Form.Item
                            label={name[lang]}
                            name='name'
                            rules={[
                                {
                                    required: true,
                                    message: req_name[lang],
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        {/* Father name */}
                        <Form.Item
                            label={father_name[lang]}
                            name='father_name'
                            rules={[
                                {
                                    required: true,
                                    message: req_father_name[lang],
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    {/* text */}
                    <Col lg={8} md={12} sm={24}>
                        <p>{comment_input[lang]}</p>
                    </Col>
                    <Col span={8}/>
                    {/* phone */}
                    <Col lg={8} md={12} sm={24}>
                        {/* personal_num */}
                        <Form.Item
                            label={personal_num[lang]}
                            name='phone'
                            rules={[
                                {
                                    required: true,
                                    message: req_personal_num[lang],
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        {/* qarindosh_num */}
                        <Form.Item
                            label={qarindosh_num[lang]}
                            name='relative_number'
                            rules={[
                                {
                                    required: true,
                                    message: req_qarindosh_num[lang],
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    {/* phone */}
                    <Col lg={8} md={12} sm={24}>
                        {/* home_num */}
                        <Form.Item
                            label={home_num[lang]}
                            name='house_number'
                            rules={[
                                {
                                    required: true,
                                    message: req_home_num[lang],
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        {/* qarindosh_num */}
                        <Form.Item label={qarindosh_num[lang]} name='relative_number2'>
                            <Input/>
                        </Form.Item>
                    </Col>
                    {/* text */}
                    <Col lg={8} md={12} sm={24}>
                        <p>{comment_num[lang]}</p>
                    </Col>
                    {/* salary */}
                    <Col lg={8} md={12} sm={24}>
                        <div className='ms-4 p-3' style={{backgroundColor: '#F3BB04'}}>
                            <Checkbox name='salary' onChange={e => setSalaryd(e.target.checked)}>
                                {salary[lang]}
                            </Checkbox>
                        </div>
                        {/* how_much */}
                        <Form.Item
                            label={how_much[lang]}
                            name='maosh'
                            className='mt-4'
                            rules={[
                                {
                                    required: salaryd,
                                    message: req_home_num[lang],
                                },
                            ]}
                        >
                            <Input disabled={!salaryd}/>
                        </Form.Item>
                    </Col>

                    <Col lg={16} sm={24}/>
                    {/* photos */}
                    {/* select photo */}
                    <Col lg={8} md={12} sm={24}>
                        <Form.Item
                            label={bank_name[lang]}
                            name='bank_name'
                            rules={[
                                {
                                    required: true,
                                    message: req[lang],
                                },
                            ]}
                        >
                            <Select
                                defaultValue=""
                                options={[
                                    {
                                        value: 'Anor bank',
                                        label: 'Anor bank',
                                    }
                                ]}
                            />
                        </Form.Item>

                        {/* qarindosh_num */}
                        <Row>
                            <Col lg={8} md={0} sm={0}>
                            </Col>
                            <Col lg={16} md={24} sm={24}>
                                {sec}
                            </Col>
                        </Row>
                        <Form.Item
                            label={inn[lang]}
                            name='INN'
                            rules={[
                                {
                                    required: true,
                                    message: req[lang],
                                },
                            ]}
                        >
                            <Input onChange={onChange1}/>
                        </Form.Item>
                    </Col>
                    <br/>
                    <Col lg={8} md={12} sm={24}/>
                    <Col lg={8} md={12} sm={24}/>

                    <Col>
                        <p className='text-center'>{passport[lang]}</p>
                    </Col>
                    <Col lg={8} md={12} sm={24}/>

                    <Col span={24} className='text-end mb-2 df'>
                        <div>
                            <input type="file" onChange={event => handleChange1(event)}/>
                        </div>
                        <div>
                            {passportid1[lang]}
                        </div>
                    </Col>
                    <Col span={24} className='text-end mb-2 df'>
                        <div>
                            <input type="file" onChange={event => handleChange2(event)}/>
                        </div>
                        <div>
                            {passportid2[lang]}
                        </div>
                    </Col>
                    <Col span={24} className='text-end mb-2 df'>
                        <div>
                            <input type="file" onChange={event => handleChange3(event)}/>
                        </div>
                        <div>
                            {passportid3[lang]}
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={24}>
                        <div className='m-5'>
                            <img src={image1} alt='image1' width='100%'/>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={24}>
                        <div className='m-5'>
                            <img src={image2} alt='image1' width='100%'/>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={24}>
                        <div className='m-5'>
                            <img src={image3} alt='image1' width='100%'/>
                        </div>
                    </Col>
                    {/*<Col span={18}>*/}
                    {/*    <div className='d-flex mx-5'>*/}
                    {/*        <p className='text-danger fw-bold me-2'>!!!{note[lang]}</p>*/}
                    {/*        <p dangerouslySetInnerHTML={createMarkup1()}/>*/}
                    {/*    </div>*/}
                    {/*</Col>*/}
                    <Col lg={12} sm={24} className='px-5'>
                        <Checkbox value={bool} onChange={onChange}>{check[lang]}</Checkbox>
                    </Col>
                    <Col lg={12} sm={24} className='text-end'>
                        <Button
                            className='me-5'
                            htmlType='submit'
                            type='primary'
                            style={{borderRadius: 8}}
                        >
                            {yuborish[lang]}
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={12} sm={24}>
                        <div className='m-5'>
                            <img src={img1} alt='image1' width='100%'/>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={24}>
                        <div className='m-5'>
                            <img src={img2} alt='image1' width='100%'/>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={24}>
                        <div className='m-5'>
                            <img src={img3} alt='image1' width='100%'/>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={24}>
                        <div className='m-5'>
                            <img src={img4} alt='image1' width='100%'/>
                            <p style={{fontSize: 14}} dangerouslySetInnerHTML={createMarkup2()}/>
                        </div>
                    </Col>
                </Row>

            </Form>
        </div>
    )
}

export default CreditAuto
