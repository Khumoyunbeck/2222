import React, {useState} from 'react';
import {Button, Form, Input} from 'antd';
import "./create_application.css"
import AdminHeader from "../../components/admin_header/admin_header";
import axios from "axios";
import {MainApi} from "../../api";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";
import {Language} from "../../lang/Languages";

function CreateApplication(props) {

    const [file, setFile] = useState([])
    const {lang} = useSelector(state => state.lang)
    const {success} = Language;

    const handleFile = e => {
        setFile([...e.target.files])
    }
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
        file.forEach(file => formData.append('photo', file))

        if (!!localStorage.getItem("user_id")) {
            formData.append("userId", localStorage.getItem("user_id"))
        }
        axios.post(`${MainApi}/bank/add`, formData).then(res => {
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
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Ism"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Surname"
                        name="surname"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your surname!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Father name"
                        name="father_name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your father name!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Relative number"
                        name="relative_number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your relative\' number!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="House number"
                        name="house_number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your house number!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Relative number2"
                        name="relative_number2"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your relative number2!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Maosh"
                        name="maosh"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your relative maosh!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Photo"
                        name="photo"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your relative photo!',
                            },
                        ]}
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
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                <div>

                </div>
            </div>
        </div>
    );
}

export default CreateApplication;
