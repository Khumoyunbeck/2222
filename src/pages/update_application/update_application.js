import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Image, Input, Row} from 'antd';
import "./update_application.css"
import AdminHeader from "../../components/admin_header/admin_header";
import axios from "axios";
import {MainApi} from "../../api";
import {toast} from "react-toastify";
import {useParams} from "react-router";
import {useSelector} from "react-redux";
import {Language} from "../../lang/Languages";

function UpdateApplication() {
    const {id} = useParams()
    const [data, setData] = useState({})
    const [form] = Form.useForm()

    const [file, setFile] = useState([])
    const {lang} = useSelector(state => state.lang)
    const {success,father_name,sername,phone,relative_number,relative_number2,house_number,ph,salary1,name,req,save} = Language;

    const handleFile = e => {
        setFile([...e.target.files])
    }

    useEffect(() => {
        if (!!id)
            axios.get(`${MainApi}/bank/${id}`).then(res => {
                setData(res?.data?.data)
                let a = {}
                Object.entries((res?.data?.data)).forEach(item => {
                    if (item[0] !== "photo") {
                        a = {...a, [item[0]]: item[1]}
                    }
                })
                form.setFieldsValue(a)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const onFinish = (values) => {
        const formData = new FormData()
        Object.keys(values).forEach(
            key =>
                key !== 'photo' &&
                key !== '_id' &&
                key !== '__v' &&
                key !== 'date' &&
                formData.append(key, values[key])
        )
        if (file.length)
            file.forEach(file => formData.append('photo', file))
        if (!!localStorage.getItem("user_id")) {
            formData.append("userId", localStorage.getItem("user_id"))
        }
        if (!!localStorage.getItem("admin_id")) {
            formData.append("userId", localStorage.getItem("admin_id"))
        }
        if (!!localStorage.getItem("bank_id")) {
            formData.append("userId", localStorage.getItem("admin_id"))
        }
        axios.put(`${MainApi}/bank/${id}`, formData).then(res => {
            toast.success(success[lang])
        }).catch(er => console.log(er))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div className="contain">
            <AdminHeader/>
            <div className="fields">
                <Form
                    form={form}
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label={name[lang]}
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label={sername[lang]}
                        name="surname"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label={father_name[lang]}
                        name="father_name"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label={phone[lang]}
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label={relative_number[lang]}
                        name="relative_number"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label={house_number[lang]}
                        name="house_number"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label={relative_number2[lang]}
                        name="relative_number2"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label={salary1[lang]}
                        name="maosh"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label={ph[lang]}
                        name="photo"
                    >
                        <input
                            onChange={event => handleFile(event)}
                            type='file'
                            name='files'
                            multiple
                        />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            {save[lang]}
                        </Button>
                    </Form.Item>
                </Form>
                <Row gutter={16} className="ml200">
                    <Col span={8}>
                        <Image
                            width={200}
                            src={data.photo?.[0]}
                        />
                    </Col>
                    <Col span={8}>
                        <Image
                            width={200}
                            src={data?.photo?.[1]}
                        />
                    </Col>
                    <Col span={8}>
                        <Image
                            width={200}
                            src={data?.photo?.[2]}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default UpdateApplication;
