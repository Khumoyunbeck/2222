import React, {useEffect, useState} from 'react';
import { Form, Image, Input} from 'antd';
import "./update_client.css"
import AdminHeader from "../../components/admin_header/admin_header";
import axios from "axios";
import {MainApi} from "../../api";
import {toast} from "react-toastify";
import {useParams} from "react-router";
import {useSelector} from "react-redux";
import {Language} from "../../lang/Languages";

function UpdateClients() {
    const {id} = useParams()
    const [data, setData] = useState({})

    const [form] = Form.useForm()


    const {lang} = useSelector(state => state.lang)
    const {req,name,region,date,success} = Language;

    useEffect(() => {
        if (!!id)
            axios.get(`${MainApi}/client/${id}`).then(res => {
                setData(res?.data?.data)
                form.setFieldsValue(res?.data?.data)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const onFinish = (values) => {
        axios.put(`${MainApi}/client/${id}`, values).then(res => {
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
                <div style={{marginLeft: "300px", marginBottom:"25px"}}>
                    <Image src={data?.photo} className="sp-img"/>
                </div>
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
                        <Input disabled/>
                    </Form.Item>

                    <Form.Item
                        label={region[lang]}
                        name="region"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Input disabled/>
                    </Form.Item>

                    <Form.Item
                        label={date[lang]}
                        name="date"
                        rules={[
                            {
                                required: true,
                                message: req[lang],
                            },
                        ]}
                    >
                        <Input disabled/>
                    </Form.Item>

                </Form>
            </div>
        </div>
    );
}

export default UpdateClients;
