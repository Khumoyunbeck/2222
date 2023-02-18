import React, {useEffect} from 'react';
import { Form, Input} from 'antd';
import "./update_order.css"
import AdminHeader from "../../components/admin_header/admin_header";
import axios from "axios";
import {MainApi} from "../../api";
import {toast} from "react-toastify";
import {useParams} from "react-router";
import {useSelector} from "react-redux";
import {Language} from "../../lang/Languages";

function UpdateOrder() {
    const {id} = useParams()

    const [form] = Form.useForm()

    useEffect(() => {
        if (!!id)
            axios.get(`${MainApi}/order/${id}`).then(res => {
                form.setFieldsValue(res?.data?.data)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const onFinish = (values) => {
        axios.put(`${MainApi}/order/${id}`, values).then(res => {
            toast.success(success[lang])
        }).catch(er => console.log(er))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    const {lang} = useSelector(state => state.lang)
    const {name,name_r,phone_r,phone,success} = Language;

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
                                message: name_r[lang],
                            },
                        ]}
                    >
                        <Input disabled/>
                    </Form.Item>
                    <Form.Item
                        label={phone[lang]}
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: phone_r[lang],
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

export default UpdateOrder;
