/* eslint-disable react/jsx-pascal-case */
import {useLocation} from "react-router";
import {Link} from 'react-router-dom'
import {Button, Col, Form, Input, Modal, Row} from 'antd'
import AdminHeader from '../../components/admin_header/admin_header'
import Application_page from '../../components/Applications_page/Application_page'
import Banks from "../../components/banks/banks";
import axios from "axios";
import {MainApi} from "../../api";
import {useEffect, useMemo, useState} from "react";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";
import {Language} from "../../lang/Languages";
import LogoutComponent from "../../components/logoutComponent/logoutComponent";

function CardsAdmin() {
    const location = useLocation()
    const [banks, setBanks] = useState([])
    const [type, setType] = useState(null)
    const {lang} = useSelector(state => state.lang)
    const {deleteOrd,search,home} = Language

    useEffect(() => {
        if (!!localStorage.getItem("user_token")) {
            setType("user")
        }
        if (!!localStorage.getItem("bank_token")) {
            setType("bank")
        }
        if (!!localStorage.getItem("admin_token")) {
            setType("admin")
        }
        if (!!localStorage.getItem("moderator_token")) {
            setType("moderator")
        }
    }, [])

    const getBanks = async () => {
        await axios
            .get(`${MainApi}/bank/all`)
            .then((res) => setBanks(res.data?.data))
            .catch((err) => new Error(err));
    };

    const deleteApplication = id => {
        Modal.confirm({
            centered: true,
            title: deleteOrd[lang],
            icon: <ExclamationCircleOutlined/>,
            onOk() {
                axios
                    .delete(`${MainApi}/bank/${id}`)
                    .then(res => {
                        getBanks();
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
        })
    }

    useEffect(() => {
        getBanks();
    }, [])

    const data = useMemo(() => {
        return banks?.map(item => ({
            photo: item?.photo,
            pending: item?.pending,
            _id: item?._id,
            name: item?.name,
            surname: item?.surname,
            father_name: item?.father_name,
            phone: item?.phone,
            relative_number: item?.relative_number,
            house_number: item?.house_number,
            relative_number2: item?.relative_number2,
            maosh: item?.maosh,
            INN:item?.INN,
            bank_name:item?.bank_name,
            data: {_id: item?._id, pending: item?.pending, status: item?.status},
            mad: {_id: item?._id, status: item?.status, pending: item?.pending}
        }))
    }, [banks])

   

    return (
        <div className='d-flex'>
            <AdminHeader/>
            <div className='page_list'>
                <div className="pt-5">
                    <LogoutComponent/>
                </div>
                <Row>
                    <Col span={24} className='d-flex justify-content-between align-items-center py-3'>
                        <h3>
                            {location.pathname === '/admin/applications'
                                ? 'Tushgan arizalar'
                                : 'Tushgan arizalar batafsil'}
                        </h3>
                        <form className='d-flex my-auto'>
                            <Form.Item name='search' className='mb-0'>
                                <Input className='rounded'/>
                            </Form.Item>
                            <Button className='rounded' type='primary'>
                                {search[lang]}
                            </Button>
                        </form>
                        <div>
                            <Button type='primary' danger>
                                <Link to='/'>{home[lang]}</Link>
                            </Button>
                            {" "}
                            {" "}
                        </div>
                    </Col>
                    <div style={{width: "100%"}}>
                        {location.pathname === '/admin/applications' ? (
                            <Banks dataSource={
                                type === "bank" ? data?.filter(i => i?.data?.status) : data
                            } getBanks={getBanks} deleteApplication={deleteApplication}/>
                        ) : (
                            <Application_page/>
                        )}
                    </div>

                </Row>
            </div>
        </div>
    )
}

export default CardsAdmin
