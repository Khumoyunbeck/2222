import React from 'react';
import {Button, Form, Input} from 'antd';
import "./create_order.css"
import AdminHeader from "../../components/admin_header/admin_header";
import axios from "axios";
import {MainApi} from "../../api";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";
import {Language} from "../../lang/Languages";

function CreateOrder(props) {

    const {lang} = useSelector(state => state.lang)
    const {name, name_r, phone_r, phone, save, success} = Language;

    const onFinish = (values) => {
        axios.post(`${MainApi}/order/add`, values).then(res => {
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
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
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
                        <Input/>
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
                        <Input/>
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
            </div>
        </div>
    );
}

export default CreateOrder;
